import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import styles from '../styles/style_task_in_window';
import DeleteWindowButton from '../components/DeleteWindowButton'; // Компонент для удаления окна

const TaskInWindow = ({ taskWindows, setTaskWindows, windowId, navigation }) => {
  const [newTaskText, setNewTaskText] = useState('');
  const window = taskWindows.find(window => window.id === windowId);

  const addTask = () => {
    if (!newTaskText.trim()) return;  // Пропускаем, если текст пустой или состоит только из пробелов

    const newTask = {
      id: Math.random().toString(),
      text: newTaskText.trim(),
      status: 'New',
    };

    setTaskWindows(taskWindows.map(window => {
      if (window.id === windowId) {
        return {
          ...window,
          tasks: [...window.tasks, newTask],
        };
      }
      return window;
    }));

    setNewTaskText('');  // Очищаем поле ввода после добавления
  };

  const deleteTask = (taskId) => {
    setTaskWindows(taskWindows.map(window => {
      if (window.id === windowId) {
        return {
          ...window,
          tasks: window.tasks.filter(task => task.id !== taskId),
        };
      }
      return window;
    }));
  };

  const deleteWindow = () => {
    setTaskWindows(taskWindows.filter(window => window.id !== windowId));
  };

  const changeTaskStatus = (taskId) => {
    setTaskWindows(taskWindows.map(window => {
      if (window.id === windowId) {
        return {
          ...window,
          tasks: window.tasks.map(task => {
            if (task.id === taskId) {
              const nextStatus = task.status === 'New' ? 'Process' : task.status === 'Process' ? 'Done' : 'New';
              return { ...task, status: nextStatus };
            }
            return task;
          }),
        };
      }
      return window;
    }));
  };

  return (
    <View style={styles.windowContainer}>
      <View style={styles.headerContainer}>
        {/* Кнопка для выбора времени */}
        <TouchableOpacity onPress={() => navigation.navigate('TimePicker', { windowId, taskWindows, setTaskWindows })}>
          <Text style={styles.timeText}>Время: {window.time}</Text>
        </TouchableOpacity>
      </View>

      {/* Лист задач */}
      <FlatList
        data={window?.tasks || []}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity style={[styles.statusCircle, { backgroundColor: getTaskStatusColor(item.status) }]} onPress={() => changeTaskStatus(item.id)}>
              <Text style={styles.statusText}>{item.status.charAt(0)}</Text>
            </TouchableOpacity>
            <Text style={styles.taskText}>{item.text}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={item => item.id}
        style={styles.taskList}
      />

      {/* Добавление новой задачи */}
      <View style={styles.taskContainer}>
        <TouchableOpacity style={styles.addTaskButton} onPress={addTask}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.taskText}
          placeholder="Введите задачу"
          value={newTaskText}
          onChangeText={setNewTaskText}
        />
      </View>

      {/* Кнопка удаления окна */}
      <View style={styles.deleteWindowContainer}>
        <DeleteWindowButton style={styles.deleteWindowButton} onPress={deleteWindow} />
      </View>
    </View>
  );
};

const getTaskStatusColor = (status) => {
  switch (status) {
    case 'New':
      return 'red';
    case 'Process':
      return 'yellow';
    case 'Done':
      return 'green';
    default:
      return 'gray';
  }
};

export default TaskInWindow;

















