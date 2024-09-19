import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  deleteWindowButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 20,  // Уменьшаем размер до 20
    height: 20,  // Уменьшаем высоту до 20
    borderRadius: 10,  // Округляем
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,  // Уменьшаем размер текста
  },
});
