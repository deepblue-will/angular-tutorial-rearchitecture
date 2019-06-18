import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { WeaponStore, WeaponState } from './weapon.store';
import { Weapon } from './weapon.model';

@Injectable()
export class WeaponQuery extends QueryEntity<WeaponState, Weapon> {
  constructor(protected store: WeaponStore) {
    super(store);
  }

  find(id: number) {
    return this.getAll().find(w => w.id === id);
  }
}
