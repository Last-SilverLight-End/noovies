import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppLoading from "expo-app-loading";

export default function App() {
  const [isReady,setIsReady] = useState(false);
  const loadAssets = async () => {};
  const onFinish = () =>setIsReady(true);
  return isReady ? 
  (<Text>Ready!</Text>) : (<AppLoading 
  startAsync = {loadAssets} 
  onFinish = {onFinish} 
  onError={console.error}
  />);
  
}
