import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login'; // Проверьте, что путь правильный
import UserScreen from './src/screens/User'; // Проверьте путь
import TasksScreen from './src/screens/List'; // Проверьте путь
import TimePickerScreen from './src/screens/TimePicker'; // Проверьте путь

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Авторизация' }}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{ title: 'User', headerTitleAlign: 'center', headerLeft: () => null }}
        />
        <Stack.Screen
          name="Tasks"
          component={TasksScreen}
          options={{ title: 'List of Tasks', headerTitleAlign: 'center' }}
        />
        <Stack.Screen
          name="TimePicker"
          component={TimePickerScreen}  // Проверьте, чтобы использовался TimePickerScreen
          options={{ title: 'Выбор времени', headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}





