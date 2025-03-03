# Сайт рецептов блюд

Проект реализует полноценное web-приложение по поиску и созданию рецептов, в приложении есть возможность просматривать рецепты блюд, создавать свои рецепты, а также сохранять рецепты в избранное. Все эти возможности реализованы благодаря авторизованной зоне. В неё можно попасть если зарегистрироваться или авторизоваться в приложении. Также в авторизованной зоне можно просмотреть страницу своего профиля. Для удобства создана возможность менять тему приложения со светлой на темную и наоборот.

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
* Вход в свой аккаунт через Регистрацию или Авторизацию;
* Адаптив под все устройства (ПК/ноутбук/планшет/смартфон).
___

|Страница "Все рецепты"|Страница "Избранные рецепты"|
|:--------------:|:--------------:|
|![image](https://github.com/user-attachments/assets/19a81fbd-81ad-4576-b9a6-e8549e738b1a)|![image](https://github.com/user-attachments/assets/05e62ad7-40d7-48ba-8b9a-1c56fe285cb1)|
|**Страница "Мои рецепты"**|**Модальное окно для создания карточки рецепта**|
|![image](https://github.com/user-attachments/assets/3e83097e-c51d-4b7e-b35b-27716380deef)|![image](https://github.com/user-attachments/assets/a1ce907c-164b-4b3f-a2ee-ecfe85daa403)|
|**Индивидуальная страница рецепта**|**Индивидуальная страница рецепта, шаги по приготовлению**|
|![image](https://github.com/user-attachments/assets/0aafb70e-b172-4b8a-a0f8-127be8f9a044)|![image](https://github.com/user-attachments/assets/682349fe-03d0-4476-9f80-345e52e59f6f)|
|**Страница "Регистрации"**|**Страница "Авторизации"**|
|![image](https://github.com/user-attachments/assets/a3110bf7-2ba2-454d-946e-ba5a2b2e60c3)|![image](https://github.com/user-attachments/assets/59ab8e6d-c873-4f5c-bf84-052728bbb949)|
|**Страница "Профиль"**||
|![image](https://github.com/user-attachments/assets/f2b71b07-42e8-4e4c-b41e-43880a0d13f9)||
