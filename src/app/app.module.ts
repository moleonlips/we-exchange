import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/static/header/header.component';
import { HomeComponent } from './components/dynamics/home/home.component';
import { SliderComponent } from './components/dynamics/home/slider/slider.component';
import { FooterComponent } from './components/static/footer/footer.component';
import { PriceChartComponent } from './components/dynamics/price-chart/price-chart.component';
import { ProjectsComponent } from './components/dynamics/projects/projects.component';
import { LimitStringPipe } from './components/dynamics/price-chart/limit-string.pipe';
import { FilterComponent } from './components/dynamics/filter/filter.component';
import { PostUpComponent } from './components/dynamics/post-up/post-up.component';
import { TestComponent } from './components/dynamics/post-up/test/test.component';

import { SharedService } from './services/shared/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    FooterComponent,
    PriceChartComponent,
    ProjectsComponent,
    LimitStringPipe,
    FilterComponent,
    PostUpComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWEwcMFHjwI-YCYcEoGVrgEdGcgbPX0sg'
    })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
