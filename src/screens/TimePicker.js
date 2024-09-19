import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import DatePicker from 'react-datepicker'; // Для web
import "react-datepicker/dist/react-datepicker.css"; // CSS для веб
import styles from '../styles/timepicker_style'; // Подключаем стили
import { auth } from '../FireBaseConfig'; // Firebase Auth
import { saveTasks } from '../firebase/firestore'; // Сохранение в Firebase

const TimePickerScreen = ({ route, navigation }) => {
  const { windowId, taskWindows, setTaskWindows } = route.params;
  const [selectedDate, setSelectedDate] = useState(new Date());

  const saveTime = () => {
    const formattedTime = `${selectedDate.toLocaleDateString()} ${selectedDate.getHours()}:00`;

    const updatedWindows = taskWindows.map(window => {
      if (window.id === windowId) {
        return {
          ...window,
          time: formattedTime,
        };
      }
      return window;
    });

    setTaskWindows(updatedWindows);

    // Сохранение обновленных задач в Firebase
    const user = auth.currentUser;
    if (user) {
      saveTasks(updatedWindows, user);
    }

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
          minDate={new Date()} // Ограничение на выбор прошлой даты
          dateFormat="Pp"  // Формат даты и времени
          className="date-picker-input" // Класс для стилей веб
        />
      ) : (
        <Text>Для мобильных устройств можно использовать другой компонент</Text>
      )}

      <TouchableOpacity style={styles.saveButton} onPress={saveTime}>
        <Text style={styles.saveButtonText}>СОХРАНИТЬ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimePickerScreen;




