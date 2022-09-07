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
         height:300,
         width:300,
         marginBottom:height/3
        // backgroundColor:"rgba(0,0,256,0.4)"
    },
    quoteText:{
        fontSize:16,
        fontWeight:"500",
        fontStyle:"normal",
        marginVertical:'20%',
        textAlign:"center"
    }
})

export default styles


