/**
 * 
 * Combine all reducer in this file and export the combined reducer
 * 
 */

import { InjectedReducerType } from "../../../types/injector-typings";

import {combineReducers} from '@reduxjs/toolkit';

export function createReducer(injectedReducer: InjectedReducerType={}){
    if(Object.keys(injectedReducer).length === 0){
        return (state: any) => state;
    }else{
        return combineReducers({
            ...injectedReducer
        })
    }
}