import { Component, OnInit } from '@angular/core';
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

  constructor(private usecase: HeroUsecase, private query: HeroQuery) {}

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

    // this.heroService.addHero({ name } as Hero).subscribe(hero => {
    //   this.heroes.push(hero);
    // });
  }

  delete(hero: HeroModel): void {
    // this.heroes = this.heroes.filter(h => h !== hero);
    // this.heroService.deleteHero(hero).subscribe();
  }
}
