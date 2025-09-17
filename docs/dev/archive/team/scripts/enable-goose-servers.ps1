# Enable Key Goose MCP Servers
# This script enables Goosedocs and GitMCP for recipe access and repository analysis

Write-Host "🚀 Enabling Goose MCP Servers..." -ForegroundColor Cyan

# Find Goose config file
$gooseConfig = "$env:USERPROFILE\.goose\config.yaml"
if (-not (Test-Path $gooseConfig)) {
    Write-Host "❌ Goose config not found at: $gooseConfig" -ForegroundColor Red
    Write-Host "Please check your Goose installation path" -ForegroundColor Yellow
    exit 1
}

Write-Host "📁 Found Goose config: $gooseConfig" -ForegroundColor Green

# Backup original config
$backupPath = "$gooseConfig.backup.$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Copy-Item $gooseConfig $backupPath
Write-Host "💾 Backup created: $backupPath" -ForegroundColor Green

# Read current config
$config = Get-Content $gooseConfig -Raw

# Enable Goosedocs
$config = $config -replace 'goosedocs:\s*\n\s*enabled:\s*false', 'goosedocs:
    enabled: true'

# Enable GitMCP
$config = $config -replace 'gitmcp:\s*\n\s*enabled:\s*false', 'gitmcp:
    enabled: true'

# Write updated config
$config | Set-Content $gooseConfig -NoNewline

Write-Host "✅ Enabled Goosedocs for recipe access" -ForegroundColor Green
Write-Host "✅ Enabled GitMCP for repository analysis" -ForegroundColor Green
Write-Host "🔄 Restart Goose to apply changes" -ForegroundColor Yellow


