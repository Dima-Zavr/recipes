# Сайт рецептов блюд

### Основной стек технологий:
* Фреймворк (библиотека) - [React](https://react.dev/) + JavaScript + TypeScript
* Сборщик приложения - [CRA](https://create-react-app.dev/docs/getting-started/) + [Webpack](https://webpack.js.org/)
* Чистота кода - [Prettier](https://prettier.io/) + [ESLint](https://eslint.org/) + [Husky](https://www.npmjs.com/package/husky) + [Lint Staged](https://www.npmjs.com/package/lint-staged)
* Стилизация - [Styled components](https://styled-components.com/)
* Маршрутизация - [React Router Dom](https://reactrouter.com/en/main)
* Получение данных с сервера - [Fetch](https://learn.javascript.ru/fetch)
* State-manager - [Redux](https://redux.js.org/) + [React Redux](https://react-redux.js.org/) + [Redux Toolkit](https://redux-toolkit.js.org/)
* Пагинация (бесконечная прокрутка) - [React Infinite Scroller](https://www.npmjs.com/package/react-infinite-scroller)
* Галлерея фотографий - [Swiper](https://swiperjs.com/)
* Обработка и валидация форм - [Formik](https://formik.org/) + [Yup](https://www.npmjs.com/package/yup)
* Вспомогательные функции - [Lodash](https://lodash.com/)
* Мокирование данных (фальшивый backend) - [Json Server](https://www.npmjs.com/package/json-server) + [Json Server Auth](https://www.npmjs.com/package/json-server-auth).

___
### На данный момент реализовано:
* "Фальшивый backend" - мокирование данных, в котором также реализована возможность регистрации и авторизации пользователя;
* Запросы (get, post, put, patch, delete) на "фальшивый" backend;
* Страницы:
  * "Все рецепты"/"Мои рецепты"/"Избранные рецепты";
  * "Индивидуальная страница" рецепта;
  * "Профиль";
  * "Авторизация"/"Регистрация";
* Глобальное хранилище данных и state менеджер, который обеспечивает полноценную работу бесконечной прокрутки поиска и логику лайка;
* Логика бесконечной прокрутки, поиска по рецептам и лайка;
* Возможность смены темы (темная/светлая);
* Вход в свой аккаунт через Регистрацию или Авторизацию.

### В планах реализовать:
* Возможность полноценно создавать свои собственные рецепты (пока можно создать только карточку рецепта);
* Адаптив под другие устройства помимо ПК (мобильные, планшеты).
___

|Страница "Все рецепты"|Страница "Мои рецепты"|
|:--------------:|:--------------:|
|![image](https://github.com/user-attachments/assets/19a81fbd-81ad-4576-b9a6-e8549e738b1a)|![image](https://github.com/user-attachments/assets/3e83097e-c51d-4b7e-b35b-27716380deef)|
|**Страница "Избранные рецепты"**|**Индивидуальная страница рецепта**|
|![image](https://github.com/user-attachments/assets/05e62ad7-40d7-48ba-8b9a-1c56fe285cb1)|![image](https://github.com/user-attachments/assets/a7ef1c91-ee34-4700-be88-efab7286f407)|
|**Индивидуальная страница рецепта, шаги по приготовлению**|**Страница "Профиль"**|
|![image](https://github.com/user-attachments/assets/682349fe-03d0-4476-9f80-345e52e59f6f)|![image](https://github.com/user-attachments/assets/f2b71b07-42e8-4e4c-b41e-43880a0d13f9)|
|**Страница "Регистрации"**|**Страница "Авторизации"**|
|![image](https://github.com/user-attachments/assets/a3110bf7-2ba2-454d-946e-ba5a2b2e60c3)|![image](https://github.com/user-attachments/assets/59ab8e6d-c873-4f5c-bf84-052728bbb949)|
