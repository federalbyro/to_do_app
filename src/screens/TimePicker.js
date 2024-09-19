import React, { useState } from 'react';
import { View, Button, Platform, Text, TouchableOpacity } from 'react-native';
import DatePicker from 'react-datepicker';  // Для web
import "react-datepicker/dist/react-datepicker.css"; // CSS для веб
import styles from '../styles/timepicker_style'; // Стили для TimePicker

const TimePickerScreen = ({ route, navigation }) => {
  const { windowId, taskWindows, setTaskWindows } = route.params;
  const [selectedDate, setSelectedDate] = useState(new Date());

  const saveTime = () => {
    const formattedTime = `${selectedDate.toLocaleDateString()} ${selectedDate.getHours()}:00`;

    // Обновляем время в соответствующем окне задач
    setTaskWindows(taskWindows.map(window => {
      if (window.id === windowId) {
        return {
          ...window,
          time: formattedTime, // Обновляем время в нужном формате
        };
      }
      return window;
    }));

    navigation.goBack(); // Возврат на предыдущий экран
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Выберите дату и время</Text>

      {Platform.OS === 'web' ? (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          showTimeSelect
          dateFormat="Pp"  // Формат даты и времени
          className="date-picker-input" // Добавляем стили для веб
        />
      ) : (
        <Text>Нативный компонент для мобильных устройств</Text>
        // Здесь можно оставить выбор времени для мобильных версий через другие библиотеки
      )}

      <TouchableOpacity style={styles.saveButton} onPress={saveTime}>
        <Text style={styles.saveButtonText}>СОХРАНИТЬ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimePickerScreen;

