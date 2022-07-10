import {TroopType} from "model/troops";
import {BattleCard} from "model/battleCards";

export interface ArmyTemplateTroop {
  name: string;
  description: string;
  troopType: TroopType;
  cards: BattleCard[];
  min?: number;
  max?: number;
}