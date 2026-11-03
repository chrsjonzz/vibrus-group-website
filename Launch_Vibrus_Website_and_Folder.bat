@echo off
setlocal enabledelayedexpansion
title Vibrus Group - Website & Project Folder Launcher
color 0b

echo ======================================================================
echo            VIBRUS GROUP LLC - WEBSITE & PROJECT LAUNCHER
echo ======================================================================
echo.

:: Check if server is already running on port 3000
netstat -ano | findstr :3000 | findstr LISTENING >nul 2>&1
if !errorlevel! EQU 0 (
    echo [OK] Web server is already active on port 3000.
) else (
    echo [INFO] Starting Next.js production server in the background...
    start "Vibrus Website Server" /min cmd /c "cd /d D:\VibrusGroup Website && npm start"
    
    echo [INFO] Waiting for server to initialize...
    powershell -NoProfile -Command "$ready = $false; for ($i=0; $i -lt 20; $i++) { try { $tcp = New-Object Net.Sockets.TcpClient; $tcp.Connect('127.0.0.1', 3000); $tcp.Close(); $ready = $true; break } catch { Start-Sleep -Milliseconds 500 } }; if (-not $ready) { exit 1 }" >nul 2>&1
)

echo.
echo [INFO] Opening Vibrus Group website in your default browser...
start http://localhost:3000

echo [INFO] Opening project folder in File Explorer...
explorer "D:\VibrusGroup Website"

echo.
echo ======================================================================
echo  Website URL:     http://localhost:3000
echo  Project Folder:  D:\VibrusGroup Website
echo ======================================================================
echo.
echo Ready! Closing launcher window...
ping 127.0.0.1 -n 3 >nul
exit
