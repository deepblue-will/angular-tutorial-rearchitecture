import { Injectable } from '@angular/core';

import { HeroModel } from '../state/hero/hero.model';
import { HeroEntity } from '../types';
import { WeaponUsecase } from '../state/weapon/weapon.usecase';
import { WeaponQuery } from '../state/weapon/weapon.query';

@Injectable()
export class HeroTranslator {
  constructor(private usecase: WeaponUsecase, private query: WeaponQuery) {}

  entityToModel(entity: HeroEntity): HeroModel {
    this.usecase.getWeapons();

    const weapon = this.query.find(entity.weaponId);

    return new HeroModel({ ...entity, weapon });
  }
}
