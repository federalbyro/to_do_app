import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import TasksScreen from '../src/screens/List'; // Убедитесь, что путь правильный
import { saveTasks, loadTasks } from '../src/firebase/firestore';
import { ThemeContext } from '../src/context/ThemeContext';

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
  loadTasks: jest.fn(),
}));

// Мокаем навигацию
const mockNavigate = jest.fn();
const mockNavigation = { navigate: mockNavigate };

beforeEach(() => {
  jest.clearAllMocks(); // Очищаем все моки перед каждым тестом
  global.alert = jest.fn(); // Мокаем глобальную функцию alert
});

describe('TasksScreen', () => {
  const mockSetSelectedColor = jest.fn();

  const renderWithContext = (taskWindows = []) => {
    loadTasks.mockResolvedValueOnce(taskWindows); // Загружаем задачи
    
    return render(
      <ThemeContext.Provider value={{ selectedColor: '#FFFFFF', setSelectedColor: mockSetSelectedColor }}>
        <TasksScreen navigation={mockNavigation} />
      </ThemeContext.Provider>
    );
  };

  it('рендерит список задач при загрузке', async () => {
    const tasks = [
      { id: '1', time: '10:00', tasks: [] },
      { id: '2', time: '12:00', tasks: [] },
    ];

    const { getByText } = renderWithContext(tasks);

    // Проверяем, что задачи отображаются
    await waitFor(() => {
      expect(getByText('10:00')).toBeTruthy();
      expect(getByText('12:00')).toBeTruthy();
    });
  });

  it('добавляет новое окно задач', async () => {
    const { getByText } = renderWithContext([]);

    // Имитируем нажатие на кнопку добавления задачи
    fireEvent.press(getByText('+'));

    // Проверяем, что новое окно задач было добавлено
    await waitFor(() => {
      expect(saveTasks).toHaveBeenCalled();
    });
  });

 

  it('переходит на экран профиля при нажатии на кнопку "profile"', () => {
    const { getByText } = renderWithContext([]);

    fireEvent.press(getByText('profile'));

    // Проверяем, что произошло перенаправление на экран профиля
    expect(mockNavigate).toHaveBeenCalledWith('User');
  });

  it('остается на экране задач при нажатии на кнопку "to-do"', () => {
    const { getByText } = renderWithContext([]);

    fireEvent.press(getByText('to-do'));

    // Проверяем, что произошло перенаправление на экран задач
    expect(mockNavigate).toHaveBeenCalledWith('Tasks');
  });
});
