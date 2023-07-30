import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';

const reducer = combineReducers({
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: reducer,
});
