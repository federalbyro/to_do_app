// styles_profile.js (страница профиля)
// src/styles/styles_profile.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Контейнер
  container: {
    flex: 1,
    alignItems: 'center', // Центрирование по горизонтали
    padding: 20,
    backgroundColor: '#f5f5f5',
    // Разрешение конфликта justifyContent:
    // - Если нужно, чтобы контент был по центру: 'center'
    // - Если нужно, чтобы контент был внизу: 'flex-end'
    // Выберите нужное значение или удалите это свойство, если оно будет переопределено в дочерних компонентах
    justifyContent: 'center',
  },
  
  // Фотография пользователя
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 100,
    height: 100,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  photoPlaceholder: {
    fontSize: 16,
    color: '#aaa',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10, // Уменьшено с 20 до 10
    borderRadius: 50,
    width: 100,
    height: 100,
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center', // Центрирование текста по вертикали
  },
  
  // Выбор цвета
  colorPickerContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  colorsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    marginHorizontal: 5,
  },
  
  // Нижний контейнер с кнопками
  footerContainer: {
    marginTop: 'auto', // Кнопки всегда снизу
    flexDirection: 'row',
<<<<<<< HEAD
    justifyContent: 'space-around', // Используем 'space-around' для равного пространства
    paddingVertical: 30, // Установлено из второго стиля
=======
    justifyContent: 'space-around',
    paddingVertical: 30,
>>>>>>> 71e03aaf1f679ce941515be7e740167ed977669d
    paddingHorizontal: 20,
  },
  
  // Кнопки
  button: {
    backgroundColor: '#2980b9',
    padding: 15,
    borderRadius: 5,
    width: 120,
    alignItems: 'center',
    // Объединяем marginHorizontal из первого стиля
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  
  // Кнопка выхода
  logoutButton: {
    backgroundColor: 'red',
    padding: 10,  // Уменьшенные отступы
    borderRadius: 5,
    width: '60%', // Уменьшенная ширина
    alignItems: 'center',
    marginTop: 10,  // Уменьшенный отступ сверху
    alignSelf: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 14,  // Уменьшенный размер шрифта
    fontWeight: 'bold',
  },
});
