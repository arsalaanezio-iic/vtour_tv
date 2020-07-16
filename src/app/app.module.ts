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
import { FooterarabicComponent } from './Components//Websitearabic/footerarabic/footerarabic.component';
import { HeaderarabicComponent } from './Components/Websitearabic/headerarabic/headerarabic.component';
import { PrivacyPolicyarabicComponent } from './Components/Websitearabic/privacy-policyarabic/privacy-policyarabic.component';
import { HomearabicComponent } from './Components/Websitearabic/webpages/homearabic/homearabic.component';
import { WebsiteContainerArabicComponent } from './Components/Websitearabic/website-container-arabic/website-container-arabic.component';
import { FooterenglishComponent } from './Components/Websiteenglish/footerenglish/footerenglish.component';
import { HeaderenglishComponent } from './Components/Websiteenglish/headerenglish/headerenglish.component';
import { PrivacyPolicyenglishComponent } from './Components/Websiteenglish/privacy-policyenglish/privacy-policyenglish.component';
import { WebsiteContainerEnglishComponent } from './Components/Websiteenglish/website-container-english/website-container-english.component';
import { HomeenglishComponent } from './Components/Websiteenglish/webpages/homeenglish/homeenglish.component';

@NgModule({
  declarations: [
    AppComponent,
    WebsiteContainerComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    FooterarabicComponent,
    HeaderarabicComponent,
    PrivacyPolicyarabicComponent,
    HomearabicComponent,
    WebsiteContainerArabicComponent,
    FooterenglishComponent,
    HeaderenglishComponent,
    PrivacyPolicyenglishComponent,
    WebsiteContainerEnglishComponent,
    HomeenglishComponent,
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
