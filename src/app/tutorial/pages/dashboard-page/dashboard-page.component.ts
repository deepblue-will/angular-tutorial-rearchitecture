import { Component, OnInit } from '@angular/core';

import { HeroesRepository } from '../../repositories/heroes.repository';
import { HeroEntity } from '../../types';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit {
  heroes: HeroEntity[] = [];

  constructor(private repo: HeroesRepository) {}

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.repo.getHeroes().subscribe(heroes => (this.heroes = heroes.slice(1, 5)));
  }
}
