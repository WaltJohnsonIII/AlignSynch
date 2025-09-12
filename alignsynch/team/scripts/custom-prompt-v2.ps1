# Custom Multi-Line PowerShell Prompt - Enhanced Version
# Fixes cursor positioning, adds more green, and fixes font rendering

function prompt {
    # Get current location and git info
    $location = Get-Location
    $gitBranch = ""
    $gitStatus = ""

    # Check if we're in a git repo
    if (Test-Path ".git") {
        try {
            $gitBranch = git branch --show-current 2>$null
            if ($gitBranch) {
                $gitStatus = git status --porcelain 2>$null
                $modified = ($gitStatus | Measure-Object).Count
            }
        } catch {
            # Git not available or not a repo
        }
    }

    # Create the info bar (first line) with more green accents
    Write-Host ""
    Write-Host "┌─ " -NoNewline -ForegroundColor DarkGray
    Write-Host "jaden.black" -NoNewline -ForegroundColor Yellow
    Write-Host " " -NoNewline
    Write-Host "alignsynch" -NoNewline -ForegroundColor Green
    Write-Host " " -NoNewline
    Write-Host $location.Path -NoNewline -ForegroundColor Cyan

    if ($gitBranch) {
        Write-Host " " -NoNewline
        Write-Host "on" -NoNewline -ForegroundColor DarkGray
        Write-Host " $gitBranch" -NoNewline -ForegroundColor Green
        if ($modified -gt 0) {
            Write-Host " " -NoNewline
            Write-Host "($modified)" -NoNewline -ForegroundColor Red
        }
    }

    Write-Host " " -NoNewline
    Write-Host "─┐" -ForegroundColor DarkGray

    # Create the input line (second line) with green prompt
    Write-Host "└─ " -NoNewline -ForegroundColor DarkGray
    Write-Host "PS" -NoNewline -ForegroundColor Green
    Write-Host " " -NoNewline
    Write-Host ">" -NoNewline -ForegroundColor Green
    Write-Host " " -NoNewline

    return ""
}

# Export the function
Export-ModuleMember -Function prompt
