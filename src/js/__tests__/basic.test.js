import Character from '../basic';

test('pers created', () => {
  const pers = new Character('Иваныч', 'Daemon');
  const exp = {
    name: 'Иваныч',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  };
  expect(pers).toEqual(exp);
});

test('Bad name of pers', () => {
  try {
    // eslint-disable-next-line no-unused-vars
    const pers = new Character('И', 'Daemon');
  } catch (e) {
    expect(e).toThrow();
  }
});

test('Bad type of pers', () => {
  try {
    // eslint-disable-next-line no-unused-vars
    const pers = new Character('Иваныч', 'В');
  } catch (e) {
    expect(e).toThrow();
  }
});

test('2 pers created', () => {
  const persOne = new Character('Иваныч', 'Daemon');
  const persTwo = new Character('Семеныч', 'Bowman');
  const persThree = new Character('Петрович', 'Swordsman');
  const persFour = new Character('Михалыч', 'Magician');
  const persFive = new Character('Степаныч', 'Undead');
  const persSix = new Character('Романыч', 'Zombie');
  const players = [persOne, persTwo, persThree, persFour, persFive, persSix];
  const exp = [{
    name: 'Иваныч',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  },
  {
    name: 'Семеныч',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  },
  {
    name: 'Петрович',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  },
  {
    name: 'Михалыч',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defense: 40,
  },
  {
    name: 'Степаныч',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defense: 25,
  },
  {
    name: 'Романыч',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defense: 10,
  },
  ];
  expect(players).toEqual(exp);
});
