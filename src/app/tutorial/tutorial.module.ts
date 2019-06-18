import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { TutorialRootComponent } from './tutorial-root.component';
import { HeroDetailPageComponent } from './pages/hero-detail-page/hero-detail-page.component';
import { HerosPageComponent } from './pages/heros-page/heros-page.component';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroesRepository } from './repositories/heroes.repository';
import { HeroStore } from './state/hero/hero.store';
import { HeroUsecase } from './state/hero/hero.usecase';
import { HeroQuery } from './state/hero/hero.query';
import { HeroComponent } from './components/hero/hero.component';
import { HeroSearchContainerComponent } from './containers/hero-search-container/hero-search-container.component';
import { HeroesContainerComponent } from './containers/heroes-container/heroes-container.component';
import { HeroSearchInputComponent } from './components/hero-search-input/hero-search-input.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { RemovableHeroListComponent } from './components/removable-hero-list/removable-hero-list.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    TutorialRootComponent,
    HeroDetailPageComponent,
    HerosPageComponent,
    HeroComponent,
    HeroSearchContainerComponent,
    HeroesContainerComponent,
    HeroSearchInputComponent,
    HeroFormComponent,
    RemovableHeroListComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    TutorialRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false }),
  ],
  providers: [HeroesRepository, InMemoryDataService, HeroStore, HeroUsecase, HeroQuery],
})
export class TutorialModule {}
