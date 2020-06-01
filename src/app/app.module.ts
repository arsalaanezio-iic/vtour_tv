import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";


// carousel 
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteContainerComponent } from './Components/Website/website-container/website-container.component';
import { HeaderComponent } from './Components/Website/header/header.component';
import { FooterComponent } from './Components/Website/footer/footer.component';
import { HomeComponent } from './Components/Website/webpages/home/home.component';
import { ApiService } from './services/api.service';


@NgModule({
  declarations: [
    AppComponent,
    WebsiteContainerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
