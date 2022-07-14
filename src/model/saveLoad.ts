import store from "redux/store";
import {setArmyState} from "redux/armyTemplate";
import {debounce} from "lodash";

export interface SerializableState {
  // TODO
}

export const makeHash = debounce(() => {
  // TODO: normalize and compress
  const hash = window.btoa(JSON.stringify(store.getState().armyTemplate));

  const [, , tab] = window.location.pathname.split('/');
  const newUrl = [window.location.origin, hash, tab].join('/');

  window.history.replaceState(null, '', newUrl)
}, 1000);

export const loadHash = (hash: string) => {
  const state = JSON.parse(window.atob(hash));
  store.dispatch(setArmyState(state))
}