import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { TutorialRootComponent } from './tutorial-root.component';
import { HeroDetailPageComponent } from './pages/hero-detail-page/hero-detail-page.component';
import { HerosPageComponent } from './pages/heros-page/heros-page.component';

const routes: Routes = [
  {
    path: '',
    component: TutorialRootComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'detail/:id', component: HeroDetailPageComponent },
      { path: 'heroes', component: HerosPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorialRoutingModule {}
