import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Weapon } from './weapon.model';

export interface WeaponState extends EntityState<Weapon> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'weapon' })
export class WeaponStore extends EntityStore<WeaponState, Weapon> {

  constructor() {
    super();
  }

}

