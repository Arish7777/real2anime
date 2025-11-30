@echo off
echo ==========================================
echo   Real2Anime - Ngrok Deployment Helper
echo ==========================================
echo.

WHERE ngrok >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo [ERROR] Ngrok is not installed or not in your PATH.
    echo.
    echo Please install ngrok first:
    echo 1. Go to https://ngrok.com/download
    echo 2. Download and install ngrok
    echo 3. Run 'ngrok config add-authtoken YOUR_TOKEN'
    echo.
    echo Once installed, run this script again.
    pause
    exit /b
)

echo [1/3] Starting Backend Server...
start "Real2Anime Backend" cmd /k "python -m uvicorn app.server:app --reload"

echo [2/3] Starting Frontend Server...
cd frontend-react
start "Real2Anime Frontend" cmd /k "npm run dev"
cd ..

echo [3/3] Starting Ngrok Tunnels...
echo.
echo Starting tunnel for Backend (Port 8000)...
start "Ngrok Backend" cmd /k "ngrok http 8000"

echo.
echo ==========================================
echo   DEPLOYMENT INSTRUCTIONS
echo ==========================================
echo.
echo 1. Look at the "Ngrok Backend" window.
echo 2. Copy the URL that looks like: https://xxxx-xx-xx.ngrok-free.app
echo 3. Open 'frontend-react/.env' file.
echo 4. Update VITE_API_URL with that copied URL.
echo 5. Restart the Frontend window (Ctrl+C and run 'npm run dev' again) to apply changes.
echo.
echo Your app is now live!
echo.
pause
