import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    zIndex: 1, // Убедитесь, что TimePicker на переднем плане
  },
  label: {
    fontSize: 24,  // Увеличиваем текст
    marginBottom: 20,
  },
  input: {
    fontSize: 18,  // Увеличиваем размер текста для выбора даты
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    width: '80%',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '60%',
    alignItems: 'center',
    zIndex: 1,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  datePickerWrapper: {
    zIndex: 2, // Увеличиваем zIndex для улучшения кликабельности
    width: '100%',
  },
});