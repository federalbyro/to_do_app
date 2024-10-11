// ./styles/styles_task.js
import { StyleSheet } from 'react-native';
import commonStyles from './styles_common'; // Импортируем общий файл стилей

export default StyleSheet.create({
  ...commonStyles, // Включаем общие стили

  // Дополнительные стили для списка задач
  taskWindow: {
    backgroundColor: 'rgba(211, 211, 211, 0.5)', // Полупрозрачный серый фон
    borderRadius: 15,
    padding: 5, // Минимальные отступы между градиентом и контейнером
    alignSelf: 'center', // Центрируем контейнер по горизонтали
    width: '90%', // Адаптивная ширина: 60% для больших экранов, 90% для мобильных
    maxWidth: 800, // Максимальная ширина для очень больших экранов
    // Тени для глубины
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 20,
  },
  taskWindowList: {
    width: '120%',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerContainer: {
    // Ensure this style matches the one in your `styles_profile.js`
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 90,
    backgroundColor: 'rgba(211, 211, 211, 0.5)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
  },

  footerButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  deleteWindowButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  newTaskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    marginLeft: 10,
  },
  addTaskButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
 addButtonContainer: {
    position: 'absolute',
    bottom: 100, // Увеличиваем отступ от футера
    alignSelf: 'center',
    zIndex: 10, // Убедитесь, что кнопка отображается над другими элементами
},
addButton: {
    width: 50,
    height: 50,
    borderRadius: 30, // Делает кнопку круглой
    paddingVertical: 15,
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: 'red', // Цвет кнопки (для теста)
},
addButtonText: {
    fontSize: 40, // Увеличенный размер знака "+"
    color: 'white',
    lineHeight: 70, // Центрирует текст по вертикали
    textAlign: 'center',
},
});


