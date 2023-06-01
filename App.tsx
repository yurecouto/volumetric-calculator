import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, UIManager, View } from 'react-native';
import Router from './src/router/router';
import "./src/translations/i18n"

export default function App() {
  if(Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <Router/>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
