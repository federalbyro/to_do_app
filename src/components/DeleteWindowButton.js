import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/delete_window_style'; // Подключим стили для кнопки

const DeleteWindowButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.deleteWindowButton} onPress={onPress}>
      <Text style={styles.deleteButtonText}>X</Text>
    </TouchableOpacity>
  );
};

export default DeleteWindowButton;
