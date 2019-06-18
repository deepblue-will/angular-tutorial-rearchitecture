import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroModel } from '../../state/hero/hero.model';

export interface HeroFormData {
  id: number;
  name: string;
}

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  @Input()
  hero: HeroModel;

  @Output()
  clickSave = new EventEmitter<HeroFormData>();
  @Output()
  clickBack = new EventEmitter();

  form: HeroFormData;

  ngOnInit() {
    this.form = {
      id: this.hero.id,
      name: this.hero.name,
    };
  }
}
