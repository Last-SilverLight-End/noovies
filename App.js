import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text,Image, View } from 'react-native';

import AppLoading from "expo-app-loading";
import { Asset } from 'expo-asset';

const cacheImages = (images) =>
images.map(image =>{
  if(typeof image === "string"){
    return Image.prefetch(image); // 이미지 미리 가져오기
  }
  else{
    return Asset.fromModule(image).downloadAsync(); // 모듈을 보내서 받는다 ,require 부분
  }
})

export default function App() {
  const [isReady,setIsReady] = useState(false); //준비
  const loadAssets = async () => {
    const images = cacheImages(["https://images.unsplash.com/photo-1593642532973-d31b6557fa68?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    require("./assets/splash.png")
  ]);
  console.log(images); // images 들은 promises 의 array 그리고 promise 들은 그것들을 로드 할 예정을 말해준다.
  }; // 로딩
  const onFinish = () =>setIsReady(true); // 완료


  return isReady ? (
  <Text>Ready!</Text> // 완료 되엇다는 표시 
  ) : (
  <AppLoading 
  startAsync = {loadAssets} 
  onFinish = {onFinish} 
  onError={console.error}
  />);
  
}
