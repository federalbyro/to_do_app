// ./styles/timepicker_style.js
import { StyleSheet, Dimensions } from 'react-native';
import commonStyles from './styles_common'; 

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30, // Добавляем отступ сверху для размещения под шапкой
 // Фоновый цвет экрана (можно изменить по желанию)
  },

  backButton: {
    textAlign: 'left', // Дополнительные стили при необходимости
  },
  label: {
    color:'pink',
    fontSize: 20,
    marginBottom: 10,
    alignSelf: 'flex-start',
    width: '100%',
    paddingLeft: 10,
    textAlign: 'center',
  },
  pickerWrapper: {
    width: '50%',
    alignItems: 'center',
    marginVertical: 10,
    // Добавляем flex для распределения пространства
    flex: 1,
    justifyContent: 'center',
  },
  pickerContainer: {
    width: '100%',
    padding: 5,
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
  webDatePicker: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    border: '1px solid #ccc',
    fontSize: 16,
  },
  webTimePicker: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    border: '1px solid #ccc',
    fontSize: 16,
  },
  ...commonStyles,
});




