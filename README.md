
# react-native-interactive-button

`react-native-interactive-button` is a customizable and interactive button component for use in React Native applications.

## Installation

Install the package using NPM:

```bash
npm install react-native-interactive-button
```

Or using Yarn:

```bash
yarn add react-native-interactive-button
```

## Usage

To use `react-native-interactive-button`, import the component:

```javascript
import InteractiveButton from 'react-native-interactive-button';
```

Then, add the component to your React Native app:

```javascript
<InteractiveButton
  title="Click Me"
  onPress={() => console.log('Button Pressed!')}
  // Additional styles and props
/>
```

## Props

| Prop          | Type     | Description                               |
|---------------|----------|-------------------------------------------|
| title         | string   | The text to display on the button.        |
| onPress       | function | Function to call when the button is pressed. |
| ...           |          |                                           |

## Contributing

Want to contribute to this project? Great! Please read the CONTRIBUTING.md file for guidelines.

## License

This project is licensed under the [MIT License](LICENSE).
