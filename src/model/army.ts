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
  duelingValue: number;
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
    HERO_BASE_COST +
    hero.cards
      .map(card => card.cost as number)
      .reduce((all, cur) => all + cur, 0) +
    hero.duelingValue * 0.5,
    1
  );

export const getTroopsCost = (troops: ArmyTemplateTroop[], troopsCounts: (number | null)[]): number =>
  troops.map((troop, i) => getTroopCost(troop) * (troopsCounts[i] ?? 0)).reduce((all, cur) => all + cur, 0);

export const getHeroesCost = (heroes: Hero[], heroesTaken: boolean[]): number =>
  heroes.filter((_, i) => heroesTaken[i]).map(hero => getHeroCost(hero)).reduce((all, cur) => all + cur, 0);

export const getArmyCardsCost = (armyCards: ArmyCard[], armyCardsCounts: (number | null)[]): number =>
  armyCards.map((card, i) => card.card?.cost as number * (armyCardsCounts[i] ?? 0)).reduce((all, cur) => all + cur, 0);

export const getTroopMove = (troop: ArmyTemplateTroop): number =>
  troop.cards.some(card => card.name === 'Fast') ? (
    troop.troopType.move === 6
      ? troop.troopType.move + 2
      : troop.troopType.move + 1
  ): troop.cards.some(card => card.name === 'Slow') ? (
    troop.troopType.move === 8
      ? troop.troopType.move - 2
      : troop.troopType.move - 1
  ): (
    troop.troopType.move
  );

export const getTroopCloseCombat = (troop: ArmyTemplateTroop): [number, number] =>
  troop.cards.some(card => card.name === 'Deadly')
    ? [troop.troopType.vsFoot + 1, troop.troopType.vsMounted + 1]
    : [troop.troopType.vsFoot, troop.troopType.vsMounted]
