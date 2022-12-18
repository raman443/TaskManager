import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TaskNavigator from './Navigation/TaskNavigator';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import FlashMessage from "react-native-flash-message";

const store = configureStore()
export default function App() {
  return (
    <Provider store = { store }>
      <TaskNavigator />
      <FlashMessage
          accessibilityLabel={'toast'}
          accessible={true}
          accessibilityRole={'text'}
          position="bottom"
          duration={3000}
        />
    </Provider>
    
  );
}

