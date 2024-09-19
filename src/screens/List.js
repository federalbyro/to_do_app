import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, FlatList, Text } from 'react-native';
import TaskInWindow from './task_in_window';
import styles from '../styles/styles_list_of_task';
import main_style from '../styles/styles'; // Импорт функций
import { saveTasks, loadTasks } from '../firebase/firestore';
import { auth } from '../FireBaseConfig';

const TasksScreen = ({ navigation }) => {
  const [taskWindows, setTaskWindows] = useState([]);

  // Загружаем задачи при входе пользователя
  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      loadTasks(user).then(tasks => {
        setTaskWindows(tasks || []); // Устанавливаем полученные задачи
      });
    }
  }, []);

  // Функция для сохранения задач
  const handleSaveTasks = () => {
    const user = auth.currentUser;
    if (user) {
      saveTasks(taskWindows, user); // Сохраняем задачи
    }
  };

  // Создание нового окна задач
  const createTaskWindow = () => ({
    id: Math.random().toString(),
    time: 'Выберите время', // Здесь параметр для выбора времени
    tasks: [],
  });

  // Добавление нового окна задач с сохранением
  const addTaskWindow = () => {
    if (taskWindows.length < 3) {
      const updatedTaskWindows = [...taskWindows, createTaskWindow()];
      setTaskWindows(updatedTaskWindows);
      handleSaveTasks(); // Сохраняем после добавления
    } else {
      alert('Максимум 3 окна задач! Оплатите, чтобы увеличить лимит.');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={taskWindows}
        renderItem={({ item }) => (
          <View style={styles.taskWindow}>
            {/* Передаем навигацию и задачи */}
            <TaskInWindow
              taskWindows={taskWindows}
              setTaskWindows={(updatedWindows) => {
                setTaskWindows(updatedWindows);
                handleSaveTasks(); // Сохраняем после изменения задач
              }}
              windowId={item.id}
              navigation={navigation}  // Добавляем пропс navigation
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        style={styles.taskWindowList}
      />

      <TouchableOpacity style={styles.addWindowButton} onPress={addTaskWindow}>
        <Text style={styles.addButtonText}>Добавить новое окно</Text>
      </TouchableOpacity>

      <View style={styles.footerContainer}>
        <TouchableOpacity style={main_style.button} onPress={() => navigation.navigate('User')}>
          <Text style={main_style.buttonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={main_style.button} onPress={() => navigation.navigate('Tasks')}>
          <Text style={main_style.buttonText}>Tasks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TasksScreen;









