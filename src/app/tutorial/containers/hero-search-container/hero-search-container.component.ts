import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HeroUsecase } from '../../state/hero/hero.usecase';
import { HeroQuery } from '../../state/hero/hero.query';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HeroModel } from '../../state/hero/hero.model';

@Component({
  selector: 'app-hero-search-container',
  templateUrl: './hero-search-container.component.html',
  styleUrls: ['./hero-search-container.component.scss'],
})
export class HeroSearchContainerComponent implements OnInit {
  heroes$ = this.query.searchResult$;

  private searchTerms = new Subject<string>();

  constructor(private router: Router, private usecase: HeroUsecase, private query: HeroQuery) {}

  ngOnInit() {
    this.searchTerms
      .pipe(
        debounceTime(300),
        distinctUntilChanged()
      )
      .subscribe(text => this.usecase.search(text));
  }

  // 検索語をobservableストリームにpushする
  search(term: string): void {
    this.searchTerms.next(term);
  }

  navigateToDatail(hero: HeroModel) {
    this.router.navigateByUrl(`/detail/${hero.id}`);
  }
}
