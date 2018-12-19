import {persistCombineReducers} from 'redux-persist'
import storage from 'redux-persist/es/storage'

import {navReducer} from './nav'
import {user} from './user'
import {logs} from './logs'

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['user', 'logs'],
};

export const appReducer = persistCombineReducers(persistConfig, {
    //system logs
    nav: navReducer,
    logs: logs,

    user: user,

})


