import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { InViewportModule } from 'ng-in-viewport';

// carousel 
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteContainerComponent } from './Components/Website/website-container/website-container.component';
import { HeaderComponent } from './Components/Website/header/header.component';
import { FooterComponent } from './Components/Website/footer/footer.component';
import { HomeComponent } from './Components/Website/webpages/home/home.component';
import { ApiService } from './services/api.service';
import { PrivacyPolicyComponent } from './Components/Website/privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [
    AppComponent,
    WebsiteContainerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    InViewportModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
