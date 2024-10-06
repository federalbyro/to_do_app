import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FireBaseConfig'; // Импортируем конфиг Firebase
import styles from '../styles/login_style'; // Подключаем стили
import { LinearGradient } from 'expo-linear-gradient';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Функция для логина
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        navigation.navigate('User'); // Переход на страницу User после успешного входа
      })
      .catch(error => {
        setError(error.message);
      });
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Полукруглая вкладка с заголовком */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>autorisation</Text>
      </View>

      {/* Основной контент */}
      <View style={{ alignItems: 'center', marginTop: 80 }}>
        <TextInput
          style={styles.input}
          placeholder="email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity onPress={handleLogin}>
  <LinearGradient
    colors={['#e0e0e0', '#c0c0c0']}
    style={styles.loginButton}
  >
    <Text style={styles.loginButtonText}>login</Text>
  </LinearGradient>
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
  <LinearGradient
    colors={['#fce3e7', '#de3163']}
    style={styles.signupButton}
  >
    <Text style={styles.signupButtonText}>sign up</Text>
  </LinearGradient>
</TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;






