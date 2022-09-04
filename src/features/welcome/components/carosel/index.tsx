import React from 'react';
import {View,Text,Dimensions,StyleSheet} from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle } from 'react-native-reanimated';

import style from './style'
interface Props{
    index:number;
    translateX:Animated.SharedValue<number>
}

const {height,width} = Dimensions.get("screen")
const Carsole:React.FC<Props> = ({index,translateX}) =>{
    const inputRange =[(index-1)*width,index*width,(index+1)*width]
    const squreAnimatedStyle= useAnimatedStyle(()=>{
        return{
            transform:[{scale:interpolate(translateX.value,inputRange,[0,1,0],Extrapolate.CLAMP)}]
        }
    })
        return (
            <View
            key={index.toString()}
            style={[style.carsoleContiner,{backgroundColor:`rgba(0,0,255,0.${index+1})`}]}>
            
            <Animated.View style={[style.square,squreAnimatedStyle]}>

            </Animated.View>
            </View>
        )
}

export  {Carsole};