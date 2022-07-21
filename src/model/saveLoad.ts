import store from "redux/store";
import {ArmyState, setArmyState} from "redux/armyState";
import {debounce, isNull} from "lodash";
import LZUTF8 from "lzutf8";
import {troopTypes} from "model/troops";
import {cardsIdMap} from "model/battleCards";

export type SerializableState = [
  // troops:
  [
    string,   // name
    string,   // description
    number,   // type
    number[], // cards
    number?,  // min
    number?,  // max
  ][],

  // troops counts:
  number[],

  // heroes:
  [
    string,   // name
    string,   // description
    number[], // cards
    number    // dueling value
  ][],

  // heroesTaken:
  boolean[],

  // armyCards:
  [
    number | null,  // card
    string,         // description
  ][],

  // armyCardsCounts:
  number[],
];

export const makeHash = debounce(() => {
  const state = store.getState().armyState;

  const serializableState: SerializableState = [
    state.troops.map(troop => [
      troop.name,
      troop.description,
      troop.troopType.id,
      troop.cards.map(({id}) => id),
    ]),
    state.troopsCounts.map(num => num ?? 0),
    state.heroes.map(hero => [
      hero.name,
      hero.description,
      hero.cards.map(({id}) => id),
      hero.duelingValue
    ]),
    state.heroesTaken,
    state.armyCards.map(card => [
      card.card?.id ?? null,
      card.description,
    ]),
    state.armyCardsCounts.map(num => num ?? 0),
  ];

  const hash = LZUTF8.compress(JSON.stringify(serializableState), {outputEncoding: 'Base64'}).replaceAll('/', '-');
  console.log(hash)

  const [, , tab] = window.location.pathname.split('/');
  const newUrl = [window.location.origin, hash, tab].join('/');

  window.history.replaceState(null, '', newUrl)
}, 1000);

export const loadHash = (hash: string) => {
  if (hash === '_') {
    return;
  }

  const serializableState: SerializableState = JSON.parse(LZUTF8.decompress(hash.replaceAll('-', '/'), {inputEncoding: 'Base64'}));

  const state: ArmyState = {
    troops: serializableState[0].map(troop =>({
      name: troop[0],
      description: troop[1],
      troopType: troopTypes[troop[2]],
      cards: troop[3].map(id => cardsIdMap[id]),
    })),
    troopsCounts: serializableState[1],
    heroes: serializableState[2].map(hero => ({
      name: hero[0],
      description: hero[1],
      cards: hero[2].map(id => cardsIdMap[id]),
      duelingValue: hero[3]
    })),
    heroesTaken: serializableState[3],
    armyCards: serializableState[4].map(card => ({
      card: !isNull(card[0]) ? cardsIdMap[card[0]] : null,
      description: card[1]
    })),
    armyCardsCounts: serializableState[5],
  };

  store.dispatch(setArmyState(state));
}