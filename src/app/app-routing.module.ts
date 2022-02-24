import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './components/dynamics/filter/filter.component';
import { HomeComponent } from './components/dynamics/home/home.component';
import { PostUpComponent } from './components/dynamics/post-up/post-up.component';
import { PriceChartComponent } from './components/dynamics/price-chart/price-chart.component';
import { ProjectsComponent } from './components/dynamics/projects/projects.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'price-chart',
    component: PriceChartComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'filter',
    component: FilterComponent,
  },
  {
    path: 'post-up',
    component: PostUpComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
