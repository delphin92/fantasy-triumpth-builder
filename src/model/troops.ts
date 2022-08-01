export interface TroopType {
  id: number;
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
  shatter?: string[];
  shattered?: string[];
  evade?: string[];
  panic?: string[];
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

const convert = (type: 'foot' | 'mounted', order: 'open' | 'close', offset: number) => (data: Partial<TroopType>[]) =>
  data.map((toopType, i) => ({
    ...toopType,
    id: offset + i,
    type,
    order,
  } as TroopType));

let offset = 0;

export const openOrderFootTypes: TroopType[] = convert('foot', 'open', offset)([{
  name: 'Archers',
  vsFoot: 2,
  vsMounted: 4,
  shoot: 3,
  shootDistance: 3,
  target: 3,
  move: 3,
  cost: 4,
  shatter: [
    'Artillery in close combat'
  ],
  shattered: [
    'Any mounted'
  ],
  additional: [
    'Negates rear support'
  ]
}, {
  name: 'Bow Levy',
  vsFoot: 2,
  vsMounted: 3,
  target: 3,
  move: 3,
  cost: 2,
  shatter: [
    'Artillery'
  ],
  shattered: [
    'Any mounted'
  ],
  additional: [
    'Negates rear support'
  ]
}, {
  name: 'Light Foot',
  vsFoot: 3,
  vsMounted: 2,
  target: 3,
  move: 5,
  cost: 3,
  shatter: [
    'Elephants, Artillery'
  ],
  shattered: [
    'Knights or Chariots in open terrain'
  ]
}, {
  name: 'Light Spear',
  vsFoot: 3,
  vsMounted: 3,
  target: 3,
  move: 4,
  cost: 3,
  shatter: [
    'Artillery'
  ],
  shattered: [
    'Knights or Chariots in open terrain'
  ],
  additional: [
    'Rear support +1'
  ]
}, {
  name: 'Rabble',
  vsFoot: 2,
  vsMounted: 1,
  target: 2,
  move: 4,
  cost: 2,
  shatter: [
    'Elephants and Artillery'
  ],
  shattered: [
    'Knights or Chariots in open terrain'
  ],
  panic: [
    'Any mounted in difficult terrain',
    'Elephants',
    'any close order foot except Pavisiers',
    'Light Spear, Raiders or Warband'
  ],
  additional: [
    'May group move without penalty\nin difficult terrain or through other troops if\ngroup is entirely Skirmishers and/or Rabble.',
    'Negates rear support.'
  ]
}, {
  name: 'Raiders',
  vsFoot: 4,
  vsMounted: 2,
  target: 3,
  move: 4,
  cost: 4,
  shatter: [
    'Elephants, Knights, Cataphracts, Artillery'
  ],
  shattered: [
    'Knights or Chariots in open terrain'
  ]
}, {
  name: 'Skirmishers',
  vsFoot: 2,
  vsMounted: 1,
  target: 3,
  move: 5,
  cost: 3,
  shatter: [
    'Elephants, Artillery'
  ],
  evade: [
    'Any mounted in difficult terrain',
    'Any close order foot except Pavisiers',
    'Artillery or War Wagons shooting',
    'Light Spear, Raiders or Warband'
  ],
  panic: [
    'Elephants in open terrain.'
  ],
  additional: [
    'May move through and be moved\nthrough by all troop types.\nMay group move without penalty\nin difficult terrain or through other troops if\ngroup is entirely Skirmishers and/or Rabble.',
    'Negates rear support.',
    '+2 tactical factor vs. Elephants.'
  ]
}, {
  name: 'Warband',
  vsFoot: 3,
  vsMounted: 2,
  target: 3,
  move: 4,
  cost: 3,
  shatter: [
    'Elite Foot, Heavy Foot, Horde,\nPavisiers, Pike, Spear, Artillery'
  ],
  shattered: [
    'Knights or Chariots in open terrain.'
  ],
  additional: [
    'Always pursue'
  ]
}]);

offset += openOrderFootTypes.length;

export const closeOrderFootTypes: TroopType[] = convert('foot', 'open', offset)([{
  name: 'Artillery',
  vsFoot: 2,
  vsMounted: 2,
  shoot: 4,
  shootDistance: 8,
  target: 3,
  move: 2,
  cost: 3,
  shatter: [
    'War Wagons when shooting'
  ],
  shattered: [
    'All in close combat'
  ],
  additional: [
    'Unaffected if beaten but not doubled\nwhen shot at',
    'Requires +1 command point to move',
    'May not be deployed or move through difficult terrain except on roads',
    'Never pursue'
  ]
}, {
  name: 'Elite Foot',
  vsFoot: 5,
  vsMounted: 3,
  target: 3,
  move: 3,
  cost: 4,
  shatter: [
    'Artillery'
  ],
  shattered: [
    'Knights or Chariots in open terrain',
    'Warriors or Warband'
  ]
}, {
  name: 'Heavy Foot',
  vsFoot: 4,
  vsMounted: 3,
  target: 3,
  move: 3,
  cost: 3,
  shatter: [
    'Artillery'
  ],
  shattered: [
    'Knights or Chariots in open terrain',
    'Warriors or Warband'
  ]
}, {
  name: 'Horde',
  vsFoot: 3,
  vsMounted: 2,
  target: 2,
  move: 2,
  cost: 2,
  shatter: [
    'Artillery'
  ],
  shattered: [
    'Knights or Chariots in open terrain',
    'Warriors or Warband'
  ]
}, {
  name: 'Pavisiers',
  vsFoot: 3,
  vsMounted: 4,
  shoot: 3,
  shootDistance: 3,
  target: 3,
  move: 3,
  cost: 4,
  shatter: [
    'Artillery in close combat'
  ],
  shattered: [
    'Knights or Chariots in open terrain',
    'Warriors or Warband'
  ]
}, {
  name: 'Pike',
  vsFoot: 3,
  vsMounted: 4,
  target: 3,
  move: 3,
  cost: 3,
  shatter: [
    'Artillery'
  ],
  shattered: [
    'Knights or Chariots in open terrain',
    'Warriors or Warband'
  ],
  additional: [
    'Rear support +2',
    'Always pursue if recieved rear support'
  ]
}, {
  name: 'Spear',
  vsFoot: 4,
  vsMounted: 4,
  target: 3,
  move: 3,
  cost: 4,
  shatter: [
    'Artillery'
  ],
  shattered: [
    'Knights or Chariots in open terrain',
    'Warriors or Warband'
  ]
}, {
  name: 'War Wagons',
  vsFoot: 3,
  vsMounted: 4,
  shoot: 3,
  shootDistance: 3,
  target: 4,
  move: 2,
  cost: 3,
  shatter: [
    'Artillery in close combat'
  ],
  shattered: [
    'Artillery shooting',
    'Elephants'
  ],
  additional: [
    'Unaffected if beaten bot not doubled\n(except when shattered)',
    'Requires +1 command point to move',
    'May not be deployed or move through difficult terrain except on roads',
    'Never pursue',
    'Cannot be pushed back'
  ]
}, {
  name: 'Warriors',
  vsFoot: 3,
  vsMounted: 2,
  target: 3,
  move: 3,
  cost: 3,
  shatter: [
    'Elite Foot, Heavy Foot, Horde,\nPavisiers, Pike, Spear, Artillery'
  ],
  shattered: [
    'Knights or Chariots in open terrain.'
  ],
  additional: [
    'Rear support +1',
    'Always pursue'
  ]
}]);

offset += closeOrderFootTypes.length;

export const openOrderMountedTypes: TroopType[] = convert('foot', 'open', offset)([{
  name: 'Bad Horse',
  vsFoot: 2,
  vsMounted: 2,
  target: 2,
  move: 6,
  cost: 3,
  shatter: [
    'Archers, Bow Levy and Artillery'
  ],
  panic: [
    'On Difficult Terrain if beaten but not doubled'
  ],
  additional: [
    'Moves 3 MU in difficult terrain',
    'Negates rear support'
  ]
}, {
  name: 'Battle Taxi',
  vsFoot: 2,
  vsMounted: 2,
  target: 2,
  move: 6,
  cost: 3,
  shatter: [
    'Archers, Bow Levy and Artillery'
  ],
  evade: [
    'Any foot except Archers, Pavisiers,\nSkirmishers, Bow Levy or Artillery in open\nterrain'
  ],
  panic: [
    'On Difficult Terrain if beaten but not doubled'
  ],
  additional: [
    'Moves 3 MU in difficult terrain',
    'Negates rear support'
  ]
}, {
  name: 'Chariots',
  vsFoot: 2,
  vsMounted: 3,
  target: 3,
  move: 6,
  cost: 4,
  shatter: [
    'Light Foot, Light Spear, Rabble, Raiders,\nWarband, Warriors, Elite Foot, Heavy Foot,\nHorde, Pavisiers, Pike or Spear in open\nterrain',
    'Archers, Bow Levy and Artillery'
  ],
  evade: [
    'Any foot except Archers, Pavisiers,\nSkirmishers, Bow Levy or Artillery in open\nterrain'
  ],
  panic: [
    'On Difficult Terrain if beaten but not doubled'
  ],
  additional: [
    'Moves 3 MU in difficult terrain',
    'Negates rear support'
  ]
}, {
  name: 'Elite Cavalry',
  vsFoot: 3,
  vsMounted: 3,
  target: 3,
  move: 6,
  cost: 4,
  shatter: [
    'Archers, Bow Levy and Artillery'
  ],
  evade: [
    'Heavy Foot, Horde, Light Spear,\nPike or Spear in open terrain'
  ],
  panic: [
    'Knights or Cataphracts in open terrain',
    'On Difficult Terrain if beaten but not doubled'
  ],
  additional: [
    'Moves 3 MU in difficult terrain',
    'Negates rear support'
  ]
}, {
  name: 'Horse Bow',
  vsFoot: 2,
  vsMounted: 3,
  target: 2,
  move: 8,
  cost: 4,
  shatter: [
    'Archers, Bow Levy and Artillery'
  ],
  evade: [
    'Any foot except Archers, Pavisiers,\nSkirmishers, Bow Levy or Artillery in open\nterrain'
  ],
  panic: [
    'Knights, Cataphracts or Artillery shooting\nin open terrain',
    'On Difficult Terrain if beaten but not doubled'
  ],
  additional: [
    'Moves 3 MU in difficult terrain',
    'Negates rear support'
  ]
}, {
  name: 'Javelin Cavalry',
  vsFoot: 3,
  vsMounted: 2,
  target: 2,
  move: 8,
  cost: 4,
  shatter: [
    'Archers, Bow Levy, Knights, Cataphracts,\nElephants and Artillery'
  ],
  evade: [
    'Heavy Foot, Horde, Light Spear,\nPike or Spear in open terrain'
  ],
  panic: [
    'On Difficult Terrain if beaten but not doubled'
  ],
  additional: [
    'Moves 3 MU in difficult terrain',
    'Negates rear support'
  ]
}, {
  name: 'Knights',
  vsFoot: 3,
  vsMounted: 4,
  target: 2,
  move: 5,
  cost: 4,
  shatter: [
    'Light Foot, Light Spear, Rabble, Raiders,\nWarband, Warriors, Elite Foot, Heavy Foot,\nHorde, Pavisiers, Pike and Spear in open\nterrain.',
    'Archers, Bow Levy and Artillery'
  ],
  shattered: [
    'Elephants, Javelin Cavalry or Raiders',
    'On Difficult Terrain'
  ],
  additional: [
    'Moves 3 MU in difficult terrain',
    'Always pursue'
  ]
}]);

offset += openOrderMountedTypes.length;

export const closeOrderMountedTypes: TroopType[] = convert('foot', 'open', offset)([{
  name: 'Cataphracts',
  vsFoot: 4,
  vsMounted: 4,
  target: 3,
  move: 4,
  cost: 4,
  shatter: [
    'Archers, Bow Levy, Artillery'
  ],
  shattered: [
    'Elephants, Javelin Cavalry, Raiders',
    'On Difficult Terrain'
  ],
  additional: [
    'Moves 3 MU in difficult terrain.'
  ]
}, {
  name: 'Elephants',
  vsFoot: 5,
  vsMounted: 4,
  target: 3,
  move: 4,
  cost: 4,
  shatter: [
    'Archers, Bow Levy, War Wagons,\nKnights, Cataphracts and Artillery'
  ],
  shattered: [
    'Skirmishers, Light Foot,\nJavelin Cavalry, Rabble or Raiders'
  ],
  additional: [
    'Requires +1 command point to move.',
    'Moves 3 MU in difficult terrain',
    'Always pursue',
    'Destroys friendly stands except Skirmishers when falling back',
    'Cannot be pushed back'
  ]
}]);

export const troopTypes = [
  ...openOrderFootTypes,
  ...closeOrderFootTypes,
  ...openOrderMountedTypes,
  ...closeOrderMountedTypes,
];