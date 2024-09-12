import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/window_style'; // Предполагаем, что стили в отдельном файле

const DeleteButton = ({ onPress, label = 'Удалить' }) => {
  return (
    <TouchableOpacity style={styles.deleteButton} onPress={onPress}>
      <Text style={styles.deleteButtonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default DeleteButton;
