// ./screens/TasksScreen.js
import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, View, KeyboardAvoidingView, FlatList, Text, Platform, Alert } from 'react-native';
import CustomButton from '../components/CustomButton';
import TaskInWindow from '../components/task_in_window';
import styles from '../styles/styles_list_of_task'; // Убедитесь, что этот файл содержит нужные стили
import { MaterialIcons, Feather } from '@expo/vector-icons';
import { auth } from '../../FireBaseConfig';
import { saveTasks, loadTasks } from '../firebase/firestore';
import { ThemeContext } from '../context/ThemeContext';

const TasksScreen = ({ navigation }) => {
  const [taskWindows, setTaskWindows] = useState([]);
  const { selectedColor } = useContext(ThemeContext); 

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      loadTasks(user).then(tasks => {
        setTaskWindows(tasks || []);
      });
    }
  }, []);

  const addTaskWindow = () => {
    if (taskWindows.length < 3) {
      const newTaskWindow = {
        id: Math.random().toString(), // Рекомендуется заменить на uuid
        time: 'Выберите время',
        tasks: [],
      };
      const updatedTaskWindows = [...taskWindows, newTaskWindow];
      setTaskWindows(updatedTaskWindows);
      saveTasks(updatedTaskWindows, auth.currentUser)
        .catch(error => {
          Alert.alert('Ошибка', 'Не удалось сохранить окно. Попробуйте снова.');
        });
    } else {
      Alert.alert('Лимит окон', 'Максимум 3 окна задач! Оплатите, чтобы увеличить лимит.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: selectedColor }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Tasks</Text>
        </View>

        {/* Main Content */}
        <View style={{ flex: 1, paddingTop: 120, paddingBottom: 120 }}>
          {/* FlatList */}
          <FlatList
            data={taskWindows}
            renderItem={({ item }) => (
              <View style={styles.taskWindow}> {/* Убедитесь, что marginVertical установлен в стилях.taskWindow */}
                <TaskInWindow
                  taskWindows={taskWindows}
                  setTaskWindows={(updatedWindows) => {
                    setTaskWindows(updatedWindows);
                    saveTasks(updatedWindows, auth.currentUser)
                      .catch(error => {
                        Alert.alert('Ошибка', 'Не удалось сохранить задачи. Попробуйте снова.');
                      });
                  }}
                  windowId={item.id}
                  navigation={navigation}
                />
              </View>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
            style={{ flex: 1 }}
          />

          {/* Add New Window Button */}
          <View style={styles.addButtonContainer}> {/* Используйте addButtonContainer для позиционирования */}
            <CustomButton
              onPress={addTaskWindow}
              text="+"
              gradientColors={['#d13156', '#d13156']}
              buttonStyle={styles.addButton} // Используйте отдельный стиль
              textStyle={styles.addButtonText} // Используйте отдельный стиль
            />
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          {/* Profile Button */}
          <CustomButton
            onPress={() => navigation.navigate('User')}
            text="profile"
            gradientColors={['#fff', '#fff']}
            icon={<MaterialIcons name="person" size={24} color="black" />}
            style={{ width: 150, height: 50 }}
          />

          {/* Tasks Button */}
          <CustomButton
            onPress={() => navigation.navigate('Tasks')}
            text="to-do"
            gradientColors={['#fce3e7', '#de3163']}
            icon={<Feather name="clipboard" size={24} color="black" />}
            style={{ width: 150, height: 50 }}
            textStyle={{ color: 'black' }}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default TasksScreen;














