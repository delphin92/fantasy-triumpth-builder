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

export interface Hero {
  name: string;
  description: string;
  cards: BattleCard[];
}

export interface ArmyCard {
  card: (BattleCard | null);
  description: string;
}

const HERO_BASE_COST = 1;

export const getTroopCost = (troop: ArmyTemplateTroop) =>
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

export const getHeroCost = (hero: Hero) =>
  Math.max(
    HERO_BASE_COST + hero.cards
      .map(card => card.cost as number)
      .reduce((all, cur) => all + cur, 0),
    1
  );