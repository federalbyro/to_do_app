// ./styles/timepicker_style.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerContainer: {
    position: 'center',
    width:'100%',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'rgba(211, 211, 211, 0.9)', // Немного непрозрачный фон
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start', // Выравнивание элементов по началу (стрелка назад слева)
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headerText: {
    fontSize: 24, // Увеличиваем текст
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10, // Отступ между стрелкой и текстом
  },
  backButton: {
    // Дополнительные стили при необходимости
  },
  label: {
    fontSize: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    width: '100%',
    paddingLeft: 10,
  },
  pickerWrapper: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  pickerContainer: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 20, // Округленные углы
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickerButtonText: {
    fontSize: 16,
    color: '#333',
  },
  saveButton: {
    position: 'absolute',
    bottom: 30,
    width: '80%',
    height: 50,
    borderRadius: 25,
    overflow: 'hidden', // Чтобы градиент не выходил за пределы кнопки
  },
  gradientButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});



