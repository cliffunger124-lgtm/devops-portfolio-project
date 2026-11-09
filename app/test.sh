#!/bin/sh

echo "Запуск тестов..."

# Проверяем, что файл index.html существует
if [ ! -f index.html ]; then
  echo "ОШИБКА: Файл index.html не найден!"
  exit 1
fi

# Проверяем, что на странице есть твое имя
if grep -q "Финский Вячеслав" index.html; then
  echo "УСПЕХ: Имя на месте."
else
  echo "ОШИБКА: На странице нет твоего имени!"
  exit 1
fi

# Проверяем, что есть картинка аватара
if grep -q "avatar.jpg" index.html; then
  echo "УСПЕХ: Аватар на месте."
else
  echo "ОШИБКА: Тег с аватаром не найден!"
  exit 1
fi

echo "Все тесты пройдены успешно!"
exit 0
