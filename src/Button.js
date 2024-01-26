import React from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, ActivityIndicator, Platform, StyleSheet } from 'react-native';

const Button = ({
  onPress,
  buttonStyle = {},
  type = 'solid',
  title,
  titleStyle = {},
  loading = false,
  disabled = false,
  ...attributes
}) => {
  const containerStyle = {
    ...styles.button,
    ...buttonStyle,
    backgroundColor: type === 'solid' ? 'blue' : 'transparent',
    opacity: disabled ? 0.5 : 1,
  };

  const TouchableComponent = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={containerStyle}>
      <TouchableComponent onPress={loading || disabled ? null : onPress} {...attributes}>
        {loading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={[styles.text, titleStyle]}>{title}</Text>
        )}
      </TouchableComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Button;
