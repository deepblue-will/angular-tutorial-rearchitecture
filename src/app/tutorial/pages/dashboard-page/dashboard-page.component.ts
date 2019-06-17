import { Component, OnInit } from '@angular/core';

import { HeroUsecase } from '../../state/hero/hero.usecase';
import { HeroQuery } from '../../state/hero/hero.query';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  heroes$ = this.query.heroes$;

  constructor(private usecase: HeroUsecase, private query: HeroQuery) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.usecase.getHeroes();
  }
}
