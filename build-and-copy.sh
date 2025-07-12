#!/bin/bash

# Выход при ошибке
set -e

echo " >>> билдим frontend >>>"
cd frontend
npm run build

echo " > очищаем старый static"
rm -rf ../backend/src/main/resources/static/*

echo " > копируем новые файлы в static"
cp -r build/* ../backend/src/main/resources/static/

echo " >>> готово >>>"