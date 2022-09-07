import { createSlice } from "../../utils/@redux/toolkits";
import {createAction,PayloadAction} from "@reduxjs/toolkit";

import {ContainerState,Welcome} from './types';

export const initialState:ContainerState = {
    welcome:{} as Welcome,
}

const welcomeSlice = createSlice({
    name: "welcomeState",
    initialState,
    reducers: {
        currentWelcomeScrollIndex(state,action:PayloadAction<any>){
            console.log("currentWelcomeScrollIndex",action.payload);
            
            state.welcome.scrollIndex = action.payload
        }
    }
})

export const {actions,reducer,name:sliceKey} = welcomeSlice