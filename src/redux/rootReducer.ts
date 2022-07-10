import { combineReducers } from '@reduxjs/toolkit';
import armyTemplate from "redux/armyTemplate";

const rootReducer = combineReducers({
  armyTemplate
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;