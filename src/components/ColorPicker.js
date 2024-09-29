// src/components/ColorPicker.js

import React, { useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';

const ColorPicker = () => {
  const { selectedColor, setSelectedColor } = useContext(ThemeContext);
  const colors = ['#50C878', '#8A2BE2', '#000000', '#FFFFFF']; // Изумруд, Фиолетовый, Чёрный, Белый

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Choose Theme Color:</Text>
      <View style={styles.colorsRow}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.colorCircle,
              {
                backgroundColor: color,
                borderColor: selectedColor === color ? '#000' : '#ccc',
              },
            ]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Полуовалевый контейнер
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    // Добавьте тени или другие стили по необходимости
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  colorsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  colorCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    marginHorizontal: 5,
  },
});

export default ColorPicker;
