import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SignUpScreen from '../src/screens/SignUpScreen'; // Исправьте путь импорта при необходимости
import { createUserWithEmailAndPassword } from 'firebase/auth';

// Мокаем LinearGradient
jest.mock('expo-linear-gradient', () => {
  const { View } = require('react-native');
  return {
    LinearGradient: ({ children, style }) => <View style={style}>{children}</View>,
  };
});

// Мокаем навигацию
const mockNavigate = jest.fn();
const mockNavigation = { navigate: mockNavigate };

describe('SignUpScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('рендерится корректно', () => {
    const { getByPlaceholderText, getByText } = render(
      <SignUpScreen navigation={mockNavigation} />
    );

    expect(getByPlaceholderText('enter your email')).toBeTruthy();
    expect(getByPlaceholderText('create password')).toBeTruthy();
    expect(getByText('sign up')).toBeTruthy();
    expect(getByText('back to login')).toBeTruthy();
    console.log('Email, Password,Sign up, Back to login link  buttons rendered successfully.');
  });

  it('показывает ошибку при неудачной регистрации', async () => {
    // Настраиваем мок, чтобы функция возвращала ошибку
    createUserWithEmailAndPassword.mockImplementation(() =>
      Promise.reject(new Error('Email already in use'))
    );

    const { getByPlaceholderText, getByText, findByText } = render(
      <SignUpScreen navigation={mockNavigation} />
    );

    fireEvent.changeText(getByPlaceholderText('enter your email'), 'existing-email@test.com');
    fireEvent.changeText(getByPlaceholderText('create password'), 'pass word123');
    fireEvent.press(getByText('sign up'));

    // Ожидаем, что ошибка будет отображена
    const errorMessage = await findByText(/email already in use/i);
    expect(errorMessage).toBeTruthy();
    console.log('Error message displayed: Email already in use.');
  });

  it('навигация на экран User при успешной регистрации', async () => {
    // Настраиваем мок, чтобы функция возвращала успешный результат
    createUserWithEmailAndPassword.mockImplementation(() =>
      Promise.resolve({ user: { uid: '67890' } })
    );

    const { getByPlaceholderText, getByText } = render(
      <SignUpScreen navigation={mockNavigation} />
    );

    fireEvent.changeText(getByPlaceholderText('enter your email'), 'new-user@test.com');
    fireEvent.changeText(getByPlaceholderText('create password'), 'securePassword!');
    fireEvent.press(getByText('sign up'));

    // Ожидаем, что навигация произошла
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith('User');
    });
    console.log('Переход на юзера работает.');
  });

  it('навигает обратно на экран Login при нажатии на "back to login"', () => {
    const { getByText } = render(
      <SignUpScreen navigation={mockNavigation} />
    );

    fireEvent.press(getByText('back to login'));

    expect(mockNavigate).toHaveBeenCalledWith('Login');
    console.log('Кнопка навигации действует.');
  });
});
