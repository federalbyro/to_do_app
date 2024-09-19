import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  windowContainer: {
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    backgroundColor: '#f9f9f9',
    position: 'relative',  // Для правильного позиционирования кнопки удаления окна
  },
  
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },

  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    borderColor: '#ccc',
    borderWidth: 1,
  },

  statusCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  statusText: {
    color: 'white',
    fontWeight: 'bold',
  },

  taskText: {
    flex: 1,
    fontSize: 16,
  },

  deleteButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  addTaskButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },

  addButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  deleteWindowContainer: {
    position: 'absolute',
    bottom: 10, // Позиционируем кнопку внизу окна
    right: 10,  // Позиционируем кнопку в правом нижнем углу
  },

  deleteWindowButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});




