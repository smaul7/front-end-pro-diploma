# ExampleBooking
 
Дипломний проєкт курсу Front-End Pro — веб-додаток для пошуку готелів з фільтрацією за містом.
 
---
 
## Технології
 
**Frontend**
- React
- Redux Toolkit (thunks, слайси)
- CSS Modules
- Vite
**Backend**
- Node.js + Express
- REST API (auth, search, destinations, classes)
- CORS
## Функціонал
 
- Перегляд готелів з бази даних
- Фільтрація за містом через dropdown
- Реєстрація та авторизація користувача
- Обробка стану завантаження та помилок
## Архітектура
 
Проєкт розділений на frontend і backend частини.
 
Frontend спілкується з API через Redux thunks. Стан додатку керується Redux Toolkit — окремі слайси для готелів, міст та авторизації.
 
Backend — Express-сервер з роутами: `/auth`, `/register`, `/search`, `/destinations`, `/classes`.
 
## Запуск локально
 
**Backend**
```bash
cd backend
npm install
node server.js
```
 
**Frontend**
```bash
cd frontend
npm install
npm run dev
```
 
## Чого навчився
 
Перший повноцінний fullstack-проєкт — вперше самостійно підключав React до власного Express API, працював з Redux Toolkit thunks для асинхронних запитів та керував глобальним станом між компонентами.
