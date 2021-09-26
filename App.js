import React, { useState } from 'react';
import AppLoading from "expo-app-loading";
import * as Font from "expo-font"
import {Image,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Asset } from 'expo-asset';
import {Ionicons } from '@expo/vector-icons';
import Stack from './navigation/Stack';


const cacheImages = (images) =>
images.map(image =>{
  if(typeof image === "string"){
    return Image.prefetch(image); // 이미지 미리 가져오기
  }
  else{
    return Asset.fromModule(image).downloadAsync(); // 모듈을 보내서 받는다 ,require 부분
  }
});

const cacheFonts = fonts => 
  fonts.map(font => [Font.loadAsync(font), Font.loadAsync(font)]) //cacheFont에 font를 주고  Font를 로드 할 것이다.


export default function App() {
  const [isReady,setIsReady] = useState(false); //준비
  const loadAssets = () => {
    const images = cacheImages([
      "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    require("./assets/splash.png") 
  ]);
    const fonts = cacheFonts([Ionicons.font]); 
    return Promise.all([...images,...fonts]);  // 이미지들과 폰트들 미리 로딩 하고 await


  //console.log(fonts);
  //console.log(images); // images 들은 promises 의 array 그리고 promise 들은 그것들을 로드 할 예정을 말해준다.
  }; // 로딩
  const onFinish = () =>setIsReady(true); // 완료


  return isReady ? (
  <NavigationContainer>
    <Stack/>
  </NavigationContainer>
  ) : (
  <AppLoading 
  startAsync = {loadAssets} //AppLoading은 loadAssets을 위해 기다린다 그래서 apploading 에서 기다리지 않게 하는 것이다.
  onFinish = {onFinish}  // 
  onError={console.error}
  />);
  
}
