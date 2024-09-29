// App.js

// App.js

import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider, ThemeContext } from './src/context/ThemeContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/Login';
import SignUpScreen from './src/screens/SignUpScreen';
import UserScreen from './src/screens/User';
import TasksScreen from './src/screens/List';
import TimePickerScreen from './src/screens/TimePicker';

const Stack = createNativeStackNavigator();

const AppContent = () => {
  const { selectedColor } = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: selectedColor }]}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Авторизация' }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ title: 'Регистрация' }}
          />
          <Stack.Screen
            name="User"
            component={UserScreen}
            options={{
              title: 'You',
              headerTitleAlign: 'center',
              headerLeft: () => null, // Убираем стрелку "Назад"
            }}
          />
          <Stack.Screen
            name="Tasks"
            component={TasksScreen}
            options={{ title: 'List of Tasks', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="TimePicker"
            component={TimePickerScreen}
            options={{ title: 'Выбор времени', headerTitleAlign: 'center' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});






