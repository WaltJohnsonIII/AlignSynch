# PowerShell script for fixing parallel markers on test tasks
# Usage: .\scripts\fix-parallel-markers.ps1 -TasksPath "specs/004-fix-tdd-compliance/tasks.md"

param(
    [Parameter(Mandatory=$true)]
    [string]$TasksPath,
    
    [string]$BackupPath,
    [switch]$DryRun
)

# Set error action preference
$ErrorActionPreference = "Stop"

# Function to write colored output
function Write-ColorOutput {
    param(
        [string]$Message,
        [string]$Color = "White"
    )
    Write-Host $Message -ForegroundColor $Color
}

# Function to detect parallel markers on test tasks
function Get-ParallelMarkerViolations {
    param(
        [string]$TasksFilePath
    )
    
    $violations = @()
    $content = Get-Content -Path $TasksFilePath -Raw
    $lines = $content -split "`n"
    
    for ($i = 0; $i -lt $lines.Length; $i++) {
        $line = $lines[$i]
        $lineNumber = $i + 1
        
        # Match task lines with [P] marker
        if ($line -match '^-\s*\[\s*\]\s*(T\d+)\s*\[P\]\s*(.+)$') {
            $taskId = $matches[1]
            $description = $matches[2]
            
            # Check if this is a test task
            if ($description -match '(tests?|contract|integration|unit)') {
                $violations += @{
                    LineNumber = $lineNumber
                    TaskId = $taskId
                    Description = $description
                    OriginalText = $line
                }
            }
        }
    }
    
    return $violations
}

# Function to fix parallel markers
function Fix-ParallelMarkers {
    param(
        [string]$TasksFilePath,
        [array]$Violations,
        [string]$BackupFilePath,
        [bool]$IsDryRun
    )
    
    $changes = @()
    
    if ($Violations.Count -eq 0) {
        Write-ColorOutput "No parallel marker violations found on test tasks" "Green"
        return $changes
    }
    
    # Create backup if not dry run
    if (-not $IsDryRun -and $BackupFilePath) {
        Copy-Item -Path $TasksFilePath -Destination $BackupFilePath
        Write-ColorOutput "Created backup: $BackupFilePath" "Yellow"
    }
    
    $content = Get-Content -Path $TasksFilePath -Raw
    $lines = $content -split "`n"
    
    foreach ($violation in $Violations) {
        $lineIndex = $violation.LineNumber - 1
        if ($lineIndex -lt $lines.Length) {
            $originalLine = $lines[$lineIndex]
            $newLine = $originalLine -replace '\s*\[P\]\s*', ' '
            
            if (-not $IsDryRun) {
                $lines[$lineIndex] = $newLine
            }
            
            $changes += @{
                LineNumber = $violation.LineNumber
                OriginalText = $originalLine
                NewText = $newLine
                ChangeType = "REMOVE_PARALLEL_MARKER"
            }
        }
    }
    
    # Write changes if not dry run
    if (-not $IsDryRun -and $changes.Count -gt 0) {
        $lines -join "`n" | Set-Content -Path $TasksPath
    }
    
    return $changes
}

# Main execution
try {
    Write-ColorOutput "Starting parallel marker fixing..." "Cyan"
    Write-ColorOutput "Tasks Path: $TasksPath" "Gray"
    
    if ($DryRun) {
        Write-ColorOutput "DRY RUN MODE - No changes will be made" "Yellow"
    }
    
    # Validate file path
    if (-not (Test-Path $TasksPath)) {
        throw "Tasks file not found: $TasksPath"
    }
    
    # Detect violations
    Write-ColorOutput "`nDetecting parallel marker violations..." "Yellow"
    $violations = Get-ParallelMarkerViolations -TasksFilePath $TasksPath
    
    if ($violations.Count -eq 0) {
        Write-ColorOutput "No parallel marker violations found on test tasks" "Green"
        exit 0
    }
    
    Write-ColorOutput "Found $($violations.Count) parallel marker violations on test tasks:" "Red"
    foreach ($violation in $violations) {
        Write-ColorOutput "  Line $($violation.LineNumber): $($violation.TaskId) - $($violation.Description)" "Red"
    }
    
    # Fix violations
    Write-ColorOutput "`nFixing parallel markers..." "Yellow"
    $changes = Fix-ParallelMarkers -TasksFilePath $TasksPath -Violations $violations -BackupFilePath $BackupPath -IsDryRun $DryRun
    
    if ($changes.Count -gt 0) {
        if ($DryRun) {
            Write-ColorOutput "Would fix $($changes.Count) parallel markers:" "Yellow"
            foreach ($change in $changes) {
                Write-ColorOutput "  Line $($change.LineNumber):" "Gray"
                Write-ColorOutput "    - $($change.OriginalText)" "Red"
                Write-ColorOutput "    + $($change.NewText)" "Green"
            }
        } else {
            Write-ColorOutput "Fixed $($changes.Count) parallel markers" "Green"
        }
    }
    
    # Summary
    $action = if ($DryRun) { "Would remove" } else { "Removed" }
    Write-ColorOutput "`n$action $($changes.Count) parallel marker(s) from test tasks" "Cyan"
    
    if (-not $DryRun) {
        Write-ColorOutput "✅ Parallel marker fixing completed successfully!" "Green"
    } else {
        Write-ColorOutput "✅ Dry run completed - no changes made" "Green"
    }
    
    exit 0
    
} catch {
    Write-ColorOutput "`nError: $($_.Exception.Message)" "Red"
    exit 1
}
