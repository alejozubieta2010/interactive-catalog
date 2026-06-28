@echo off

echo ===============================
echo Actualizando Catalogo...
echo ===============================

git add .

git commit -m "Actualizacion automatica"

git push

echo.
echo ===============================
echo Catalogo publicado correctamente
echo ===============================

pause