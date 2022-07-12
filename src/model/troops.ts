export interface TroopType {
  name: TroopTypes;
  type: 'foot' | 'mounted';
  order: 'open' | 'close';
  cost: number;
  vsFoot: number;
  vsMounted: number;
  shoot?: number;
  shootDistance?: number;
  target: number
  move: number;
  shatter?: string;
  shattered?: string | string[];
  evade?: string;
  panic?: string;
  additional?: string[];
}

export const troopTypeNames = [
  'Archers',
  'Bow Levy',
  'Light Foot',
  'Light Spear',
  'Rabble',
  'Raiders',
  'Skirmishers',
  'Warband',

  'Artillery',
  'Elite Foot',
  'Heavy Foot',
  'Horde',
  'Pavisiers',
  'Pike',
  'Spear',
  'War Wagons',
  'Warriors',

  'Bad Horse',
  'Battle Taxi',
  'Chariots',
  'Elite Cavalry',
  'Horse Bow',
  'Javelin Cavalry',
  'Knights',

  'Cataphracts',
  'Elephants',
] as const;

export type TroopTypes = typeof troopTypeNames[number];

const convert = (type: 'foot' | 'mounted', order: 'open' | 'close') => (data: Partial<TroopType>[]) => data.map(toopType => ({
  ...toopType,
  type,
  order,
} as TroopType));

export const openOrderFootTypes: TroopType[] = convert('foot', 'open')([{
  name: "Archers",
  vsFoot: 2,
  vsMounted: 4,
  shoot: 3,
  shootDistance: 3,
  target: 3,
  move: 3,
  cost: 4,
  shattered: 'Any mounted'
}, {
  name: "Bow Levy",
  vsFoot: 2,
  vsMounted: 3,
  target: 3,
  move: 3,
  cost: 2,
  shattered: 'Any mounted'
}, {
  name: "Light Foot",
  vsFoot: 3,
  vsMounted: 2,
  target: 3,
  move: 5,
  cost: 3
}, {
  name: "Light Spear",
  vsFoot: 3,
  vsMounted: 3,
  target: 3,
  move: 4,
  cost: 3
}, {
  name: "Rabble",
  vsFoot: 2,
  vsMounted: 1,
  target: 2,
  move: 4,
  cost: 2
}, {
  name: "Raiders",
  vsFoot: 4,
  vsMounted: 2,
  target: 3,
  move: 4,
  cost: 4
}, {
  name: "Skirmishers",
  vsFoot: 2,
  vsMounted: 1,
  target: 3,
  move: 5,
  cost: 3
}, {
  name: "Warband",
  vsFoot: 3,
  vsMounted: 2,
  target: 3,
  move: 4,
  cost: 3
}]);

export const closeOrderFootTypes: TroopType[] = convert('foot', 'open')([{
  name: "Artillery",
  vsFoot: 2,
  vsMounted: 2,
  shoot: 4,
  shootDistance: 8,
  target: 3,
  move: 2,
  cost: 3
}, {
  name: "Elite Foot",
  vsFoot: 5,
  vsMounted: 3,
  target: 3,
  move: 3,
  cost: 4
}, {
  name: "Heavy Foot",
  vsFoot: 4,
  vsMounted: 3,
  target: 3,
  move: 3,
  cost: 3
}, {
  name: "Horde",
  vsFoot: 3,
  vsMounted: 2,
  target: 2,
  move: 2,
  cost: 2
}, {
  name: "Pavisiers",
  vsFoot: 3,
  vsMounted: 4,
  shoot: 3,
  shootDistance: 3,
  target: 3,
  move: 3,
  cost: 4
}, {
  name: "Pike",
  vsFoot: 3,
  vsMounted: 4,
  target: 3,
  move: 3,
  cost: 3
}, {
  name: "Spear",
  vsFoot: 4,
  vsMounted: 4,
  target: 3,
  move: 3,
  cost: 4
}, {
  name: "War Wagons",
  vsFoot: 3,
  vsMounted: 4,
  shoot: 3,
  shootDistance: 3,
  target: 4,
  move: 2,
  cost: 3
}, {
  name: "Warriors",
  vsFoot: 3,
  vsMounted: 2,
  target: 3,
  move: 3,
  cost: 3
}]);

export const openOrderMountedTypes: TroopType[] = convert('foot', 'open')([{
  name: "Bad Horse",
  vsFoot: 2,
  vsMounted: 2,
  target: 2,
  move: 6,
  cost: 3
}, {
  name: "Battle Taxi",
  vsFoot: 2,
  vsMounted: 2,
  target: 2,
  move: 6,
  cost: 3
}, {
  name: "Chariots",
  vsFoot: 2,
  vsMounted: 3,
  target: 3,
  move: 6,
  cost: 4
}, {
  name: "Elite Cavalry",
  vsFoot: 3,
  vsMounted: 3,
  target: 3,
  move: 6,
  cost: 4
}, {
  name: "Horse Bow",
  vsFoot: 2,
  vsMounted: 3,
  target: 2,
  move: 8,
  cost: 4
}, {
  name: "Javelin Cavalry",
  vsFoot: 3,
  vsMounted: 2,
  target: 2,
  move: 8,
  cost: 4
}, {
  name: "Knights",
  vsFoot: 3,
  vsMounted: 4,
  target: 2,
  move: 5,
  cost: 4
}]);

export const closeOrderMountedTypes: TroopType[] = convert('foot', 'open')([{
  name: "Cataphracts",
  vsFoot: 4,
  vsMounted: 4,
  target: 3,
  move: 4,
  cost: 4,
  shattered: ['Elephants, Javelin Cavalry, Raiders', 'On Difficult Terrain']
}, {
  name: "Elephants",
  vsFoot: 5,
  vsMounted: 4,
  target: 3,
  move: 4,
  cost: 4
}]);

export const troopTypes = [
  ...openOrderFootTypes,
  ...closeOrderFootTypes,
  ...openOrderMountedTypes,
  ...closeOrderMountedTypes,
];