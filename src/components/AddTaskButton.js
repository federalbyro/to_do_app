import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/style_task_in_window'; // Подключаем файл стилей

const AddTaskButton = ({ onAddTask }) => {
  const [newTaskText, setNewTaskText] = useState('');

  const handleAddTask = () => {
    if (newTaskText.trim() !== '') {
      onAddTask(newTaskText.trim()); // Передаем очищенный текст задачи
      setNewTaskText(''); // Сброс текста
    }
  };

  return (
    <View style={styles.newTaskContainer}>
      <TouchableOpacity style={styles.addTaskButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Введите задачу"
        value={newTaskText}
        onChangeText={setNewTaskText}
      />
    </View>
  );
};

export default AddTaskButton;
