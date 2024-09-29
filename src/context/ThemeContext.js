// src/context/ThemeContext.js
// src/context/ThemeContext.js

import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Создаём контекст
export const ThemeContext = createContext();

// Создаём провайдер для контекста
export const ThemeProvider = ({ children }) => {
  const [selectedColor, setSelectedColor] = useState('#f5f5f5'); // Цвет по умолчанию

  // Функция для загрузки цвета из AsyncStorage
  const loadThemeColor = async () => {
    try {
      const color = await AsyncStorage.getItem('themeColor');
      if (color !== null) {
        setSelectedColor(color);
      }
    } catch (error) {
      console.error('Ошибка при загрузке цвета темы:', error);
    }
  };

  // Загружаем цвет при монтировании провайдера
  useEffect(() => {
    loadThemeColor();
  }, []);

  // Оборачиваем функцию установки цвета, чтобы сохранять его в AsyncStorage
  const changeThemeColor = async (color) => {
    try {
      setSelectedColor(color);
      await AsyncStorage.setItem('themeColor', color);
    } catch (error) {
      console.error('Ошибка при сохранении цвета темы:', error);
    }
  };

  return (
    <ThemeContext.Provider value={{ selectedColor, setSelectedColor: changeThemeColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

