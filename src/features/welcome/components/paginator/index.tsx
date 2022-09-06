import React from "react";
import { View, useWindowDimensions } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import styles from "./style";
interface Props {
  translateX: any;
  index: number;
}

const Paginator = ({ translateX, index }: Props) => {
  const { width } = useWindowDimensions();

  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const dotAnimatedStyle = useAnimatedStyle(() => {
    return {
      width:withSpring(interpolate(
        translateX.value,
        inputRange,
        [10, 20, 10],
        Extrapolate.CLAMP
      ),{damping:50}),
      opacity: withSpring(interpolate(
        translateX.value,
        inputRange,
        [0.3, 1, 0.3],
        Extrapolate.CLAMP
      ),{damping:50}),
    };
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.dot, dotAnimatedStyle]}
        key={index.toString()}
      />
    </View>
  );
};

export default Paginator;
