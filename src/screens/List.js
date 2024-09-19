import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList, Text } from 'react-native';
import TaskInWindow from './task_in_window';
import styles from '../styles/styles_list_of_task';
import main_style from '../styles/styles';

const TasksScreen = ({ navigation }) => {
  const [taskWindows, setTaskWindows] = useState([]);

  const createTaskWindow = () => ({
    id: Math.random().toString(),
    time: 'Выберите время',
    tasks: [],
  });

  const addTaskWindow = () => {
    if (taskWindows.length < 3) {
      setTaskWindows([...taskWindows, createTaskWindow()]);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={taskWindows}
        renderItem={({ item }) => (
          <View style={styles.taskWindow}>
            <TaskInWindow
              taskWindows={taskWindows}
              setTaskWindows={setTaskWindows}
              windowId={item.id}
              navigation={navigation}
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







