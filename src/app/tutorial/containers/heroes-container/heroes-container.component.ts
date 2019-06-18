import { Component, OnInit } from '@angular/core';
import { HeroUsecase } from '../../state/hero/hero.usecase';
import { HeroQuery } from '../../state/hero/hero.query';

@Component({
  selector: 'app-heroes-container',
  templateUrl: './heroes-container.component.html',
  styleUrls: ['./heroes-container.component.scss']
})
export class HeroesContainerComponent implements OnInit {

  heroes$ = this.query.heroes$;

  constructor(private usecase: HeroUsecase, private query: HeroQuery) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.usecase.getHeroes();
  }
}
