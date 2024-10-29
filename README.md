# 3 курс
Гнеушев Леонид Алексеевич

# Проектная работа "Веб-ларек"

Стек: HTML, SCSS, TS, Webpack

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/base/ — папка с базовым кодом

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/index.ts — файл с типами
- src/index.ts — точка входа приложения
- src/scss/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```
# Базовые интерфейсы и классы 
## iComponent<T>
Описывает слой View в архитектуре, отвечает за отрисовку компонентов <br>
Свойства: 
- container: HTMLElement -- Родитель в котором нужно отрисовывать
- model: T: -- Ссылка на экземпляр модели компонента
- template: HTMLElement -- Темпейт верстки из разметки 
- element: HTMLElement -- Сам элемент
Методы:
- render(data?: object): HTMLElement -- Метод для отрисовки\перерисовки компонента

## abstract Modal
Абстрактный класс, который реализует логику работы для модальных окон, добавляя его к iComponent получаем модальный компонент<br>
Свойства: 
- private isOpen: boolean; -- Для лучшего контроля состояния открытия\закрытия модалки
- private closeButton: HTMLElement -- Кнопка закрытия конкретной модалки
- private triggerElement: HTMLElement -- На этот элемент вешается событие открытия модалки
Методы: 
- private initializeEventListeners = (): void -- Инициатор хэндлеров событий 
- protected handleEscClick = (event: KeyboardEvent): void -- Событие при нажатии на Esc
- protected handleCloseButtonClick = (): void -- Событие при нажатии на кнопку закрытия 
- protected handleBodyClick = (event: MouseEvent): void -- События при нажатии вне формы
- protected openModal = (): void -- Открытие модалки 
- protected closeModal = (): void -- Закрытие модалки
## Api 
Класс для работы с API
Свойства:
- readonly baseUrl: string -- Ссылка на начало пути к api, до роутинга
- protected options: RequestInit -- Настройки запроса, конкретно заголовки
Методы:
- protected handleResponse(response: Response): Promise<object> -- Принимает и провераяет запрос, возвращает промис с данными или ошибокой  
- get(url: string) --  Принимает ссылку для 'GET' запроса, и возвращает результат, обработанный методом handleResponse
- post(url: string, data: object, method: ApiPostMethods = 'POST') -- ринимает ссылку для 'POST' запроса, и возвращает результат, обработанный методом handleResponse
## EventEmitter

# Интерфейсы
## Интерфейсы данных
### iOrderData
Описывает отправляемый на сервер объект при совершении заказа <br>
Свойства: 
- payment: string -- Тип оплаты
- mail: string -- Почта
- phone: string -- Номер телефона
- address: string -- Адрес 
- total: number -- Сумма заказа
- items: string[] -- Айди заказанных товаров
### iProduct
Описывает объект товара <br>
Свойства: 
- id: string -- Айди товара
- description: string -- Описание
- image: string -- Ссылка на изображение
- title: string -- Название 
- category: string -- Категория
- price: number | undefined -- Цена, цены может и не быть
### iCartProduct
Описывает объект товара, но только с полями нужными ему в рамках корзины пользователя <br>
Свойства: 
- id: string -- Айди товара
- title: string -- Название 
- price: number -- Цена, Уже не может быть неопределенной(в корзину нельзя добавить товар без цены)


## iProductsModel
  Является интерфейсом, описывающий 
## iCardModel 
## iCartModel 
## iFormModel 

