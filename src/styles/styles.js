import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Выравнивание по вертикали (снизу)
    alignItems: 'center', // Выравнивание по горизонтали
    backgroundColor: '#f5f5f5', // Светлый фон для улучшенной видимости
  },

  footer: {
    position: 'absolute',
    bottom: 20, // Расположим на 20 пикселей выше от низа
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  button: {
    backgroundColor: '#2980b9',
    padding: 15,
    borderRadius: 5,
    width: 120,
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


