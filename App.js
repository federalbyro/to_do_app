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
    <ThemeProvider>
    <View style={[styles.container, { backgroundColor: selectedColor }]}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignUpScreen"
            component={SignUpScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="User"
            component={UserScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tasks"
            component={TasksScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TimePicker"
            component={TimePickerScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    </ThemeProvider>
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






