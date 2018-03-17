@echo off

taskkill /IM chrome.exe /T

start "chrome" chrome "https://kullaberg.github.io/KullabergInfoDesk/embedEn.html" -kiosk -allow-running-insecure-content
