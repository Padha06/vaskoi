@echo off
title Vaskoi Biopharma Demo
echo Starting Vaskoi Biopharma Demo...
cd /d "%~dp0"
powershell -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
