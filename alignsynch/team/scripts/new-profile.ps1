# AlignSynch Development Profile - Fixed Version
# Multi-line prompt with cursor below info bar

# Import the custom prompt
. "$PSScriptRoot\custom-prompt.ps1"

# Aliases for common development tasks
Set-Alias -Name ll -Value Get-ChildItem
Set-Alias -Name grep -Value Select-String

# Navigate to project quickly
function proj { Set-Location "C:\Users\jaden.black\BlackCloud\repos\_alignsynch\alignsynch" }

# Quick health check
function health {
    Write-Host "🔍 Running Cursor health check..." -ForegroundColor Cyan
    & "$PSScriptRoot\cursor-health-check.ps1"
}

Write-Host "AlignSynch Development Environment Loaded" -ForegroundColor Cyan
Write-Host "✨ Custom multi-line prompt active" -ForegroundColor Green
