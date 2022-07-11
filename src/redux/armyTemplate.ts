import {createSlice} from "@reduxjs/toolkit";
import {ArmyTemplateTroop} from "model/army";
import {payloadReducer} from "redux/utils";
import {troopTypes} from "model/troops";

export interface ArmyTemplateState {
  troops: ArmyTemplateTroop[];
  troopsCounts: (number | null)[];
}

const armyTemplate = createSlice({
  name: 'armyTemplate',
  initialState: {
    troops: [],
    troopsCounts: []
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

    changeField: payloadReducer((state, {i, field, value}: {i: number, field: keyof ArmyTemplateTroop, value: any}) => {
      state.troops[i] = {...state.troops[i], [field]: value};
    }),

    changeCount: payloadReducer((state, {i, count}: {i: number, count: number | null}) => {
      state.troopsCounts[i] = count;
    }),
  }
});

const {} = armyTemplate.actions;

/****** EXPORT ******/

export const { changeField, changeCount, addTroop } = armyTemplate.actions;

export default armyTemplate.reducer;