import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'; //allows browser to cache store depeding on config
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares =[];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store); // persisted version of store essentially

export default { store, persistor };