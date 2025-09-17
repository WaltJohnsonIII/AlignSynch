# AlignSynch Development Profile - Final Version
# Multi-line prompt with green accents and fixed font rendering

# Set console font and encoding for better character support
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$Host.UI.RawUI.WindowTitle = "AlignSynch Development"

# Custom Multi-Line PowerShell Prompt Function
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

    # Create the info bar (first line) with green accents
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

# Aliases for common development tasks
Set-Alias -Name ll -Value Get-ChildItem
Set-Alias -Name grep -Value Select-String

# Navigate to project quickly
function proj { Set-Location "C:\Users\jaden.black\BlackCloud\repos\_alignsynch\alignsynch" }

# Quick health check
function health {
    Write-Host "🔍 Running Cursor health check..." -ForegroundColor Cyan
    & "alignsynch\team\scripts\cursor-health-check.ps1"
}

# Quick prompt reload
function reload {
    Write-Host "🔄 Reloading prompt..." -ForegroundColor Green
    . $PROFILE
}

Write-Host "AlignSynch Development Environment Loaded" -ForegroundColor Cyan
Write-Host "✨ Enhanced multi-line prompt with green accents active" -ForegroundColor Green
