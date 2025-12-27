@echo off
echo Renaming project folder to 'my-portfolio'...
cd "C:\Users\Habeshha Computers\Desktop"
ren "damitachew-s-software-showcase" "my-portfolio"
if %errorlevel% equ 0 (
    echo Successfully renamed folder to 'my-portfolio'
) else (
    echo Failed to rename folder. Make sure no applications are using the folder.
    echo Close your IDE, terminal, and file explorer, then run this script again.
)
pause