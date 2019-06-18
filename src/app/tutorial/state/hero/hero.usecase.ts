import { Injectable } from '@angular/core';

import { HeroStore } from './hero.store';
import { HeroesRepository } from '../../repositories/heroes.repository';
import { HeroModel } from './hero.model';
import { HeroQuery } from './hero.query';
import { HeroEntity } from '../../types';
import { HeroTranslator } from '../../translators/hero.translator';

@Injectable()
export class HeroUsecase {
  constructor(
    private store: HeroStore,
    private repo: HeroesRepository,
    private query: HeroQuery,
    private translator: HeroTranslator
  ) {}

  getHeroes() {
    this.repo.getHeroes().subscribe(res => {
      this.store.set(res.map(r => this.translator.entityToModel(r)));
    });
  }

  search(term: string) {
    this.repo.searchHeroes(term).subscribe(heroes => {
      this.store.update({ searchResult: heroes.map(h => this.translator.entityToModel(h)) });
    });
  }

  async active(id: number) {
    if (!this.query.hasEntity(id)) {
      const h = await this.repo.getHero(id).toPromise();
      this.store.add(this.translator.entityToModel(h));
    }

    this.store.setActive(id);
  }

  update(entity: HeroEntity) {
    this.repo.updateHero(entity).subscribe(() => {
      this.store.upsert(entity.id, this.translator.entityToModel(entity), { baseClass: HeroModel });
    });
  }

  add(params: { name: string }) {
    this.repo
      .addHero(params)
      .subscribe(entity => this.store.add(this.translator.entityToModel(entity)));
  }

  delete(id: number) {
    this.repo.deleteHero(id).subscribe();
    this.store.remove(id);
  }
}
