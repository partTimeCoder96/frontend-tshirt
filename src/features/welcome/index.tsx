import React from "react";
import { View, Text, Dimensions } from "react-native";
import styles from "./style";
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
} from "react-native-reanimated";
import { Carsole } from "./components/carosel";
import Paginator from "./components/paginator";
const Welcome = () => {
  const data = [
    {
      pic: require("./components/assets/tshirt1.jpg"),
    },
    {
      pic: require("./components/assets/tshirt2.jpg"),
    },
    {
      pic: require("./components/assets/tshirt3.jpg"),
    },
  ];
  const translateX = useSharedValue(0);
  const { height, width } = Dimensions.get("screen");
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  const lastindex = useDerivedValue(()=>{
    return Math.round(translateX.value / width)
  })

  
  

  return (
    <View style={styles.mainContainer}>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={scrollHandler}
        horizontal
        pagingEnabled
        style={{ flex: 0.5 }}
      >
        {data.map((item, index: any) => {
          return (
            <Carsole index={index} translateX={translateX} pic={item?.pic} />
          );
        })}
      </Animated.ScrollView>
      <View style={styles.footer}>
        <View style={{ flexDirection: "row" }}>
          {data.map((i, index) => {
            return <Paginator index={index} translateX={translateX} />;
          })}
        </View>
      </View>
      {lastindex.value == data.length-1?
      <View>
        <Text>adas</Text>
      </View>
      :
      null
      }
    </View>
  );
};

export default Welcome;
