import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

import { persistReducer,persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from './slice/UserSlice'

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor= persistStore(store)