import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './components/dynamics/chat/chat.component';
import { DetailChatComponent } from './components/dynamics/chat/detail-chat/detail-chat.component';
import { FilterItemComponent } from './components/dynamics/filter/filter-item/filter-item.component';
import { FilterComponent } from './components/dynamics/filter/filter.component';
import { HomeComponent } from './components/dynamics/home/home.component';
import { PostUpComponent } from './components/dynamics/post-up/post-up.component';
import { PriceChartComponent } from './components/dynamics/price-chart/price-chart.component';
import { ProductDetailComponent } from './components/dynamics/product-detail/product-detail.component';
import { ProfileComponent } from './components/dynamics/profile/profile.component';
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
    children: [
      {
        path: 'mua-ban/:param',
        component: FilterItemComponent
      },
      {
        path: 'cho-thue/:param',
        component: FilterItemComponent
      }
    ]
  },
  {
    path: 'post-up',
    component: PostUpComponent,
  },
  {
    path: 'product-detail/:param',
    component: ProductDetailComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
    children: [
      {
        path: ':param',
        component: DetailChatComponent,
      }
    ]
  },
  {
    path: 'profile/:param',
    component: ProfileComponent,
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
