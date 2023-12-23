import { configureStore, isPlainObject } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'

export const store = configureStore({
  reducer: {user:userReducer},
//   to prevent error from browser
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:false
  })
  
})