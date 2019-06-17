import { Component, Input } from '@angular/core';
import { HeroModel } from '../../state/hero/hero.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @Input()
  hero: HeroModel;
}
