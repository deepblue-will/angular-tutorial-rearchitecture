import { Injectable } from '@angular/core';

import { WeaponStore } from './weapon.store';

@Injectable()
export class WeaponUsecase {
  constructor(private store: WeaponStore) {}

  getWeapons() {
    this.store.set([{ id: 1, name: 'sword' }, { id: 2, name: 'gun' }]);
  }
}
