import React from "react";
import {View, Text,Button, TouchableOpacity} from "react-native"

//navigation과 함께 navigate 가능
//name 으로 가서 가져올 수 있다.
export default ({navigation}) => (
    <View>
        <Text> 
        Home
        </Text>
        <Button 
        onPress={() => navigation.navigate("Detail") } title = "go to Deail"/>
    </View>
);