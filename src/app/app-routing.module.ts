import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteContainerComponent } from './Components/Website/website-container/website-container.component';
import { HomeComponent } from './Components/Website/webpages/home/home.component';
import { PagenotfoundComponent } from './Components/Errorpages/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: 'home', component: WebsiteContainerComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
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
