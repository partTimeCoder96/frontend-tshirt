import React from "react";
import { View, Text, Dimensions, StyleSheet, Image } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
import style from "./style";
interface Props {
  index: number;
  translateX: Animated.SharedValue<number>;
  pic: any;
  quote:string
}

const { height, width } = Dimensions.get("screen");
const Carsole: React.FC<Props> = ({ index, translateX, pic,quote }) => {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const squreAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            translateX.value,
            inputRange,
            [0, 1, 0],
            Extrapolate.CLAMP
          ),
        },
      ],
    };
  });

const animatedRoateImage  = useAnimatedStyle(()=>{
  
  const progress = interpolate(
    translateX.value,
    inputRange,
    [0.5,0,0.5],
    Extrapolate.CLAMP
  )
  return{
    transform:[
      {
        rotate:`${progress * 2 * Math.PI}rad`
      }
    ]
  }
})

  //console.log("pic",Tshirt);
  
  return (
    <View
      key={index.toString()}
      style={[
        style.carsoleContiner,
      ]}
    >
      <Animated.View
       key={index.toString()}
      style={[style.square, squreAnimatedStyle]}>
        <Animated.Image
          source={pic}
          style={[{ height: 300, width: 300, resizeMode: "cover",borderRadius:300 },animatedRoateImage]}
        />
        <Animated.Text style={style.quoteText}>
          {quote}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

export { Carsole };
