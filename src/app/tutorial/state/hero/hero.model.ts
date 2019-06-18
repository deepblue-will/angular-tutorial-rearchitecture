import { HeroEntity } from '../../types';

export class HeroModel {
  id: HeroEntity['id'];
  name: HeroEntity['name'];

  constructor(entity: HeroEntity) {
    this.id = entity.id;
    this.name = entity.name;
  }

  get deletable() {
    return this.id > 15;
  }
}
