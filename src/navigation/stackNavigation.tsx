import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AuthStack from "./authNavigation";
import {useInjectReducer} from 'redux-injectors';
import { reducer as welcomeReducer,sliceKey } from '../features/welcome/slice';
const stackNavigation = () =>{
    useInjectReducer({key:sliceKey,reducer:welcomeReducer})
    return (
        <AuthStack/>
    )
}

export default stackNavigation;