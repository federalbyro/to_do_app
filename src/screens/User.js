import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList } from 'react-native';
import styles from '../styles/styles'; // Предполагаем, что стили в отдельном файле

function UserScreen({ navigation }) {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
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