import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/style_task_in_window'; // Подключаем файл стилей

const TaskItem = ({ task, onUpdateTaskText, onChangeTaskStatus, onDeleteTask }) => {
  const getTaskStatusColor = (status) => {
    switch (status) {
      case 'New': return 'red';
      case 'Process': return 'yellow';
      case 'Done': return 'green';
      default: return 'gray';
    }
  };

  return (
    <View style={styles.taskContainer}>
      <TouchableOpacity
        style={[styles.statusCircle, { backgroundColor: getTaskStatusColor(task.status) }]}
        onPress={() => onChangeTaskStatus(task.id)}
      >
        <Text style={styles.statusText}>{task.status === 'New' ? 'N' : task.status === 'Process' ? 'P' : 'D'}</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.taskText}
        value={task.text}
        onChangeText={(newText) => onUpdateTaskText(task.id, newText)}
      />

      <TouchableOpacity style={styles.deleteButton} onPress={() => onDeleteTask(task.id)}>
        <Text style={styles.deleteButtonText}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;
