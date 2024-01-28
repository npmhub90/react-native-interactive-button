
# React Native Customizable Button

A flexible and feature-rich button component for React Native applications, offering a variety of customization options including icons, subtitles, loading state, and more.

## Features

- **Customizable Styles**: Change colors, sizes, padding, border radius, and more.
- **Loading State**: Includes a loading spinner when the button is in a loading state.
- **Animation on Press**: Scale down animation when the button is pressed, enhancing user interaction.
- **Icon Support**: Integrate icons within your button, with the flexibility to position them on the left or right.
- **Subtitle Option**: Add a subtitle for additional context or information.
- **Shadow Effect**: Optional shadow for a more distinguished look.
- **Ripple Effect**: On Android, a ripple effect is provided for touch feedback.
- **Accessibility Features**: Enhance accessibility with labels and hints.

## Installation

To add the Customizable Button to your React Native project, run:

```bash
npm install your-button-package-name
# or
yarn add your-button-package-name
```

## Usage

Import the `Button` component and use it in your project:

```javascript
import React from 'react';
import Button from 'your-button-package-name';
import Icon from 'react-native-vector-icons/FontAwesome'; // If using icons

const App = () => {
  return (
    <Button
      title="Press Me"
      subtitle="More Info"
      onPress={() => console.log('Pressed')}
      style={{ backgroundColor: 'blue', borderColor: 'white' }}
      loading={false}
      disabled={false}
      iconName="rocket"
      iconComponent={Icon}
      iconRight={false}
      shadow={true}
    />
  );
};

export default App;
```

## Props

- **title (string)**: Main text displayed on the button.
- **subtitle (string)**: Additional text displayed below the title.
- **onPress (function)**: Function to execute on button press.
- **style (object)**: Custom styles to apply to the button.
- **loading (bool)**: If `true`, shows a loading spinner.
- **disabled (bool)**: If `true`, disables button interactions.
- **iconName (string)**: Name of the icon (if using icons).
- **iconComponent (elementType)**: The icon component (e.g., from `react-native-vector-icons`).
- **shadow (bool)**: Enables shadow effect.
- **borderColor (string)**: Color of the button's border.
- **iconRight (bool)**: If `true`, places the icon to the right side.

## License

Licensed under the MIT License.
