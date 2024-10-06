import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center', // Центрирование по вертикали
    paddingHorizontal: 20,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(211, 211, 211, 0.5)', // Светло-серый цвет с прозрачностью
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
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
  input: {
    color: '#717272',
    borderWidth:  2.5,
    borderColor: '#ccc',
    borderRadius: 25,
    padding: 15,
    marginBottom: 20,
    width: 300, // Фиксированная ширина для полей ввода
    backgroundColor: '#f9f9f9',
    // Тени
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,
    elevation: 4,
  },
  loginButton: {
    backgroundColor: 'grey', // Золотистый цвет
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginTop: 10,
    borderRadius: 30,
    width: 120, // Уменьшенная ширина кнопки
    alignItems: 'center',
    // Тени для создания объемного эффекта
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
  },
  loginButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: 'fec2cc', // Розовый цвет
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginTop: 10,
    borderRadius: 30,
    width: 120, // Уменьшенная ширина кнопки
    alignItems: 'center',
    // Тени для создания объемного эффекта
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 8,
  },
  signupButtonText: {
    color: '#black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
});


