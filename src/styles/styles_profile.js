import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Кнопки на дне экрана
    backgroundColor: '#f5f5f5',
  },

  footerContainer: {
    marginTop: 'auto', // Кнопки всегда снизу
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    paddingHorizontal: 20,
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