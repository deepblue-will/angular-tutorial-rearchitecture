import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroModel } from '../../state/hero/hero.model';

@Component({
  selector: 'app-removable-hero-list',
  templateUrl: './removable-hero-list.component.html',
  styleUrls: ['./removable-hero-list.component.scss'],
})
export class RemovableHeroListComponent {
  @Input()
  heroes: HeroModel[];

  @Output()
  clickHero = new EventEmitter<HeroModel>();
  @Output()
  removeHero = new EventEmitter<HeroModel>();
}
