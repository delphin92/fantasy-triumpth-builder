import { combineReducers } from '@reduxjs/toolkit';
import armyState from "redux/armyState";

const rootReducer = combineReducers({
  armyState
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;