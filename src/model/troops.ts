export interface TroopType {
  name: string;
  type: 'foot' | 'mounted';
  order: 'open' | 'close';
  cost: number;
  modifiers: {
    vsFoot: number;
    vsMounted: number;
  }
  move: number;
  shatter?: TroopType[];
  shattered?: TroopType[];
  evade?: TroopType[];
  panic?: TroopType[];
  additional?: string[];
}

export const openOrderFootTypes: TroopType[] = [{
  name: 'Rabble',
  type: 'foot',
  order: 'open',
  cost: 2,
  modifiers: {
    vsFoot: 2,
    vsMounted: 1
  },
  move: 3,
  shattered: []   // TODO
}];

export const closeOrderFootTypes: TroopType[] = [];
export const openOrderMountedTypes: TroopType[] = [];
export const closeOrderMountedTypes: TroopType[] = [];

export const troopTypes = [
  ...openOrderFootTypes,
  ...closeOrderFootTypes,
  ...openOrderMountedTypes,
  ...closeOrderMountedTypes,
];