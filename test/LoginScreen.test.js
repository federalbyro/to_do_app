import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginScreen from '../src/screens/Login'; // Исправленный путь импорта
import { signInWithEmailAndPassword } from 'firebase/auth';

// Мокаем LinearGradient
jest.mock('expo-linear-gradient', () => {
  const { View } = require('react-native'); // Импортируем View внутри jest.mock
  return {
    LinearGradient: ({ children, style }) => <View style={style}>{children}</View>,
  };
});

// Мокируем навигацию
const mockNavigate = jest.fn();
const mockNavigation = { navigate: mockNavigate };

describe('LoginScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByPlaceholderText, getByText } = render(
      <LoginScreen navigation={mockNavigation} />
    );

    // Добавляем вывод для отслеживания рендеринга
    
    expect(getByPlaceholderText('email')).toBeTruthy();
    expect(getByPlaceholderText('password')).toBeTruthy();
    expect(getByText('login')).toBeTruthy();
    expect(getByText('sign up')).toBeTruthy();

    console.log('Email, Password, Login, Sign up link rendered successfully.');
  });

  it('shows error when login fails', async () => {
    // Настраиваем мок, чтобы функция возвращала ошибку
    signInWithEmailAndPassword.mockImplementation(() =>
      Promise.reject(new Error('Invalid credentials'))
    );

    const { getByPlaceholderText, getByText, findByText } = render(
      <LoginScreen navigation={mockNavigation} />
    );

    fireEvent.changeText(getByPlaceholderText('email'), 'wrong-email@test.com');
    fireEvent.changeText(getByPlaceholderText('password'), 'wrongpassword');
    fireEvent.press(getByText('login'));

    // Ожидаем, что ошибка будет отображена
    const errorMessage = await findByText(/invalid credentials/i);
    
    // Подтверждаем, что ошибка показана
    expect(errorMessage).toBeTruthy();
    console.log('Error message displayed: Invalid credentials.');
  });
});



