import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FireBaseConfig';
import styles from '../styles/signup_style'; // Подключаем обновленные стили
import { LinearGradient } from 'expo-linear-gradient';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user;
        navigation.navigate('User'); // Переход на страницу User после успешной регистрации
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
        <Text style={styles.headerText}>registration</Text>
      </View>

      {/* Основной контент */}
      <View style={{ alignItems: 'center', marginTop: 80 }}>
        <TextInput
          style={styles.input}
          placeholder="enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="create password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize="none"
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Кнопка SIGN UP с градиентом */}
        <TouchableOpacity onPress={handleSignUp}>
          <LinearGradient
            colors={['#fce3e7', '#de3163']} // Розовый градиент
            style={styles.signupButton}
          >
            <Text style={styles.signupButtonText}>sign up</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Кнопка Back to Login */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.backToLogin}>back to login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;



