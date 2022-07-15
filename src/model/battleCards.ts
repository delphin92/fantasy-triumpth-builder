import {TroopTypes} from "model/troops";
import {fromPairs} from "lodash";

export interface BattleCard {
  id: number;
  name: string;
  cost: number | CostObject;
  reference: number;
  rule: string;
  types: (keyof typeof BattleCardType)[];
}

export interface CostObject {
  default: number;
  special: Partial<Record<TroopTypes, number>>;
}

export enum BattleCardType {
  Army = 'Army',
  Transfer = 'Transfer',
  Hero = 'Hero',
  Event = 'Event',
  Stand = 'Stand',
}

export const battleCards: BattleCard[] = [{
  id: 0,
  name: "Ambush: home only",
  cost: 1,
  reference: 24,
  rule: '',
  types: [
    "Army"
  ]
}, {
  id: 1,
  name: "Ambush: any topo",
  cost: 2,
  reference: 24,
  rule: '',
  types: [
    "Army"
  ]
}, {
  id: 2,
  name: "Armored",
  cost: 0.5,
  reference: 25,
  rule: '-1 for enemy Missile Attacks',
  types: [
    "Stand",
    "Transfer"
  ]
}, {
  id: 3,
  name: "Assassin",
  cost: 1,
  reference: 26,
  rule: '',
  types: [
    "Hero"
  ]
}, {
  id: 4,
  name: "Away",
  cost: 0.5,
  reference: 27,
  rule: 'Can move to and from Away',
  types: [
    "Hero",
    "Stand"
  ]
}, {
  id: 5,
  name: "Away (Transfer)",
  cost: 1,
  reference: 27,
  rule: '',
  types: [
    "Transfer"
  ]
}, {
  id: 6,
  name: "Brittle",
  cost: {
    default: -1,
    special: {
      'Artillery': 0,
      'Pavisiers': -2
    }
  },
  reference: 28,
  rule: '',
  types: [
    "Stand"
  ]
}, {
  id: 7,
  name: "Charge Through",
  cost: 1,
  reference: 29,
  rule: '',
  types: [
    "Event"
  ]
}];

export const armyBattleCards = battleCards.filter(card => card.types.includes('Army'));
export const standBattleCards = battleCards.filter(card => card.types.includes('Stand'));
export const transferBattleCards = battleCards.filter(card => card.types.includes('Transfer'));
export const heroBattleCards = battleCards.filter(card => card.types.includes('Hero'));
export const eventBattleCards = battleCards.filter(card => card.types.includes('Event'));

export const heroAndTransferBattleCards = [
  ...heroBattleCards,
  ...transferBattleCards,
].sort((c1, c2) => c1.name.localeCompare(c2.name))

export const cardsIdMap: Record<number, BattleCard> = fromPairs(battleCards.map(card => [card.id, card]));