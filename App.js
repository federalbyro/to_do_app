import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TasksScreen from './src/screens/List'; // Экран задач
import UserScreen from './src/screens/User'; // Экран пользователя
import TimePicker from './src/screens/TimePicker'; // Экран выбора времени

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tasks">
        {/* Экран с задачами */}
        <Stack.Screen
          name="Tasks"
          component={TasksScreen}
          options={{ title: 'List of Tasks', headerTitleAlign: 'center' }}
        />

        {/* Экран пользователя */}
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{ title: 'User', headerTitleAlign: 'center' }}
        />

        {/* Экран выбора времени */}
        <Stack.Screen
          name="TimePicker"
          component={TimePicker}
          options={{ title: 'Выбор времени', headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




