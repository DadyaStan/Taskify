# Начинаем разработку

# Папка types для typescript

module.exports = {
 resolve: {
   extensions: ['js', 'ts'],
   alias: {
     '@': path.resolve(__dirname, 'src'),
     '@assets': path.resolve(__dirname, 'src/assets'),
     '@components': path.resolve(__dirname, 'src/components'),
     // ...etc
   },
  },
 }

Все файлы index содержат исключительно подключения,
Далее по scss. 
у нас будет файл с переменными, файл с миксинами, контейнером

css модули попробовать... Редукс прикрутить 

- Стандартизация <> </> и .container'ов 
- Сделать отдельный контейнер для хедеров и менюшек
- Внутренняя маршрутизация 

# отдельные коммиты
- ProgressBar
- Вложенный роутинг
- "_base" поместить туда все заголовки, тексты, статусы заданий
- React:FC как тип компонента
- Деструктуризация объектов
- Алисасы
- Redux
- Хуки
- More TS


- Подготовить README

# RoadMap
- Основы react + typescript