import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { configureAppStore } from './src/utils/provider/store/configureStore';
import {Provider} from 'react-redux'
const store = configureAppStore();
export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Text>T-Shirt app</Text>
      <StatusBar style="auto" />
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
