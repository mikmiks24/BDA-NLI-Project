@echo off
cd /d "c:\Users\asus\OneDrive\Documents\bda\NLI KIOSK - Copy (2)"
echo Starting NLI Kiosk HuBERT API Server...
"c:\Users\asus\OneDrive\Documents\bda\NLI KIOSK - Copy (2)\hubert_env\Scripts\python.exe" main.py 2>&1
echo.
echo === Server exited ===
pause
