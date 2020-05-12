export default function Character(name, type) {
  const typeAr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  try {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Имя персонажа должно быть строкой от 2 до 10 символов');
    }
    if (typeAr.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Класс персонажа должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
  } catch (e) {
    return e;
  }
  this.health = 100;
  this.level = 1;
  // eslint-disable-next-line default-case
  switch (type) {
    case 'Bowman':
      this.attack = 25;
      this.defense = 25;
      break;
    case 'Swordsman':
      this.attack = 40;
      this.defense = 10;
      break;
    case 'Magician':
      this.attack = 10;
      this.defense = 40;
      break;
    case 'Undead':
      this.attack = 25;
      this.defense = 25;
      break;
    case 'Zombie':
      this.attack = 40;
      this.defense = 10;
      break;
    case 'Daemon':
      this.attack = 10;
      this.defense = 40;
      break;
  }
}
