# To-Do App

Это приложение для управления задачами с возможностью выбора времени и динамической цветовой темой. Пользователь может создавать и удалять задачи, изменять цветовую тему, а также авторизоваться через Firebase.

## Структура проекта

В этом разделе описаны основные папки и их содержимое с примерами ключевых модулей и функций.

### 1. `assets`

Эта папка содержит все медиафайлы, такие как изображения, иконки и другие ресурсы, используемые в приложении.

-[]

### 2. `components`

Здесь находятся переиспользуемые компоненты приложения. Каждый компонент представляет отдельную функциональную часть интерфейса.

-[]

### 3. `context`

Папка, в которой хранятся глобальные состояния приложения, реализованные через React Context API. Например, здесь хранится состояние текущей цветовой темы приложения.
ThemeContext.js
Файл отвечает за хранение и изменение текущей цветовой темы. Текущая тема сохраняется в AsyncStorage, чтобы она оставалась выбранной после перезагрузки приложения.

-[]

### 4. `firebase`

Эта папка отвечает за взаимодействие с Firebase. В ней содержатся функции для работы с базой данных, авторизацией пользователей и загрузкой данных.

-[]

### 5. `screens`

В этой папке находятся экраны приложения, каждый из которых представляет отдельный раздел или функцию приложения, например, управление задачами, профилем пользователя и выбор времени для задач.

-[]

### 6. `styles`

Папка для хранения всех стилей, которые применяются к различным компонентам и экранам. В этой папке находятся файлы со стилями, написанные в формате JavaScript для использования с React Native.

-[]

### 7. `test`

Папка для тестов. Содержит файлы с юнит-тестами, которые проверяют функциональность отдельных компонентов и модулей приложения.
