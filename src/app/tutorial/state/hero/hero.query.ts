import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { HeroStore, HeroState } from './hero.store';
import { HeroModel } from './hero.model';

@Injectable()
export class HeroQuery extends QueryEntity<HeroState, HeroModel> {
  heroes$ = this.selectAll();
  searchResult$ = this.select('searchResult');

  constructor(protected store: HeroStore) {
    super(store);
  }
}
