import { configureStore } from "@reduxjs/toolkit";
import { ftpApi } from "./ftpApi";
import filters from "./filters";

export const store = configureStore({
  reducer: {
    [ftpApi.reducerPath]: ftpApi.reducer,
    filters,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ftpApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
