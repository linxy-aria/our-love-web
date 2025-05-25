@echo off
cd /d "%~dp0"
echo [1/3] 正在执行统计脚本...
node count.js
if exist dashboard-data.js (
    echo [2/3] 成功生成 dashboard-data.js!
    echo [3/3] 打开 GitHub Desktop,请手动 Commit + Push~
    start "" "C:\Users\%USERNAME%\AppData\Local\GitHubDesktop\GitHubDesktop.exe"
) else (
    echo [错误] 未成功生成 dashboard-data.js,请检查 count.js 是否正常运行。
)
pause