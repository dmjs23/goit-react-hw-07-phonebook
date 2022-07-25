import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { filterContact } from './actions';

const filter = createReducer('', {
  [filterContact]: (_, { payload }) => payload,
})

export default combineReducers({ filter })