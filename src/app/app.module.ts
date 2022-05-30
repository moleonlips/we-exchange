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
import { ProductDetailComponent } from './components/dynamics/product-detail/product-detail.component';
import { ChildrenComponent } from './components/dynamics/projects/children/children.component';
import { ChatComponent } from './components/dynamics/chat/chat.component';
import { DetailChatComponent } from './components/dynamics/chat/detail-chat/detail-chat.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { QuillModule } from 'ngx-quill';

import { environment } from './environment/environment';
import { MaxLengthPipe } from './Pipes/max-length.pipe';
import { FilterItemComponent } from './components/dynamics/filter/filter-item/filter-item.component';
import { ConvertUrlPipe } from './Pipes/convert-url.pipe';
import { PhonePipe } from './Pipes/phone.pipe';

import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { ChartsModule } from 'ng2-charts';
import { ProfileComponent } from './components/dynamics/profile/profile.component';

const config: SocketIoConfig = {
	url: environment.socketUrl, // socket server url;
	options: {
		transports: ['websocket']
	}
}

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
    TestComponent,
    ProductDetailComponent,
    ChildrenComponent,
    ChatComponent,
    DetailChatComponent,
    MaxLengthPipe,
    FilterItemComponent,
    ConvertUrlPipe,
    PhonePipe,
    ProfileComponent,
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgImageFullscreenViewModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnCUhO9s_pDmEoDdypf-KQ-rxp0t5rFHM'
    }),
    SocketIoModule.forRoot(config),
    QuillModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    SharedService
  ],
  bootstrap: [AppComponent]
})
//
export class AppModule { }

