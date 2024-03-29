import React, { useRef } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator, Animated, View, Platform, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({
  title,
  subtitle,
  titleColor,
  subtitleColor,
  onPress,
  style,
  loading,
  disabled,
  iconName,
  iconComponent: Icon,
  iconColor,
  shadow,
  borderColor,
  iconRight,

}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const animatedStyle = {
    transform: [{ scale: scale }],
    ...shadow && styles.shadow,
    borderColor,
    backgroundColor: disabled ? '#ccc' : (style.backgroundColor || '#007bff')
  };

  const iconStyle = iconRight ? { marginLeft: 10 } : { marginRight: 10 };


  const content = (
    <Animated.View style={[styles.button, style, animatedStyle]}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <>
          {!iconRight && Icon && <Icon name={iconName} size={20} color={iconColor} style={iconStyle}  />}
          <View style={styles.textContainer}>
             <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
            {subtitle && <Text style={[styles.subtitle, { color: subtitleColor }]}>{subtitle}</Text>}
          </View>
          {iconRight && Icon && <Icon name={iconName} size={20} color={iconColor} style={iconStyle}  />}
        </>
      )}
    </Animated.View>
  );

  const handlePressIn = () => {
    if (!loading) {
      Animated.spring(scale, {
        toValue: 0.95,
        useNativeDriver: true
      }).start();
    }
  };

  const handlePressOut = () => {
    if (!loading) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true
      }).start();
    }
  };

  const touchable = Platform.select({
    ios: () => (
      <TouchableOpacity
        onPress={onPress}
        disabled={loading || disabled}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        accessibilityLabel="Button"
        accessibilityHint="Activates upon press">
        {content}
      </TouchableOpacity>
    ),
    android: () => (
      <TouchableNativeFeedback
        onPress={onPress}
        disabled={loading || disabled}
        background={TouchableNativeFeedback.Ripple('#fff', false)}>
        {content}
      </TouchableNativeFeedback>
    )
  });

  return touchable();
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  titleColor: PropTypes.string,
  subtitleColor: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  iconName: PropTypes.string,
  iconComponent: PropTypes.elementType,
  iconColor: PropTypes.string,
  shadow: PropTypes.bool,
  borderColor: PropTypes.string,
  iconRight: PropTypes.bool
};

Button.defaultProps = {
  style: {},
  loading: false,
  disabled: false,
  titleColor: 'white',
  subtitleColor: 'white',
  iconName: '',
  iconComponent: null,
  iconColor: '#fff',
  shadow: false,
  borderColor: '#007bff',
  iconRight: false
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  textContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  }
});

export default Button;
