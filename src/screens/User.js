// ./screens/UserScreen.js
import React, { useState, useContext, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image, Alert, KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from '../styles/styles_profile'; 
import commonStyles from '../styles/styles_common'; // Импортируем общий стиль
import { auth } from '../../FireBaseConfig';
import { saveUserPhoto, loadUserPhoto } from '../firebase/firestore'; 
import { ThemeContext } from '../context/ThemeContext';
import { MaterialIcons, Feather } from '@expo/vector-icons'; // Импортируем иконки
import CustomButton from '../components/CustomButton';

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
  const colors = [ '#8A2BE2', '#000000', '#FFFFFF'];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView 
        style={[styles.container, { backgroundColor: selectedColor }]} 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        {/* Верхняя полусерая вкладка с заголовком */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Profile</Text>
        </View>

        {/* Основной контент */}
        <View style={{ alignItems: 'center', width: '100%' }}>
          {/* Фотография пользователя */}
          <TouchableOpacity onPress={pickImage} style={styles.photoContainer}>
            {photo ? (
              <Image
                source={{ uri: photo }}
                style={styles.photo}
                resizeMode="cover"
                testID="user-photo"
              />
            ) : (
              <Text style={styles.photoPlaceholder}>Upload Photo</Text>
            )}
          </TouchableOpacity>

          {/* Выбор цвета темы */}
          <View style={styles.colorPickerContainer}>
            <View style={styles.colorsRow}>
              {colors.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  testID={`colorCircle-${color}`}
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

          {/* Кнопка выхода */}
          <CustomButton 
  onPress={handleLogout} 
  text="log out" 
  textStyle={{color : 'black'}}
  gradientColors={['#ff7e5f', '#ff0000']} // Используем те же цвета градиента
/>
        </View>

        {/* Нижний контейнер с кнопками */}
        <View style={styles.footerContainer}>
  {/* Кнопка "Profile" */}
  <CustomButton
    onPress={() => navigation.navigate('User')}
    text="profile"
    gradientColors={['#fff', '#fff']} // White background for "profile" button
    icon={<MaterialIcons name="person" size={24} color="black" />}
    style={{ width: 150, height: 50 }} // Ensure consistent size
  />

  {/* Кнопка "to-do" */}
  <CustomButton
    onPress={() => navigation.navigate('Tasks')}
    text="to-do"
    gradientColors={['#fce3e7', '#de3163']} // Gradient background for "to-do" button
    icon={<Feather name="clipboard" size={24} color="black" />}
    style={{ width: 150, height: 50 }} // Ensure consistent size
    textStyle={{ color: 'black' }}
  />
</View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default UserScreen;










