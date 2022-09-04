import React from 'react';
import {View,Text,Dimensions} from 'react-native';
import styles from './style';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import {Carsole} from './components/carosel';
const Welcome = () =>{
    const data = ["","","",""]
    const translateX = useSharedValue(0);
    const {height,width} = Dimensions.get("screen")
    const scrollHandler = useAnimatedScrollHandler((event)=>{
            translateX.value = event.contentOffset.x
    })
    return (
        <View style={styles.mainContainer}>
                <Animated.ScrollView
                scrollEventThrottle={16}
                onScroll={scrollHandler}
                horizontal
                pagingEnabled
                >
                        {
                            data.map((item,index:any)=>{
                                return(
                                    <Carsole index={index} translateX={translateX}/>
                                )
                            })
                        }
                </Animated.ScrollView>  
        </View>
    )
}

export default Welcome;