import React,{useEffect} from "react";
import { View, Text, Dimensions } from "react-native";
import styles from "./style";
import Animated, {
  useAnimatedScrollHandler,
  useDerivedValue,
  useSharedValue,
  call,
  useCode,
  useAnimatedReaction
} from "react-native-reanimated";
import {useDispatch,useSelector} from 'react-redux'


import { Carsole } from "./components/carosel";
import Paginator from "./components/paginator";
import { actions } from "./slice";
const Welcome = () => {
  let scrollXValue = 0;
  const dispatch = useDispatch()
  const data = [
    {
      pic: require("./components/assets/tshirt1.jpg"),
      quote:"If you love something, wear it all the time... Find things that suit you. That's how you look extraordinary."
    },
    {
      pic: require("./components/assets/tshirt2.jpg"),
      quote:"You can have anything you want in life if you dress for it."
    },
    {
      pic: require("./components/assets/tshirt3.jpg"),
      quote:"The joy of dressing is an art."
    },
  ];
  const translateX = useSharedValue(0);
 
  const { height, width } = Dimensions.get("screen");
  const scrollHandler = useAnimatedScrollHandler((event) => {
    translateX.value = event.contentOffset.x;
  });

  const showNextButton = () =>{
    console.log("should hide",Math.round(translateX.value / width));
  }
  useAnimatedReaction(
    () => {
      return translateX.value > 700
    },
    (shouldHide) => {
      if (shouldHide) {
        //dispatch(actions.currentWelcomeScrollIndex(Math.round(translateX.value / width)))
     
      showNextButton()
      return
      
      }
      
    },
  )
  // const lastindex = useDerivedValue(()=>{
  //  // dispatch(actions.currentWelcomeScrollIndex(0))
  //   return Math.round(translateX.value / width)
  // })
  useDerivedValue(() => {if(translateX.value > 100) {console.log("ca;;");
   }})

  

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
            <Carsole index={index} translateX={translateX} pic={item?.pic} quote={item?.quote} />
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
      {/* {lastindex.value == data.length-1?
      <View>
        <Text>adas</Text>
      </View>
      :
      null
      } */}
    </View>
  );
};

export default Welcome;
