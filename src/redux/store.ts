import { configureStore, Action } from '@reduxjs/toolkit';

import rootReducer, {RootState} from './rootReducer';
import { ThunkAction } from 'redux-thunk';
import {makeHash} from "model/saveLoad";

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    () => next => action => {

      if (action.type !== 'stateHash/setHash') {
        makeHash()
      }
      return next(action);
    }
  )
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default;
    store.replaceReducer(newRootReducer);
  })
}

export type Store = typeof store;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

export default store;