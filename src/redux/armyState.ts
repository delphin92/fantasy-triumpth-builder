import {createSlice} from "@reduxjs/toolkit";
import {ArmyTemplateTroop, Hero} from "model/army";
import {payloadReducer} from "redux/utils";
import {troopTypes} from "model/troops";

export interface ArmyTemplateState {
  troops: ArmyTemplateTroop[];
  troopsCounts: (number | null)[];
  heroes: Hero[];
  heroesTaken: boolean[];
}

const armyState = createSlice({
  name: 'armyState',
  initialState: {
    troops: [],
    troopsCounts: [],
    heroes: [],
    heroesTaken: [],
  } as ArmyTemplateState,
  reducers: {
    addTroop: state => {
      state.troops.push({
        name: '',
        description: '',
        troopType: troopTypes[0],
        cards: [],
      });

      state.troopsCounts.push(0);
    },

    addHero: state => {
      state.heroes.push({
        name: '',
        description: '',
        cards: [],
      })
    },

    changeTroopField: payloadReducer((state, {i, field, value}: {i: number, field: keyof ArmyTemplateTroop, value: any}) => {
      state.troops[i] = {...state.troops[i], [field]: value};
    }),

    changeTroopCount: payloadReducer((state, {i, count}: {i: number, count: number | null}) => {
      state.troopsCounts[i] = count;
    }),

    changeHeroField: payloadReducer((state, {i, field, value}: {i: number, field: keyof Hero, value: any}) => {
      state.heroes[i][field] = value;
    }),

    toggleHero: payloadReducer((state, i: number) => {
      state.heroesTaken[i] = !state.heroesTaken[i];
    }),

    setArmyState: payloadReducer((state, newState: ArmyTemplateState) =>
      newState
    ),
  }
});

const {} = armyState.actions;

/****** EXPORT ******/

export const { changeTroopField, changeTroopCount, changeHeroField, toggleHero, addTroop, addHero, setArmyState } = armyState.actions;

export default armyState.reducer;