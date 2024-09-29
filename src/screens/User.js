// src/screens/User.js

import React, { useState, useContext, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/styles_profile'; 
import { auth } from '../FireBaseConfig';
import { saveUserPhoto, loadUserPhoto } from '../firebase/firestore'; 
import { ThemeContext } from '../context/ThemeContext';

const UserScreen = ({ navigation }) => {
  const { selectedColor, setSelectedColor } = useContext(ThemeContext);
  const [photo, setPhoto] = useState(null);

  // Загрузка фото пользователя при монтировании компонента
  useEffect(() => {
    const fetchUserPhoto = async () => {
      const user = auth.currentUser;
      if (user) {
        const photoURL = await loadUserPhoto(user.uid);
        if (photoURL) {
          setPhoto(photoURL);
        }
      }
    };

    fetchUserPhoto();
  }, []);

  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access photos is required');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        const selectedAsset = result.assets[0];
        setPhoto(selectedAsset.uri);
        const user = auth.currentUser;
        if (user) {
          await saveUserPhoto(user.uid, selectedAsset.uri);
        }
      }
    } catch (error) {
      console.error('Error picking image: ', error);
    }
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      navigation.navigate('Login'); // После выхода возвращаем пользователя на страницу авторизации
    }).catch(error => {
      console.error('Error logging out:', error);
    });
  };

  // Цвета для выбора
  const colors = ['#50C878', '#8A2BE2', '#000000', '#FFFFFF'];

  return (
    <View style={[styles.container, { backgroundColor: selectedColor }]}>
      {/* Фотография пользователя */}
      <TouchableOpacity onPress={pickImage} style={styles.photoContainer}>
        {photo ? (
          <Image
            source={{ uri: photo }}
            style={styles.photo}
            resizeMode="cover"
          />
        ) : (
          <Text style={styles.photoPlaceholder}>Upload Photo</Text>
        )}
      </TouchableOpacity>

      {/* Выбор цвета темы */}
      <View style={styles.colorPickerContainer}>
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

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>

      {/* Кнопки профиля и задач */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('User')}>
          <Text style={styles.buttonText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tasks')}>
          <Text style={styles.buttonText}>Tasks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserScreen;




