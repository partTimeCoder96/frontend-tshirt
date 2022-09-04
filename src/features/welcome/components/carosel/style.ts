import {StyleSheet,Dimensions} from 'react-native';

const {height,width} = Dimensions.get("screen")
const styles = StyleSheet.create({
    carsoleContiner:{
            width,
            height,
            justifyContent:"center",
            alignItems:"center"
    },
    square:{
        height:width * 0.7,
        width:width * 0.7,
        backgroundColor:"rgba(0,0,256,0.4)"
    }
})

export default styles


