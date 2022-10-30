import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View>
      <Header />
      <TaskButton />
      <StatusBar style="auto" />
    </View>
  );
}

