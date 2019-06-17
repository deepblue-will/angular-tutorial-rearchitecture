import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { TutorialRootComponent } from './tutorial-root.component';
import { HeroDetailPageComponent } from './pages/hero-detail-page/hero-detail-page.component';
import { HerosPageComponent } from './pages/heros-page/heros-page.component';

@NgModule({
  declarations: [DashboardPageComponent, TutorialRootComponent, HeroDetailPageComponent, HerosPageComponent],
  imports: [CommonModule, TutorialRoutingModule],
})
export class TutorialModule {}
