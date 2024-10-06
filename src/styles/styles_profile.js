// src/styles/styles_profile.js
import { StyleSheet } from 'react-native';
import commonStyles from './styles_common';

export default StyleSheet.create({
  ...commonStyles,
  // Контейнер
  photoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 100,
    height: 100,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 50,
    overflow: 'hidden',
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  photoPlaceholder: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  // Выбор цвета
  colorPickerContainer: {
    marginVertical: 20,
    alignItems: 'absolute',
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

  // Нижний контейнер (идентичен верхнему)
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 90,
    backgroundColor: 'rgba(211, 211, 211, 0.5)', // Идентичный фон верхнему контейнеру
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // Тени
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },

  // Кнопки в нижнем контейнере
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30, // Больший радиус для мультяшного вида
    // Тени для объёма
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: '#fff', // Белый фон для кнопки
  },
  footerButtonText: {
    color: 'black', // Темный цвет текста
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10, // Отступ между иконкой и текстом
  },

  // Кнопка выхода с градиентом и большей округлостью
  logoutButton: {
    // Удаляем backgroundColor: 'red', так как будем использовать градиент
    paddingVertical: 12, // Увеличенные отступы для большей высоты
    paddingHorizontal: 25, // Увеличенные отступы для большей ширины
    borderRadius: 30, // Больший радиус для большей округлости
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 20, // Увеличенный отступ сверху
    // Тени
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  logoutButtonText: {
    color: 'black',
    fontSize: 16, // Увеличенный размер шрифта
    fontWeight: 'bold',
  },

  // Ошибка
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});

