import {RootState} from './rootState';
import {Saga} from 'redux-saga';

import {SagaInjectionModes} from 'redux-injectors';
import {Reducer,AnyAction} from '@reduxjs/toolkit';

type RequiredRootState = Required<RootState>;

export type RootStateKeyType = keyof RootState;

export type InjectedReducerType = {
    [P in RootStateKeyType]?: Reducer<RequiredRootState[P], AnyAction>
};

export interface InjectedReducerParams<Key extends RootStateKeyType>{
    key:Key,
    reducer:Reducer<RequiredRootState[Key], AnyAction>
}

export interface InjectSagaParams{
    key:RootStateKeyType | string,
    saga:Saga,
    mode?: SagaInjectionModes
}