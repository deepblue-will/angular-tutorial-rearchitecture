import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { HeroModel } from './hero.model';

export interface HeroState extends EntityState<HeroModel>, ActiveState {}

@Injectable()
@StoreConfig({ name: 'hero' })
export class HeroStore extends EntityStore<HeroState, HeroModel> {
  constructor() {
    super({ active: null });
  }
}
