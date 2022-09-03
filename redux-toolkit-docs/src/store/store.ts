import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { pokemonAPI } from "../services/pokemon";

// Isso cria uma store Redux e também configura automaticamente a extenção Redux DevTools para que você possa inspecionar a store durante o desenvolvimento.
export const store = configureStore({
  reducer: {
    counterReducer,
    [pokemonAPI.reducerPath]: pokemonAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonAPI.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
