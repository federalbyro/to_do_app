// ./styles/style_task_in_window.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  outerContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
  },
  greyBackgroundContainer: {
    borderRadius: 15,
    padding: 10,
  },
  gradientBackground: {
    padding: 15,
    borderRadius: 15,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  taskList: {
    marginBottom: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    borderRadius: 10,
    flexWrap: 'wrap',
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
  addTaskButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    flexShrink: 0,
  },
  addButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  deleteWindowContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});









