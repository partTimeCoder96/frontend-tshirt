import {createInjectorsEnhancer,forceReducerReload} from 'redux-injectors';
import {createLogger} from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import {configureStore} from '@reduxjs/toolkit';

import {createReducer} from './reducer';

export function configureAppStore(){
    const reduxSagaMonitorOptions = {};
    const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
    const {run:runSaga} = sagaMiddleware;

    //create the store with middleware
    let middleWares = [sagaMiddleware];

    //log only in development environment
    middleWares=[
        ...middleWares,
    ];

    const enhancers = [
        createInjectorsEnhancer({
            createReducer,
            runSaga,
        })
    ]



    const store = configureStore({
        reducer: createReducer(),
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(createLogger({
          collapsed: true,
          duration: true,
          timestamp: true,
        }), ...middleWares),
        devTools: __DEV__,
        enhancers,
      });
    
    
      // Make reducers hot reloadable, see http://mxs.is/googmo
      /* istanbul ignore next */
      if (module.hot) {
        module.hot.accept('./reducers', () => {
          forceReducerReload(store);
        });
      }
    
      return store;
}

