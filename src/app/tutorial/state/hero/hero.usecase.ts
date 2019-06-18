import { Injectable } from '@angular/core';

import { HeroStore } from './hero.store';
import { HeroesRepository } from '../../repositories/heroes.repository';
import { HeroModel } from './hero.model';
import { HeroQuery } from './hero.query';

@Injectable()
export class HeroUsecase {
  constructor(private store: HeroStore, private repo: HeroesRepository, private query: HeroQuery) {}

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

  async active(id: number) {
    if (!this.query.hasEntity(id)) {
      const h = await this.repo.getHero(id).toPromise();
      this.store.add(new HeroModel(h));
    }

    this.store.setActive(id);
  }
}
