// ./screens/TimePickerScreen.js
import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
  SafeAreaView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/timepicker_style';
import { auth } from '../../FireBaseConfig';
import { saveTasks } from '../firebase/firestore';
import { ThemeContext } from '../context/ThemeContext';
import DatePicker from 'react-datepicker'; // Импортируем DatePicker для веба
import 'react-datepicker/dist/react-datepicker.css'; // Импортируем стили для DatePicker

const TimePickerScreen = ({ route, navigation }) => {
  const { windowId, taskWindows, setTaskWindows } = route.params;
  const [selectedDate, setSelectedDate] = useState(null); // Для даты
  const [selectedTime, setSelectedTime] = useState(null); // Для времени
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const { selectedColor } = useContext(ThemeContext); // Получаем selectedColor из контекста

  const saveTime = () => {
    if (!selectedDate || !selectedTime) {
      Alert.alert('Ошибка', 'Пожалуйста, выберите дату и время.');
      return;
    }

    // Объединение даты и времени
    const combinedDate = new Date(selectedDate);
    combinedDate.setHours(selectedTime.getHours());
    combinedDate.setMinutes(selectedTime.getMinutes());

    const formattedTime = combinedDate.toLocaleString();

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

  const handleBackPress = () => {
    navigation.goBack();
  };

  const onChangeDate = (event, selectedDateValue) => {
    if (Platform.OS !== 'ios') {
      setShowDatePicker(false);
    }
    if (selectedDateValue) {
      setSelectedDate(selectedDateValue);
    }
  };

  const onChangeTime = (event, selectedTimeValue) => {
    if (Platform.OS !== 'ios') {
      setShowTimePicker(false);
    }
    if (selectedTimeValue) {
      setSelectedTime(selectedTimeValue);
    }
  };

  // Обработчик изменения даты для веба
  const handleWebDateChange = date => {
    setSelectedDate(date);
  };

  // Обработчик изменения времени для веба
  const handleWebTimeChange = event => {
    const timeString = event.target.value;
    const [hours, minutes] = timeString.split(':');
    const time = new Date();
    time.setHours(parseInt(hours, 10));
    time.setMinutes(parseInt(minutes, 10));
    setSelectedTime(time);
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: selectedColor }]}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>TimePicker</Text>
      </View>

      {/* Выбор даты */}
      <View style={styles.pickerWrapper}>
        <Text style={styles.label}>Choose date</Text>
        {Platform.OS === 'web' ? (
          <DatePicker
            selected={selectedDate}
            onChange={handleWebDateChange}
            minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
            dateFormat="P"
            placeholderText="Выбрать дату"
            style={styles.webDatePicker}
          />
        ) : (
          <TouchableOpacity
            style={styles.pickerContainer}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.pickerButtonText}>
              {selectedDate ? selectedDate.toLocaleDateString() : 'Выбрать дату'}
            </Text>
          </TouchableOpacity>
        )}
        {showDatePicker && Platform.OS !== 'web' && (
          <DateTimePicker
            testID="date-picker"
            value={
              selectedDate || new Date(new Date().setDate(new Date().getDate() + 1))
            }
            mode="date"
            display="default"
            onChange={onChangeDate}
            minimumDate={new Date(new Date().setDate(new Date().getDate() + 1))} // Завтра и позже
          />
        )}
      </View>

      {/* Выбор времени */}
      <View style={styles.pickerWrapper}>
        <Text style={styles.label}>Choose time</Text>
        {Platform.OS === 'web' ? (
          <input
            type="time"
            onChange={handleWebTimeChange}
            style={styles.webTimePicker}
          />
        ) : (
          <TouchableOpacity
            style={styles.pickerContainer}
            onPress={() => setShowTimePicker(true)}
          >
            <Text style={styles.pickerButtonText}>
              {selectedTime
                ? selectedTime.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : 'Выбрать время'}
            </Text>
          </TouchableOpacity>
        )}
        {showTimePicker && Platform.OS !== 'web' && (
          <DateTimePicker
            testID="time-picker"
            value={selectedTime || new Date()}
            mode="time"
            display="default"
            onChange={onChangeTime}
          />
        )}
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={saveTime}>
        <LinearGradient
          colors={['#fce3e7', '#de3163']} // Градиентный розовый
          style={styles.gradientButton}
        >
          <Text style={styles.saveButtonText}>Save</Text>
        </LinearGradient>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TimePickerScreen;






