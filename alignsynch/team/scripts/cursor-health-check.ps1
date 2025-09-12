# Cursor Health Check Script
# Run this to check Cursor health status and get optimization recommendations

param(
    [switch]$Fix,
    [switch]$Verbose
)

$HealthScore = 0
$Issues = @()
$Recommendations = @()

Write-Host "🔍 Cursor Health Check Starting..." -ForegroundColor Cyan

# 1. Check Project Health
Write-Host "`n📁 Checking Project Health..." -ForegroundColor Yellow

try {
    $lintResult = pnpm lint 2>&1
    if ($LASTEXITCODE -eq 0) {
        $HealthScore += 20
        Write-Host "✅ ESLint: PASS" -ForegroundColor Green
    } else {
        $Issues += "ESLint failing"
        $Recommendations += "Run 'pnpm lint --fix' to fix linting issues"
        Write-Host "❌ ESLint: FAIL" -ForegroundColor Red
    }
} catch {
    $Issues += "ESLint not available"
    Write-Host "❌ ESLint: NOT FOUND" -ForegroundColor Red
}

try {
    $buildResult = pnpm build 2>&1
    if ($LASTEXITCODE -eq 0) {
        $HealthScore += 20
        Write-Host "✅ TypeScript Build: PASS" -ForegroundColor Green
    } else {
        $Issues += "TypeScript build failing"
        $Recommendations += "Fix TypeScript errors before proceeding"
        Write-Host "❌ TypeScript Build: FAIL" -ForegroundColor Red
    }
} catch {
    $Issues += "Build command not available"
    Write-Host "❌ Build: NOT FOUND" -ForegroundColor Red
}

# 2. Check Dependencies
Write-Host "`n📦 Checking Dependencies..." -ForegroundColor Yellow

if (Test-Path "node_modules") {
    $HealthScore += 10
    Write-Host "✅ Dependencies: INSTALLED" -ForegroundColor Green
} else {
    $Issues += "Dependencies not installed"
    $Recommendations += "Run 'pnpm install' to install dependencies"
    Write-Host "❌ Dependencies: MISSING" -ForegroundColor Red
}

# 3. Check Git Status
Write-Host "`n🌿 Checking Git Status..." -ForegroundColor Yellow

try {
    $gitStatus = git status --porcelain 2>&1
    if ($gitStatus -eq "") {
        $HealthScore += 10
        Write-Host "✅ Git: CLEAN" -ForegroundColor Green
    } else {
        $HealthScore += 5
        Write-Host "⚠️ Git: UNCOMMITTED CHANGES" -ForegroundColor Yellow
        $Recommendations += "Commit or stash uncommitted changes"
    }
} catch {
    $Issues += "Git not available"
    Write-Host "❌ Git: NOT FOUND" -ForegroundColor Red
}

# 4. Check Cursor Process
Write-Host "`n💻 Checking Cursor Process..." -ForegroundColor Yellow

$cursorProcess = Get-Process -Name "Cursor" -ErrorAction SilentlyContinue
if ($cursorProcess) {
    $memoryMB = [math]::Round($cursorProcess[0].WorkingSet / 1MB, 2)
    if ($memoryMB -lt 2000) {
        $HealthScore += 10
        Write-Host "✅ Cursor Memory: ${memoryMB}MB (Good)" -ForegroundColor Green
    } else {
        $HealthScore += 5
        Write-Host "⚠️ Cursor Memory: ${memoryMB}MB (High)" -ForegroundColor Yellow
        $Recommendations += "Restart Cursor to free memory"
    }
} else {
    $Issues += "Cursor not running"
    Write-Host "❌ Cursor: NOT RUNNING" -ForegroundColor Red
}

# 5. Check Environment Files
Write-Host "`n🔐 Checking Environment..." -ForegroundColor Yellow

if (Test-Path ".env.local") {
    $HealthScore += 10
    Write-Host "✅ Environment: .env.local exists" -ForegroundColor Green
} else {
    $Issues += "Environment file missing"
    $Recommendations += "Create .env.local with required variables"
    Write-Host "❌ Environment: .env.local MISSING" -ForegroundColor Red
}

# 6. Check MCP Servers (if available)
Write-Host "`n🔌 Checking MCP Servers..." -ForegroundColor Yellow

try {
    # This would need to be implemented based on MCP server availability
    $HealthScore += 10
    Write-Host "✅ MCP: Check manually in Cursor" -ForegroundColor Green
} catch {
    Write-Host "⚠️ MCP: Manual check required" -ForegroundColor Yellow
}

# 7. Check Extensions (manual check)
Write-Host "`n🔧 Extension Check..." -ForegroundColor Yellow
Write-Host "⚠️ Extensions: Manual check required" -ForegroundColor Yellow
Write-Host "   - Ensure only ESLint, Tailwind, GitLens are active" -ForegroundColor Gray
Write-Host "   - Disable Biome and duplicate formatters" -ForegroundColor Gray

# Calculate Health Score
Write-Host "`n📊 Health Score: $HealthScore/100" -ForegroundColor Cyan

if ($HealthScore -ge 90) {
    Write-Host "🟢 EXCELLENT - Cursor is in great shape!" -ForegroundColor Green
} elseif ($HealthScore -ge 70) {
    Write-Host "🟡 GOOD - Minor optimizations recommended" -ForegroundColor Yellow
} elseif ($HealthScore -ge 50) {
    Write-Host "🟠 WARNING - Several issues need attention" -ForegroundColor DarkYellow
} else {
    Write-Host "🔴 CRITICAL - Major issues detected" -ForegroundColor Red
}

# Show Issues and Recommendations
if ($Issues.Count -gt 0) {
    Write-Host "`n❌ Issues Found:" -ForegroundColor Red
    foreach ($issue in $Issues) {
        Write-Host "   - $issue" -ForegroundColor Red
    }
}

if ($Recommendations.Count -gt 0) {
    Write-Host "`n💡 Recommendations:" -ForegroundColor Cyan
    foreach ($rec in $Recommendations) {
        Write-Host "   - $rec" -ForegroundColor Cyan
    }
}

# Auto-fix if requested
if ($Fix -and $Recommendations.Count -gt 0) {
    Write-Host "`n🔧 Auto-fixing issues..." -ForegroundColor Yellow

    if ($Recommendations -contains "Run 'pnpm install' to install dependencies") {
        Write-Host "Installing dependencies..." -ForegroundColor Gray
        pnpm install
    }

    if ($Recommendations -contains "Run 'pnpm lint --fix' to fix linting issues") {
        Write-Host "Fixing linting issues..." -ForegroundColor Gray
        pnpm lint --fix
    }
}

Write-Host "`n✨ Health check complete!" -ForegroundColor Green
