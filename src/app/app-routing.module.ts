import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteContainerComponent } from './Components/Website/website-container/website-container.component';
import { HomeComponent } from './Components/Website/webpages/home/home.component';
import { PagenotfoundComponent } from './Components/Errorpages/pagenotfound/pagenotfound.component';
import { PrivacyPolicyComponent } from './Components/Website/privacy-policy/privacy-policy.component';
import { HomearabicComponent } from './Components/Websitearabic/webpages/homearabic/homearabic.component';
import { WebsiteContainerArabicComponent } from './Components/Websitearabic/website-container-arabic/website-container-arabic.component';
import { WebsiteContainerEnglishComponent } from './Components/Websiteenglish/website-container-english/website-container-english.component';
import { HomeenglishComponent } from './Components/Websiteenglish/webpages/homeenglish/homeenglish.component';


const routes: Routes = [
  {
    path: 'home', component: WebsiteContainerComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
  {
    path: 'sa', component: WebsiteContainerArabicComponent,
    children: [
      { path: '', component: HomearabicComponent }
    ]
  },
  {
    path: 'en', component: WebsiteContainerEnglishComponent,
    children: [
      { path: '', component: HomeenglishComponent }
    ]
  },
  {
    path: 'privacy-policy', component: PrivacyPolicyComponent
  },

  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  
  {
    path: '**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
