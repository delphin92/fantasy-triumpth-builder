import {ChangeEventHandler} from "react";

export type ValueCallback<T> = (value: T) => void;

export const changeCallback = (valueCallback: ValueCallback<string>): ChangeEventHandler<HTMLInputElement> =>
  (event) => valueCallback(event.target.value);

export const chCb = changeCallback;