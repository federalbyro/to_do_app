// ./styles/styles_common.js
// ./styles/styles_common.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Центрирование по горизонтали
    justifyContent: 'flex-start', // Начало контента сверху
    paddingHorizontal: 20,
    paddingTop: 100, // Отступ для размещения под верхним контейнером
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 80,
    backgroundColor: 'rgba(211, 211, 211, 0.5)', // Светло-серый цвет с прозрачностью
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    // Тени
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10, // Для Android
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(211, 211, 211, 0.5)', // Идентичный фон верхнему контейнеру
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
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
  footerButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    width: 150,
    height: 50,
  },
});

