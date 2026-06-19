@echo off
title NLI Kiosk - Full System Launcher
echo ================================================
echo    NLI KIOSK - Starting All Services
echo ================================================
echo.

:: ── 1. Start Python FastAPI Backend (port 8000) ──
echo [1/2] Starting Python Backend (FastAPI on port 8000)...
start "NLI Backend - FastAPI" cmd /k "cd /d \"c:\Users\asus\OneDrive\Documents\bda\NLI KIOSK - Copy (2)\" && \"c:\Users\asus\OneDrive\Documents\bda\NLI KIOSK - Copy (2)\hubert_env\Scripts\python.exe\" main.py"

:: Wait a moment before launching frontend
ping -n 4 127.0.0.1 >nul


:: ── 2. Start Next.js Frontend (port 3000) ──
echo [2/2] Starting Next.js Frontend (port 3000)...
start "NLI Frontend - Next.js" cmd /k "cd /d \"c:\Users\asus\OneDrive\Documents\bda\NLI KIOSK - Copy (2)\kiosk-next\" && npm run dev"

echo.
echo ================================================
echo    Both servers are starting up!
echo    - Backend  : http://localhost:8000
echo    - Frontend : http://localhost:3000
echo    - API Docs : http://localhost:8000/docs
echo ================================================
echo.
echo Close each terminal window to stop the servers.
pause
