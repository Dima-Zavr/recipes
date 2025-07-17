# Сайт рецептов блюд

Проект реализует полноценное web-приложение по поиску и созданию рецептов, в приложении есть возможность просматривать рецепты блюд, создавать и редактировать свои рецепты, а также сохранять рецепты в избранное. Все эти возможности реализованы благодаря авторизованной зоне. В неё можно попасть если зарегистрироваться или авторизоваться в приложении. Также в авторизованной зоне можно просмотреть страницу своего профиля, обновить данные или пароль. Для удобства создана возможность менять тему приложения со светлой на темную и наоборот.

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

___
### На данный момент реализовано:
* Запросы (get, post, put, patch, delete) для получения данных от backend;
* Страницы:
  * "Все рецепты"/"Мои рецепты"/"Избранные рецепты";
  * "Индивидуальная страница" рецепта;
  * "Редактирование/Создание рецептов";
  * "Профиль";
  * "Авторизация"/"Регистрация";
* Глобальное хранилище данных и state менеджер, который обеспечивает полноценную работу бесконечной прокрутки, поиска рецептов, логику лайка а также данные по фильтрам и сортировке;
* Логика бесконечной прокрутки, поиска по рецептам и лайка;
* Возможность смены темы (темная/светлая);
* Вход в свой аккаунт через Регистрацию или Авторизацию;
* Адаптив под все устройства (ПК/ноутбук/планшет/смартфон).

Также на данный момент реализован [backend](https://github.com/Dima-Zavr/recipes-back) на который поступают запросы для получения данных.
___

|Страница "Все рецепты"|Фильтры на странице рецептов|
|:--------------:|:--------------:|
|![image](https://github.com/user-attachments/assets/497dcd3a-e206-4b76-8e51-12f2914011d4)|![image](https://github.com/user-attachments/assets/894c1834-aeaa-4714-a748-1475544a19b9)|
|**Страница "Мои рецепты"**|**Страница для создания/редактирования рецепта**|
![image](https://github.com/user-attachments/assets/8f147000-141e-49f0-a2e0-2dda26ff6a96)|![image](https://github.com/user-attachments/assets/9d9c04e6-519e-4fa0-8bd5-02043dbda50c)|
|**Страница "Избранные рецепты"**|**Сортировка на странице с рецептами**|
![image](https://github.com/user-attachments/assets/f99ef842-6b1c-4d55-b7cd-88fd9534dbc6)|![image](https://github.com/user-attachments/assets/56b6d424-a6ff-40b3-bcfc-5655a9bfa465)|
|**Индивидуальная страница рецепта**|**Индивидуальная страница рецепта, шаги по приготовлению**|
|![image](https://github.com/user-attachments/assets/55e9d100-9e90-474d-8765-575249d0d099)|![image](https://github.com/user-attachments/assets/4dd9ac76-0254-4861-99d9-4bdabb07bcbf)|
|**Страница "Профиль"**|**Модальное окно для обновления данных профиля**|
|![image](https://github.com/user-attachments/assets/3f176892-030d-4a15-950d-e7bbcb47c16b)|![image](https://github.com/user-attachments/assets/80754339-8bb6-43bb-9ce1-291f741986e2)|
|**Модальное окно для обновления данных профиля**||
|![image](https://github.com/user-attachments/assets/564ebb1f-67f6-47e5-b9b7-9528c88dd277)||
|**Страница "Регистрации"**|**Страница "Авторизации"**|
|![image](https://github.com/user-attachments/assets/a3110bf7-2ba2-454d-946e-ba5a2b2e60c3)|![image](https://github.com/user-attachments/assets/59ab8e6d-c873-4f5c-bf84-052728bbb949)|
