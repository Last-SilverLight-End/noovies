import React from "react";
import {createStackNavigator,CardStyleInterpolators} from "@react-navigation/stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";

const Stack = createStackNavigator();

//navigator 의 모든 screen 은 navigation 이란 prop 접근 권한 존재
//
export default ( ) =>(
    <Stack.Navigator screenOptions = {{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}>
        <Stack.Screen name = "Home" component = {Home}/>
        <Stack.Screen name = "Detail" component = {Detail}/>
    </Stack.Navigator>
)