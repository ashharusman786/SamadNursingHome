# Stop any running Node.js processes
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# Remove node_modules directories and lock files
$itemsToRemove = @(
    "node_modules",
    "client\node_modules",
    "server\node_modules",
    "package-lock.json",
    "yarn.lock",
    "client\package-lock.json",
    "client\yarn.lock"
)

foreach ($item in $itemsToRemove) {
    $path = Join-Path -Path $PSScriptRoot -ChildPath $item
    if (Test-Path $path) {
        try {
            Remove-Item -Path $path -Recurse -Force -ErrorAction Stop
            Write-Host "Removed: $path"
        } catch {
            Write-Warning "Failed to remove $path : $_"
        }
    } else {
        Write-Host "Not found: $path"
    }
}

Write-Host "Cleanup complete. You can now run 'yarn' to reinstall dependencies."
