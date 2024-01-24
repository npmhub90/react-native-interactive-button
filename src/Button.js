import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, ActivityIndicator, Platform, StyleSheet, Alert } from 'react-native';

class Button extends Component {
  render() {
    const {
      onPress,
      buttonStyle,
      type,
      title,
      titleStyle,
      loading,
      disabled,
      ...attributes
    } = this.props;

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
  }
}

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

Button.propTypes = {
  onPress: PropTypes.func,
  buttonStyle: PropTypes.object,
  title: PropTypes.string,
  titleStyle: PropTypes.object,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['solid', 'clear']),
};

Button.defaultProps = {
  type: 'solid',
  loading: false,
  disabled: false,
};

export default Button;
