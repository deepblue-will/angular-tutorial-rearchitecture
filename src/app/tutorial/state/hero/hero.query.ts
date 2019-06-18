import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { HeroStore, HeroState } from './hero.store';
import { HeroModel } from './hero.model';
import { Observable } from 'rxjs';

@Injectable()
export class HeroQuery extends QueryEntity<HeroState, HeroModel> {
  heroes$ = this.selectAll();
  activeHero$ = this.selectActive() as Observable<HeroModel>;
  searchResult$ = this.select('searchResult');

  constructor(protected store: HeroStore) {
    super(store);
  }
}
