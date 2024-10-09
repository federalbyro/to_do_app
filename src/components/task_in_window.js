// ./components/task_in_window.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DeleteWindowButton from '../components/DeleteWindowButton'; // Компонент для удаления окна
import { auth } from '../../FireBaseConfig'; // Импорт Firebase auth
import { saveTasks } from '../firebase/firestore'; // Импорт функции сохранения задач в Firestore
import styles from '../styles/style_task_in_window';

const TaskInWindow = ({ taskWindows, setTaskWindows, windowId, navigation }) => {
  const [newTaskText, setNewTaskText] = useState('');
  const window = taskWindows.find(window => window.id === windowId);

  const addTask = () => {
    if (window.tasks.length >= 5) {
      Alert.alert('Лимит задач', 'Максимальное количество задач в окне — 5. Оплатите, чтобы добавить больше задач.');
      return; // Прекращаем добавление задач, если лимит превышен
    }

    if (!newTaskText.trim()) return;  // Пропускаем, если текст пустой или состоит только из пробелов

    const newTask = {
      id: Math.random().toString(),
      text: newTaskText.trim(),
      status: 'New',
    };

    const updatedWindows = taskWindows.map(window => {
      if (window.id === windowId) {
        return {
          ...window,
          tasks: [...window.tasks, newTask],
        };
      }
      return window;
    });

    setTaskWindows(updatedWindows);
    setNewTaskText('');  // Очищаем поле ввода после добавления

    // Сохранение задач в Firebase
    const user = auth.currentUser;
    if (user) {
      saveTasks(updatedWindows, user); // Сохраняем обновленные задачи в Firebase
    }
  };

  const deleteTask = (taskId) => {
    const updatedWindows = taskWindows.map(window => {
      if (window.id === windowId) {
        return {
          ...window,
          tasks: window.tasks.filter(task => task.id !== taskId),
        };
      }
      return window;
    });

    setTaskWindows(updatedWindows);

    // Сохранение задач в Firebase после удаления
    const user = auth.currentUser;
    if (user) {
      saveTasks(updatedWindows, user); // Сохраняем обновленные задачи в Firebase
    }
  };

  const deleteWindow = () => {
    const updatedWindows = taskWindows.filter(window => window.id !== windowId);
    setTaskWindows(updatedWindows);

    // Сохранение задач после удаления окна
    const user = auth.currentUser;
    if (user) {
      saveTasks(updatedWindows, user); // Сохраняем обновленные задачи в Firebase
    }
  };

  const changeTaskStatus = (taskId) => {
    const updatedWindows = taskWindows.map(window => {
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
    });

    setTaskWindows(updatedWindows);

    // Сохранение задач после изменения статуса
    const user = auth.currentUser;
    if (user) {
      saveTasks(updatedWindows, user); // Сохраняем обновленные задачи в Firebase
    }
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

  return (
    <View style={styles.outerContainer}>
      {/* Новый серый контейнер */}
      <View style={styles.greyBackgroundContainer}>
        {/* Градиентный фон */}
        <LinearGradient
          colors={['#fce3e7', '#de3163']} // Ваши градиентные цвета
          style={styles.gradientBackground}
        >
          {/* Заголовок окна с выбором времени */}
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('TimePicker', { windowId, taskWindows, setTaskWindows })}>
              <Text style={styles.timeText}>{window.time}</Text>
            </TouchableOpacity>
          </View>

          {/* Лист задач */}
          <FlatList
            data={window?.tasks || []}
            renderItem={({ item }) => (
              <View style={styles.taskContainer}>
                <TouchableOpacity
                  style={[styles.statusCircle, { backgroundColor: getTaskStatusColor(item.status) }]}
                  onPress={() => changeTaskStatus(item.id)}
                >
                  <Text style={styles.statusText}>{item.status.charAt(0)}</Text>
                </TouchableOpacity>
                <Text style={styles.taskText} numberOfLines={2} ellipsizeMode="tail">
                  {item.text}
                </Text>
                <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTask(item.id)}>
                  <Text style={styles.deleteButtonText}>X</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item.id}
            style={styles.taskList}
          />

          {/* Добавление новой задачи */}
          <View style={styles.taskContainer}>
            <TouchableOpacity style={styles.addTaskButton} onPress={addTask}>
              <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.taskText}
              placeholder="Input"
              placeholderTextColor="#626262" // Цвет плейсхолдера
              value={newTaskText}
              onChangeText={setNewTaskText}
            />
          </View>

          {/* Кнопка удаления окна */}
          <View style={styles.deleteWindowContainer}>
            <DeleteWindowButton style={styles.deleteWindowButton} onPress={deleteWindow} />
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default TaskInWindow;























