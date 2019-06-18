import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroUsecase } from '../../state/hero/hero.usecase';
import { HeroQuery } from '../../state/hero/hero.query';
import { HeroModel } from '../../state/hero/hero.model';

@Component({
  selector: 'app-heros-page',
  templateUrl: './heros-page.component.html',
  styleUrls: ['./heros-page.component.scss'],
})
export class HerosPageComponent implements OnInit {
  heroes$ = this.query.heroes$;

  constructor(private router: Router, private usecase: HeroUsecase, private query: HeroQuery) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.usecase.getHeroes();
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }

    this.usecase.add({ name });
  }

  delete(hero: HeroModel): void {
    this.usecase.delete(hero.id);
  }

  navigateToDetail(hero: HeroModel) {
    this.router.navigateByUrl(`/detail/${hero.id}`);
  }
}
