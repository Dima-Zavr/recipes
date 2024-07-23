# Сайт рецептов блюд
Проект написан при помощи таких web-технологий, как **HTML**, **CSS**, **JavaScript**, в качестве фреймворка использована популярная библиотека [React](https://react.dev/).

Основной стек технологий:
* Форматирование кода - [Prettier](https://prettier.io/)
* Стилизация - [Styled components](https://styled-components.com/)
* Маршрутизация - [React Router Dom](https://reactrouter.com/en/main)
* State-manager - [Redux](https://redux.js.org/) + [React Redux](https://react-redux.js.org/)
* Пагинация (бесконечная прокрутка) - [React Infinite Scroller](https://www.npmjs.com/package/react-infinite-scroller)
* Галлерея фотографий - [Swiper](https://swiperjs.com/)
* Вспомогательные функции [Lodash](https://lodash.com/)
* Мокирование данных (фальшивый backend) - [Json Server](https://www.npmjs.com/package/json-server).

___
### На данный момент реализовано:
* Мокирование данных, в моке реализованы основная требуемая информация для рецептов;
* Запросы (GET, POST, PUT, PATCH, DELETE) на "фальшивый" backend;
* Страницы: "Все рецепты", "Мои рецепты", "Избранные рецепты", индивидуальная страница рецепта;
* Store и все reducers, для менеджмента глобального состояния Redux и хранения в удобной и доступной форме требуемых данных;
* Логика бесконечной прокрутки и поиска по рецептам.

### В планах реализовать:
* Возможность смены темы (темная/светлая);
* Вход в свой аккаунт через Регистрацию и Авторизацию;
* Возможность полноценно создавать свои собственные рецепты (пока можно создать только карточку рецепта).
___

|Страница "Все рецепты"|Страница "Мои рецепты"|
|:--------------:|:--------------:|
|![image](https://github.com/Dima-Sosin/recipes/assets/127529532/2ec48385-9430-45c1-802e-aa67b79001d7)|![image](https://github.com/Dima-Sosin/recipes/assets/127529532/5945d990-1cea-4184-a6fb-d8eb1404d198)|
|**Страница "Избранные рецепты"**|**Индивидуальная страница рецепта**|
|![image](https://github.com/Dima-Sosin/recipes/assets/127529532/df4d852b-c554-40c9-9fce-bf9b03bea9ae)|![image](https://github.com/Dima-Sosin/recipes/assets/127529532/85e30acf-3568-4344-a302-6adfb1b357c2)|
|**Индивидуальная страница рецепта, шаги по приготовлению**||
|![image](https://github.com/Dima-Sosin/recipes/assets/127529532/16911b33-7a4e-4815-879f-87080ec79ae7)||
