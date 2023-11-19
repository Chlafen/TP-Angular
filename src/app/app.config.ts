import { Routes } from '@angular/router';
import { ColorPageComponent } from './views/color-page/color-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { CvPageComponent } from './views/cv-page/cv-page.component';
import { CvDetailsPageComponent } from './views/cv-details-page/cv-details-page.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { NotfoundPageComponent } from './views/notfound-page/notfound-page.component';

export const ROUTES: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home",component:HomePageComponent, title:"Home"},
  {path:"cv",component:CvPageComponent, title:"CV"},
  {path:"cv/:id",component:CvDetailsPageComponent},
  {path:"login",component:LoginPageComponent},
  {path:"color",component:ColorPageComponent, title:"Color"},
  {path:"**",component:NotfoundPageComponent},
];


export const ENDPOINT = 'https://apilb.tridevs.net/api/';