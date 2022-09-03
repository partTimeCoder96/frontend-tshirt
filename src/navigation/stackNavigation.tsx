import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AuthStack from "./authNavigation";

const stackNavigation = () =>{

    return (
        <AuthStack/>
    )
}

export default stackNavigation;