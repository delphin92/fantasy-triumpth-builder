import {PayloadAction} from "@reduxjs/toolkit";

type Reducer<State, Payload> = (state: State, action: PayloadAction<Payload>) => any;

export const fieldSetter = <State, Name extends keyof State>(name: Name): Reducer<State, State[Name]> => (state, { payload }) => {
  state[name] = payload;
}

export const payloadReducer = <State, Payload>(reducer: ((state: State, payload: Payload) => void)): Reducer<State, Payload> =>
  (state, { payload }) => reducer(state, payload);