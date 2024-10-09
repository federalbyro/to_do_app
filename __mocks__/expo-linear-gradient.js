// __mocks__/expo-linear-gradient.js
// __mocks__/expo-linear-gradient.js
import React from 'react';
import { View } from 'react-native';

const LinearGradient = ({ children, style, ...props }) => {
    console.log('Mock LinearGradient is used');
  return (
    <View style={style} {...props}>
      {children}
    </View>
  );
};

export default LinearGradient;