import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import UserScreen from '../src/screens/User';
import { auth } from '../FireBaseConfig';
import { saveUserPhoto, loadUserPhoto } from '../src/firebase/firestore';
import { ThemeContext } from '../src/context/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';

// Мокаем expo-linear-gradient
jest.mock('expo-linear-gradient', () => {
  const { View } = require('react-native');
  return {
    LinearGradient: ({ children, style }) => <View style={style}>{children}</View>,
  };
});

// Мокаем Firebase функции
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(() => ({
    currentUser: {
      uid: '12345',
      email: 'test@test.com',
    },
    signOut: jest.fn().mockResolvedValue(),
  })),
}));

// Мокаем Firestore функции
jest.mock('../src/firebase/firestore', () => ({
  saveUserPhoto: jest.fn(),
  loadUserPhoto: jest.fn(),
}));

// Мокаем ImagePicker
jest.mock('expo-image-picker', () => ({
  requestMediaLibraryPermissionsAsync: jest.fn().mockResolvedValue({ status: 'granted' }),
  launchImageLibraryAsync: jest.fn().mockResolvedValue({
    canceled: false,
    assets: [{ uri: 'image-uri' }],
  }),
}));

// Мокаем AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn().mockResolvedValue('#ffffff'),
  setItem: jest.fn().mockResolvedValue(),
}));

// Мокаем навигацию
const mockNavigate = jest.fn();
const mockNavigation = { navigate: mockNavigate };

describe('UserScreen', () => {
  const mockSetSelectedColor = jest.fn();

  const renderWithContext = () => {
    return render(
      <ThemeContext.Provider value={{ selectedColor: '#FFFFFF', setSelectedColor: mockSetSelectedColor }}>
        <UserScreen navigation={mockNavigation} />
      </ThemeContext.Provider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks(); // Очищаем все моки перед каждым тестом
  });

  it('рендерится корректно', async () => {
    loadUserPhoto.mockResolvedValue('photo-url');
    
    const { getByText } = renderWithContext();

    expect(getByText('Profile')).toBeTruthy();
    expect(getByText('Upload Photo')).toBeTruthy();
    expect(getByText('log out')).toBeTruthy();
    expect(getByText('profile')).toBeTruthy();
    expect(getByText('to-do')).toBeTruthy();
  });

  it('загружает фото пользователя при монтировании компонента', async () => {
    loadUserPhoto.mockResolvedValue('photo-url');

    const { findByTestId } = renderWithContext();

    // Добавляем ожидание асинхронного рендера
    const image = await waitFor(() => findByTestId('user-photo'));
    expect(image.props.source.uri).toBe('photo-url');
    expect(loadUserPhoto).toHaveBeenCalledWith('12345');
  });

  it('выходит из приложения при нажатии на кнопку выхода', async () => {
    const { getByText } = renderWithContext();

    fireEvent.press(getByText('log out'));

    await waitFor(() => {
      expect(auth.signOut).toHaveBeenCalled();
      expect(mockNavigate).toHaveBeenCalledWith('Login');
    });
  });

  it('выбирает цвет темы при нажатии на круг с цветом', () => {
    const { getByTestId } = renderWithContext();

    const colorCircle = getByTestId('colorCircle-#8A2BE2');
    fireEvent.press(colorCircle);

    expect(mockSetSelectedColor).toHaveBeenCalledWith('#8A2BE2');
  });

  it('навигация на экраны профиля и задач при нажатии на кнопки', () => {
    const { getByText } = renderWithContext();

    fireEvent.press(getByText('profile'));
    expect(mockNavigate).toHaveBeenCalledWith('User');

    fireEvent.press(getByText('to-do'));
    expect(mockNavigate).toHaveBeenCalledWith('Tasks');
  });
});

