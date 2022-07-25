import { createAction } from "@reduxjs/toolkit";
import { FILTER } from "./types";

export const filterContact = createAction(FILTER, event => ({
  payload: event.currentTarget.value,
}))