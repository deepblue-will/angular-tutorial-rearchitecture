import { HeroEntity } from '../../types';
import { Weapon } from '../weapon/weapon.model';

export class HeroModel {
  id: HeroEntity['id'];
  name: HeroEntity['name'];

  weapon?: Weapon;

  constructor(args: HeroEntity & { weapon?: Weapon }) {
    this.id = args.id;
    this.name = args.name;

    if (args.weapon) {
      this.weapon = args.weapon;
    }
  }

  get deletable() {
    return this.id > 15;
  }
}
