# AlignSynch Development Profile - Enhanced Version
# Multi-line prompt with more green accents and fixed font rendering

# Set console font and encoding for better character support
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$Host.UI.RawUI.WindowTitle = "AlignSynch Development"

# Import the enhanced custom prompt
. "$PSScriptRoot\custom-prompt-v2.ps1"

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

# Quick prompt reload
function reload {
    Write-Host "🔄 Reloading prompt..." -ForegroundColor Green
    . $PROFILE
}

Write-Host "AlignSynch Development Environment Loaded" -ForegroundColor Cyan
Write-Host "✨ Enhanced multi-line prompt with green accents active" -ForegroundColor Green
