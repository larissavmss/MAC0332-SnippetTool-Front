import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './features/auth/userSlice'

import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers({ user: userReducer });

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

const store = configureStore({
  reducer: { 
    user: persistedReducer
  }
})

export const persistor = persistStore(store);

export default store;