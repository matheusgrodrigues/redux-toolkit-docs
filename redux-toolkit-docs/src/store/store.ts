import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

// Isso cria uma store Redux e também configura automaticamente a extenção Redux DevTools para que você possa inspecionar a store durante o desenvolvimento.
export const store = configureStore({ reducer: counterReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
