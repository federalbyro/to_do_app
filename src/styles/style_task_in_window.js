// ./styles/style_task_in_window.js
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  
  greyBackgroundContainer: {
    backgroundColor: 'rgba(211, 211, 211, 0.5)', // Полупрозрачный серый фон
    borderRadius: 15,
    padding: 10, // Минимальные отступы между градиентом и контейнером
    alignSelf: 'center', // Центрируем контейнер по горизонтали
    width: '95%', // Адаптивная ширина: 95% для большей гибкости
    maxWidth: 800, // Максимальная ширина для очень больших экранов
    // Тени для глубины
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 20, // Увеличенные отступы сверху и снизу для разделения окон
  },
  gradientBackground: {
    flex: 1, // Занимает всю доступную площадь внутри контейнера
    padding: 15, // Внутренние отступы внутри градиента
    borderRadius: 10, // Скругление углов градиента меньше, чем у контейнера
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 15,
  },
  timeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  taskList: {
    marginBottom: 15,
    width: '100%',
  },
  taskItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Повышаем непрозрачность для лучшей читаемости
    padding: 10,
    borderRadius: 10,
    flexWrap: 'wrap',
    width: '100%', // Убедитесь, что контейнер задач не превышает ширину родителя
  },
  statusCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    flexShrink: 0,
  },
  statusText: {
    color: 'black',
    fontWeight: 'bold',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    flexShrink: 1,
    flexWrap: 'wrap',
  },
  deleteButton: {
    padding: 5,
    flexShrink: 0,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  newTaskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  newTaskInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    marginLeft: 10,
    color: 'black',
  },
  addTaskButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
  },
  addButtonText: {
    color: 'white',
    fontSize: 24, // Увеличенный размер знака "+"
    fontWeight: 'bold',
  },
  deleteWindowContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  deleteWindowButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  
});










