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

export const getCost = (troop: ArmyTemplateTroop) =>
  Math.max(
    troop.troopType.cost + troop.cards
      .map(card =>
        typeof card.cost === 'number'
          ? card.cost
          : card.cost.special[troop.troopType.name] ?? card.cost.default
      )
      .reduce((all, cur) => all + cur, 0),
    1
  );