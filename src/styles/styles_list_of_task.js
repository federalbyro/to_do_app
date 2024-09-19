import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  taskWindow: {
    padding: 10,
    marginBottom: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
    position: 'relative', // Добавлено для позиционирования кнопки удаления окна
  },

  taskWindowTime: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  addWindowButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20, // Отступы для кнопки добавления окна
  },

  addButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  footerContainer: {
    marginTop: 'auto', // Кнопки всегда снизу
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
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
    marginLeft: 10, // Отступ от кнопки "+"
  },

  addTaskButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
