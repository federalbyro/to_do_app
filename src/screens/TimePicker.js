import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/window_style'; // Импорт стилей

const TimePicker = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Выбор времени</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.saveButtonText}>Назад</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimePicker;
