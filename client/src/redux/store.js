import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'

// so that current user will still persist even aftr reloading the page
const rootReducer=combineReducers({user:userReducer})
const persistConfig={
  key:'root',
  storage,
  version:1
}
const persistedReducer=persistReducer(persistConfig,rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
//   to prevent error from browser
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false
  }) 
})

export const persistor=persistStore(store)