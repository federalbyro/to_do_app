import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/styles_profile'; // Стили для профиля

const UserScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
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
}

export default UserScreen;
