import {TroopTypes} from "model/troops";

export interface BattleCard {
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
  name: "Ambush: home only",
  cost: 1,
  reference: 24,
  rule: '',
  types: [
    "Army"
  ]
}, {
  name: "Ambush: any topo",
  cost: 2,
  reference: 24,
  rule: '',
  types: [
    "Army"
  ]
}, {
  name: "Armored",
  cost: 0.5,
  reference: 25,
  rule: '-1 for enemy Missile Attacks',
  types: [
    "Stand",
    "Transfer"
  ]
}, {
  name: "Assassin",
  cost: 1,
  reference: 26,
  rule: '',
  types: [
    "Hero"
  ]
}, {
  name: "Away",
  cost: 0.5,
  reference: 27,
  rule: 'Can move to and from Away',
  types: [
    "Hero",
    "Stand"
  ]
}, {
  name: "Away (Transfer)",
  cost: 1,
  reference: 27,
  rule: '',
  types: [
    "Transfer"
  ]
}, {
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