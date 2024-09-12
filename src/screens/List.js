import React, { useState } from 'react'; 
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/styles_list_of_task'; // Предполагаем, что стили в отдельном файле
import main_style from '../styles/styles'; // Импорт стилей
import DeleteButton from '../components/DeleteButton'; // Импорт кнопки удаления
import { TextInput } from 'react-native';


const TasksScreen = ({ navigation }) => {
  const [taskWindows, setTaskWindows] = useState([{
    id: '1',
    time: '12:00',
    tasks: [{ id: '1', text: 'Первая задача', time: '12:00' }]
  }]);
  const [newTaskText, setNewTaskText] = useState('');

  // Функция для создания нового окна задач
  const createTaskWindow = () => ({
    id: Math.random().toString(),
    time: '12:00',
    tasks: [],
  });

  // Добавление нового окна (максимум 3)
  const addTaskWindow = () => {
    if (taskWindows.length < 3) {
      setTaskWindows([...taskWindows, createTaskWindow()]);
    }
  };

  // Функция добавления новой задачи в конкретное окно
  const addTask = (windowId) => {
    if (newTaskText.trim() === '') return;

    const newTask = {
      id: Math.random().toString(),
      text: newTaskText,
      time: '13:00',
    };

    setTaskWindows(
      taskWindows.map((window) =>
        window.id === windowId
          ? { ...window, tasks: [...window.tasks, newTask] }
          : window
      )
    );
    setNewTaskText('');
  };

  // Функция удаления задачи
  const deleteTask = (windowId, taskId) => {
    setTaskWindows(
      taskWindows.map((window) =>
        window.id === windowId
          ? { ...window, tasks: window.tasks.filter((task) => task.id !== taskId) }
          : window
      )
    );
  };

  // Функция удаления окна задач
  const deleteTaskWindow = (windowId) => {
    setTaskWindows(taskWindows.filter((window) => window.id !== windowId));
  };

  // Рендер задачи с кнопкой удаления
  const renderTask = ({ item, windowId }) => (
    <View style={styles.taskContainer}>
      <Text style={styles.taskTime}>{item.time}</Text>
      <Text style={styles.taskText}>{item.text}</Text>
      <DeleteButton onPress={() => deleteTask(windowId, item.id)} label="Удалить задачу" />
    </View>
  );

  // Рендер каждого окна с задачами
  const renderTaskWindow = ({ item: window }) => (
    <View style={styles.taskWindow}>
      <TouchableOpacity onPress={() => navigation.navigate('TimePicker', { windowId: window.id })}>
        <Text style={styles.taskWindowTime}>Время: {window.time}</Text>
      </TouchableOpacity>

      {/* Лист задач в этом окне */}
      <FlatList
        data={window.tasks}
        renderItem={({ item }) => renderTask({ item, windowId: window.id })}
        keyExtractor={(item) => item.id}
        style={styles.taskList}
      />

      {/* Поле ввода для новой задачи */}
      <TextInput
        style={styles.input}
        placeholder="Напишите задачу"
        value={newTaskText}
        onChangeText={setNewTaskText}
      />

      {/* Кнопка добавления новой задачи в это окно */}
      <TouchableOpacity style={styles.addButton} onPress={() => addTask(window.id)}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>

      {/* Кнопка удаления окна задач */}
      <DeleteButton onPress={() => deleteTaskWindow(window.id)} label="Удалить окно" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Управление задачами</Text>
      
      {/* Лист окон задач */}
      <FlatList
        data={taskWindows}
        renderItem={renderTaskWindow}
        keyExtractor={(item) => item.id}
        style={styles.taskWindowList}
      />

      {/* Кнопка добавления нового окна (максимум 3 окна) */}
      <TouchableOpacity style={styles.addWindowButton} onPress={addTaskWindow}>
        <Text style={styles.addButtonText}>Добавить новое окно</Text>
      </TouchableOpacity>

      {/* Две существующие кнопки */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={main_style.button} onPress={() => navigation.navigate('User')}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={main_style.button} onPress={() => navigation.navigate('Tasks')}>
          <Text style={styles.buttonText}>Tasks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TasksScreen;
