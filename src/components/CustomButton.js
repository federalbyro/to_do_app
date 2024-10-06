// ./components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CustomButton = ({ onPress, text, gradientColors, icon, style, buttonStyle, textStyle }) => {
  const defaultTextColor = gradientColors && gradientColors[0] !== '#fff' ? '#fff' : 'black';

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={style}>
      <LinearGradient colors={gradientColors || ['#ff7e5f', '#feb47b']} style={[styles.button, buttonStyle]}>
        <View style={styles.buttonContent}>
          {icon && <View style={styles.iconContainer}>{icon}</View>}
          <Text style={[styles.buttonText, { color: defaultTextColor }, textStyle]}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30, // По умолчанию, можно переопределить
    alignItems: 'center',
    justifyContent: 'center',
    // Тени
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;

