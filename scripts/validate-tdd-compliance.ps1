# PowerShell script for TDD compliance validation
# Usage: .\scripts\validate-tdd-compliance.ps1 -SpecPath "specs/004-fix-tdd-compliance/spec.md" -TasksPath "specs/004-fix-tdd-compliance/tasks.md"

param(
    [Parameter(Mandatory=$true)]
    [string]$SpecPath,
    
    [Parameter(Mandatory=$true)]
    [string]$TasksPath,
    
    [switch]$AutoFix,
    [switch]$StrictMode,
    [switch]$IncludeWarnings
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

# Function to validate TDD compliance
function Test-TddCompliance {
    param(
        [string]$TasksFilePath
    )
    
    $violations = @()
    $content = Get-Content -Path $TasksFilePath -Raw
    $lines = $content -split "`n"
    
    for ($i = 0; $i -lt $lines.Length; $i++) {
        $line = $lines[$i]
        $lineNumber = $i + 1
        
        # Check for test tasks with parallel markers
        if ($line -match '^-\s*\[\s*\]\s*(T\d+)\s*\[P\]\s*(.+)$') {
            $taskId = $matches[1]
            $description = $matches[2]
            
            # Check if this is a test task
            if ($description -match '(tests?|contract|integration|unit)') {
                $violations += @{
                    Type = "TDD_COMPLIANCE"
                    Severity = "ERROR"
                    LineNumber = $lineNumber
                    TaskId = $taskId
                    Description = "Test task $taskId is marked as parallel but should be sequential for TDD compliance"
                    SuggestedFix = "Remove [P] marker from test task"
                    AutoFixable = $true
                }
            }
        }
    }
    
    return $violations
}

# Function to fix TDD compliance violations
function Fix-TddCompliance {
    param(
        [string]$TasksFilePath,
        [array]$Violations
    )
    
    $content = Get-Content -Path $TasksFilePath -Raw
    $lines = $content -split "`n"
    $changes = @()
    
    foreach ($violation in $Violations) {
        if ($violation.AutoFixable) {
            $lineIndex = $violation.LineNumber - 1
            if ($lineIndex -lt $lines.Length) {
                $originalLine = $lines[$lineIndex]
                $newLine = $originalLine -replace '\s*\[P\]\s*', ' '
                $lines[$lineIndex] = $newLine
                
                $changes += @{
                    LineNumber = $violation.LineNumber
                    OriginalText = $originalLine
                    NewText = $newLine
                    ChangeType = "REMOVE_PARALLEL_MARKER"
                }
            }
        }
    }
    
    if ($changes.Count -gt 0) {
        # Create backup
        $backupPath = $TasksFilePath + ".backup"
        Copy-Item -Path $TasksFilePath -Destination $backupPath
        
        # Write changes
        $lines -join "`n" | Set-Content -Path $TasksFilePath
        
        Write-ColorOutput "Created backup: $backupPath" "Yellow"
        Write-ColorOutput "Fixed $($changes.Count) TDD compliance violations" "Green"
    }
    
    return $changes
}

# Function to analyze task coverage
function Test-TaskCoverage {
    param(
        [string]$SpecFilePath,
        [string]$TasksFilePath
    )
    
    $gaps = @()
    
    # Parse requirements from spec
    $specContent = Get-Content -Path $SpecFilePath -Raw
    $requirementMatches = [regex]::Matches($specContent, '-\s*\*\*(FR-\d+)\*\*:\s*(.+)')
    
    # Parse tasks
    $tasksContent = Get-Content -Path $TasksFilePath -Raw
    $taskMatches = [regex]::Matches($tasksContent, '^-\s*\[\s*\]\s*(T\d+)\s*(\[P\])?\s*(.+)$', [System.Text.RegularExpressions.RegexOptions]::Multiline)
    
    foreach ($requirementMatch in $requirementMatches) {
        $requirementId = $requirementMatch.Groups[1].Value
        $requirementDescription = $requirementMatch.Groups[2].Value
        
        # Check if requirement has corresponding task
        $hasCoverage = $false
        foreach ($taskMatch in $taskMatches) {
            $taskDescription = $taskMatch.Groups[3].Value
            
            # Simple keyword matching
            $requirementKeywords = ($requirementDescription.ToLower() -split '\s+') | Where-Object { $_.Length -gt 2 }
            $taskKeywords = ($taskDescription.ToLower() -split '\s+') | Where-Object { $_.Length -gt 2 }
            
            $overlap = $requirementKeywords | Where-Object { $taskKeywords -contains $_ }
            if ($overlap.Count -ge [math]::Ceiling($requirementKeywords.Count * 0.3)) {
                $hasCoverage = $true
                break
            }
        }
        
        if (-not $hasCoverage) {
            $gaps += @{
                RequirementId = $requirementId
                RequirementDescription = $requirementDescription
                SuggestedTask = "Implement functionality for $requirementId"
                Priority = "HIGH"
            }
        }
    }
    
    $coverage = if ($requirementMatches.Count -gt 0) { 
        [math]::Round((($requirementMatches.Count - $gaps.Count) / $requirementMatches.Count) * 100) 
    } else { 100 }
    
    return @{
        Coverage = $coverage
        Gaps = $gaps
        TotalRequirements = $requirementMatches.Count
        CoveredRequirements = $requirementMatches.Count - $gaps.Count
    }
}

# Main execution
try {
    Write-ColorOutput "Starting TDD compliance validation..." "Cyan"
    Write-ColorOutput "Spec Path: $SpecPath" "Gray"
    Write-ColorOutput "Tasks Path: $TasksPath" "Gray"
    
    # Validate file paths
    if (-not (Test-Path $SpecPath)) {
        throw "Specification file not found: $SpecPath"
    }
    
    if (-not (Test-Path $TasksPath)) {
        throw "Tasks file not found: $TasksPath"
    }
    
    # Test TDD compliance
    Write-ColorOutput "`nTesting TDD compliance..." "Yellow"
    $tddViolations = Test-TddCompliance -TasksFilePath $TasksPath
    
    if ($tddViolations.Count -gt 0) {
        Write-ColorOutput "Found $($tddViolations.Count) TDD compliance violations:" "Red"
        foreach ($violation in $tddViolations) {
            Write-ColorOutput "  Line $($violation.LineNumber): $($violation.Description)" "Red"
        }
        
        if ($AutoFix) {
            Write-ColorOutput "`nAuto-fixing violations..." "Yellow"
            $changes = Fix-TddCompliance -TasksFilePath $TasksPath -Violations $tddViolations
            Write-ColorOutput "Fixed $($changes.Count) violations" "Green"
        }
    } else {
        Write-ColorOutput "TDD compliance validation passed" "Green"
    }
    
    # Test task coverage
    Write-ColorOutput "`nAnalyzing task coverage..." "Yellow"
    $coverageResult = Test-TaskCoverage -SpecFilePath $SpecPath -TasksFilePath $TasksPath
    
    Write-ColorOutput "Task coverage: $($coverageResult.Coverage)%" "Cyan"
    Write-ColorOutput "Covered requirements: $($coverageResult.CoveredRequirements)/$($coverageResult.TotalRequirements)" "Cyan"
    
    if ($coverageResult.Gaps.Count -gt 0) {
        Write-ColorOutput "`nFound $($coverageResult.Gaps.Count) coverage gaps:" "Red"
        foreach ($gap in $coverageResult.Gaps) {
            Write-ColorOutput "  $($gap.RequirementId): $($gap.RequirementDescription)" "Red"
            Write-ColorOutput "    Suggested: $($gap.SuggestedTask)" "Yellow"
        }
    } else {
        Write-ColorOutput "All requirements have task coverage" "Green"
    }
    
    # Summary
    $totalViolations = $tddViolations.Count
    $totalGaps = $coverageResult.Gaps.Count
    
    if ($totalViolations -eq 0 -and $totalGaps -eq 0) {
        Write-ColorOutput "`n✅ All validations passed!" "Green"
        exit 0
    } else {
        Write-ColorOutput "`n❌ Validation failed with $totalViolations TDD violations and $totalGaps coverage gaps" "Red"
        exit 1
    }
    
} catch {
    Write-ColorOutput "`nError: $($_.Exception.Message)" "Red"
    exit 1
}
