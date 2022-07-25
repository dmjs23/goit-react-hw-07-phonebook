import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './reducers';
import { contactsApi } from "api/contactsAPI";
import logger from 'redux-logger';

export const store = configureStore({
  reducer: { contactsReducer, [contactsApi.reducerPath]: contactsApi.reducer },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  logger,
  devTools: process.env.NODE_ENV === 'development',
})