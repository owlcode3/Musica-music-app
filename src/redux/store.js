import { configureStore } from "@reduxjs/toolkit";
import { musicaApi } from "./services/musicaApi";
import playerReducer from "./features/playerSlice";

export const store = configureStore({
   reducer: {
      player: playerReducer,
      [musicaApi.reducerPath]: musicaApi.reducer
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
         immutableCheck: { warnAfter: 128 },
         serializableCheck: { warnAfter: 128 }
      }).concat(musicaApi.middleware)
});
