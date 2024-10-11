// ./components/task_in_window.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput, Alert, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import DeleteWindowButton from '../components/DeleteWindowButton'; // Компонент для удаления окна
import { auth } from '../../FireBaseConfig'; // Импорт Firebase auth
import { saveTasks } from '../firebase/firestore'; // Импорт функции сохранения задач в Firestore
import styles from '../styles/style_task_in_window';

const TaskInWindow = ({ taskWindows, setTaskWindows, windowId, navigation }) => {
  const [newTaskText, setNewTaskText] = useState('');
  const window = taskWindows.find(w => w.id === windowId);

  if (!window) {
    return (
      <View style={styles.greyBackgroundContainer}>
        <Text style={styles.errorText}>Окно не найдено.</Text>
      </View>
    );
  }

  const addTask = () => {
    console.log(`Current number of tasks: ${window.tasks.length}`); // Отладочный лог

    if (window.tasks.length >= 5) {
      Alert.alert(
        'Лимит задач',
        'Максимальное количество задач в окне — 5. Оплатите, чтобы добавить больше задач.'
      );
      return; // Прекращаем добавление задач, если лимит превышен
    }

    if (!newTaskText.trim()) {
      Alert.alert('Ошибка', 'Текст задачи не может быть пустым.');
      return; // Показываем ошибку, если текст пустой
    }

    const newTask = {
      id: Math.random().toString(), // Рекомендуется заменить на uuid для уникальности
      text: newTaskText.trim(),
      status: 'New',
    };

    const updatedWindows = taskWindows.map(w => {
      if (w.id === windowId) {
        return {
          ...w,
          tasks: [...w.tasks, newTask],
        };
      }
      return w;
    });

    setTaskWindows(updatedWindows);
    setNewTaskText(''); // Очищаем поле ввода после добавления

    // Сохранение задач в Firebase
    const user = auth.currentUser;
    if (user) {
      saveTasks(updatedWindows, user)
        .catch(error => {
          Alert.alert('Ошибка', 'Не удалось сохранить задачу. Попробуйте снова.');
        });
    }
  };

  const deleteTask = (taskId) => {
    const updatedWindows = taskWindows.map(w => {
      if (w.id === windowId) {
        return {
          ...w,
          tasks: w.tasks.filter(task => task.id !== taskId),
        };
      }
      return w;
    });

    setTaskWindows(updatedWindows);

    // Сохранение задач в Firebase после удаления
    const user = auth.currentUser;
    if (user) {
      saveTasks(updatedWindows, user)
        .catch(error => {
          Alert.alert('Ошибка', 'Не удалось удалить задачу. Попробуйте снова.');
        });
    }
  };

  const deleteWindow = () => {
    const updatedWindows = taskWindows.filter(w => w.id !== windowId);
    setTaskWindows(updatedWindows);

    // Сохранение задач после удаления окна
    const user = auth.currentUser;
    if (user) {
      saveTasks(updatedWindows, user)
        .catch(error => {
          Alert.alert('Ошибка', 'Не удалось удалить окно. Попробуйте снова.');
        });
    }
  };

  const changeTaskStatus = (taskId) => {
    const updatedWindows = taskWindows.map(w => {
      if (w.id === windowId) {
        return {
          ...w,
          tasks: w.tasks.map(task => {
            if (task.id === taskId) {
              const nextStatus = task.status === 'New' ? 'Process' : task.status === 'Process' ? 'Done' : 'New';
              return { ...task, status: nextStatus };
            }
            return task;
          }),
        };
      }
      return w;
    });

    setTaskWindows(updatedWindows);

    // Сохранение задач после изменения статуса
    const user = auth.currentUser;
    if (user) {
      saveTasks(updatedWindows, user)
        .catch(error => {
          Alert.alert('Ошибка', 'Не удалось изменить статус задачи. Попробуйте снова.');
        });
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
          data={window.tasks}
          renderItem={({ item }) => (
            <View style={styles.taskItemContainer}>
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
        <View style={styles.newTaskContainer}>
          <TouchableOpacity style={styles.addTaskButton} onPress={addTask}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.newTaskInput}
            placeholder="Введите задачу"
            placeholderTextColor="#626262" // Цвет плейсхолдера
            value={newTaskText}
            onChangeText={setNewTaskText}
            onSubmitEditing={addTask} // Добавление задачи при нажатии Enter
          />
        </View>

        {/* Кнопка удаления окна */}
        <View style={styles.deleteWindowContainer}>
          <DeleteWindowButton style={styles.deleteWindowButton} onPress={deleteWindow} />
        </View>
      </LinearGradient>
    </View>
  );
};

export default TaskInWindow;
























