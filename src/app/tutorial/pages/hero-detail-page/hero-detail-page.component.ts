import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroUsecase } from '../../state/hero/hero.usecase';
import { HeroQuery } from '../../state/hero/hero.query';

@Component({
  selector: 'app-hero-detail-page',
  templateUrl: './hero-detail-page.component.html',
  styleUrls: ['./hero-detail-page.component.scss'],
})
export class HeroDetailPageComponent implements OnInit {
  hero$ = this.query.activeHero$;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private usecase: HeroUsecase,
    private query: HeroQuery
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.usecase.active(parseInt(id, 10));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    // this.usecase.update()
  }
}
