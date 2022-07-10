import {createSlice} from "@reduxjs/toolkit";
import {ArmyTemplateTroop} from "model/army";
import {payloadReducer} from "redux/utils";
import {troopTypes} from "model/troops";

export interface ArmyTemplateState {
  troops: ArmyTemplateTroop[];
}

const armyTemplate = createSlice({
  name: 'armyTemplate',
  initialState: {
    troops: [],
  } as ArmyTemplateState,
  reducers: {
    addTroop: state => {
      state.troops.push({
        name: '',
        description: '',
        troopType: troopTypes[0],
        cards: [],
      })
    },
    changeField: payloadReducer((state, {i, field, value}: {i: number, field: keyof ArmyTemplateTroop, value: any}) => {
      state.troops[i] = {...state.troops[i], [field]: value};
    }),
  }
});

const {} = armyTemplate.actions;

/****** EXPORT ******/

export const { changeField, addTroop } = armyTemplate.actions;

export default armyTemplate.reducer;