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

