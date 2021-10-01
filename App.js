import React, { useState } from 'react';
import AppLoading from "expo-app-loading";
import {Text,Image} from "react-native";
import * as Font from "expo-font"
import {Ionicons } from '@expo/vector-icons';
import { Asset } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './navigation/Stack';

const loadFonts = (fonts) => fonts.map(font =>Font.loadAsync(font));

const loadImages =(images) => images.map(asset => {
  if(typeof image === "string"){
    return Image.prefetch(image);
  }else {
    return Asset.loadAsync(image);
  }
});
export default function App(){
  const [ready,setReady] = useState(false);
  const onFinish = () => setReady(true);0
  const startLoading = async = () => {

    const fonts = loadFonts([Ionicons.font]);
    const images = loadImages([
      require("./splash.png"),
      "https://everytime.kr/images/about/logo.png",
    ]);
    await Promise.all([...fonts, ...images]);
  };


  if(!ready){
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.error}
      />
    );
  }
  return <Text>We are done loading!</Text>
}
