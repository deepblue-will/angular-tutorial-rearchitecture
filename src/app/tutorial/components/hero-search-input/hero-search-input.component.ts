import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HeroModel } from '../../state/hero/hero.model';

@Component({
  selector: 'app-hero-search-input',
  templateUrl: './hero-search-input.component.html',
  styleUrls: ['./hero-search-input.component.scss'],
})
export class HeroSearchInputComponent {
  @Input()
  heroes: HeroModel[];

  @Output()
  inputText = new EventEmitter<string>();
  @Output()
  clickHero = new EventEmitter<HeroModel>();
}
