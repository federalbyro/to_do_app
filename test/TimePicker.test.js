import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import TimePickerScreen from '../src/screens/TimePicker';
import { saveTasks } from '../src/firebase/firestore';
import { ThemeContext } from '../src/context/ThemeContext';
import { Alert } from 'react-native';

// Мокаем expo-linear-gradient
jest.mock('expo-linear-gradient', () => {
  const { View } = require('react-native');
  return {
    LinearGradient: ({ children, style }) => <View style={style}>{children}</View>,
  };
});

// Мокаем Firebase функции
jest.mock('../src/firebase/firestore', () => ({
  saveTasks: jest.fn(),
}));

// Мокаем навигацию
const mockNavigate = jest.fn();
const mockNavigation = { navigate: mockNavigate, goBack: jest.fn() };

// Мокаем auth
jest.mock('../FireBaseConfig', () => ({
  auth: {
    currentUser: { uid: '12345' },
  },
}));

describe('TimePickerScreen', () => {
  const mockSetTaskWindows = jest.fn();
  const taskWindows = [
    { id: '1', time: 'Выберите время', tasks: [] },
  ];

  const renderWithContext = (routeParams = {}) => {
    return render(
      <ThemeContext.Provider value={{ selectedColor: '#FFFFFF' }}>
        <TimePickerScreen
          route={{
            params: {
              windowId: '1',
              taskWindows,
              setTaskWindows: mockSetTaskWindows,
              ...routeParams,
            },
          }}
          navigation={mockNavigation}
        />
      </ThemeContext.Provider>
    );
  };

  beforeEach(() => {
    jest.clearAllMocks(); // Очищаем все моки перед каждым тестом
    jest.spyOn(Alert, 'alert'); // Мокаем Alert.alert
  });

  it('рендерится корректно', () => {
    const { getByText } = renderWithContext();

    // Проверяем, что кнопка сохранения и элементы выбора отображаются
    expect(getByText('Save')).toBeTruthy();
    expect(getByText('Выбрать дату')).toBeTruthy();
    expect(getByText('Выбрать время')).toBeTruthy();
  });

  it('показывает date picker при выборе даты', async () => {
    const { getByText, findByTestId } = renderWithContext();

    // Нажимаем на кнопку выбора даты
    fireEvent.press(getByText('Выбрать дату'));

    // Используем findByTestId для ожидания появления DateTimePicker
    const datePicker = await findByTestId('date-picker');
    expect(datePicker).toBeTruthy();
  });

  it('сохраняет выбранные дату и время', async () => {
    const { getByText, findByTestId } = renderWithContext();
  
    // Выбор даты
    fireEvent.press(getByText('Выбрать дату'));
    const datePicker = await findByTestId('date-picker');
    fireEvent(datePicker, 'onChange', { nativeEvent: { timestamp: new Date(2024, 9, 11) } });
  
    // Выбор времени
    fireEvent.press(getByText('Выбрать время'));
    const timePicker = await findByTestId('time-picker');
    fireEvent(timePicker, 'onChange', { nativeEvent: { timestamp: new Date(2024, 9, 11, 13, 0) } });
  
    // Сохраняем данные
    fireEvent.press(getByText('Save'));
  
    // Проверяем, что setTaskWindows вызван с правильными параметрами
    await waitFor(() => {
      expect(mockSetTaskWindows).toHaveBeenCalledWith([
        {
          id: '1',
          time: expect.stringMatching(/\d{2}\.\d{2}\.\d{4}, \d{2}:\d{2}:\d{2}/),
          tasks: [],
        },
      ]);
    });
  
    expect(saveTasks).toHaveBeenCalled();
    expect(mockNavigation.goBack).toHaveBeenCalled();
  });

  it('показывает предупреждение, если дата и время не выбраны', async () => {
    const { getByText } = renderWithContext();

    // Нажимаем "Save" без выбора даты и времени
    fireEvent.press(getByText('Save'));

    // Проверяем, что Alert был вызван
    expect(Alert.alert).toHaveBeenCalledWith('Ошибка', 'Пожалуйста, выберите дату и время.');
  });
});

