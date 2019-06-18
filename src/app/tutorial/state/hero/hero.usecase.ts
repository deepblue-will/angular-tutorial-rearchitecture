import { Injectable } from '@angular/core';

import { HeroStore } from './hero.store';
import { HeroesRepository } from '../../repositories/heroes.repository';
import { HeroModel } from './hero.model';

@Injectable()
export class HeroUsecase {
  constructor(private store: HeroStore, private repo: HeroesRepository) {}

  getHeroes() {
    this.repo.getHeroes().subscribe(res => {
      this.store.set(res.map(r => new HeroModel(r)));
    });
  }

  search(term: string) {
    this.repo.searchHeroes(term).subscribe(heroes => {
      this.store.update({ searchResult: heroes.map(h => new HeroModel(h)) });
    });
  }
}
