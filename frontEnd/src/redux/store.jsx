import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
  import storage from 'redux-persist/lib/storage'
  
  
//   import App from './App'
//   import rootReducer from './reducers'
  
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
  }
  
  const persistedReducer = persistReducer(persistConfig, cartReducer)
  
 export const store = configureStore({
    reducer: {cart: persistedReducer},
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
  
 export  let persistor = persistStore(store)







// const store = configureStore({reducer:{cart: cartReducer}});

// export default store;