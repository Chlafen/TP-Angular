import { Routes } from '@angular/router';
import { ColorPageComponent } from './views/color-page/color-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { CvPageComponent } from './views/cv-page/cv-page.component';
import { CvDetailsPageComponent } from './views/cv-details-page/cv-details-page.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { NotfoundPageComponent } from './views/notfound-page/notfound-page.component';
import { ProductsPageComponent } from './views/products-page/products-page.component';
import { RxjsPageComponent } from './views/rxjs-page/rxjs-page.component';
import { cvReducerResolver } from './reducers/cv-reducer.resolver';
import { MasterDetailsComponent } from './views/master-details/master-details.component';
import { CvDetailsComponent } from './views/cv-page/cv-container/cv-details/cv-details.component';
import { detailsReducerResolver } from './reducers/details-reducer.resolver';
import { AddCvPageComponent } from './views/add-cv-page/add-cv-page/add-cv-page.component';
import { UpdateCvPageComponent } from './views/update-cv-page/update-cv-page.component';
import { authGuardGuard } from './guards/auth-guard.guard';

export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, title: 'Home' },
  {
    path: 'cv',
    children: [
      {
        path: '',
        component: CvPageComponent,
        title: 'CV',
        resolve: { cvs: cvReducerResolver },
      },
      {
        path: 'add',
        component: AddCvPageComponent,
        title: 'Add CV',
        canActivate: [authGuardGuard],
      },
      {
        path: 'update/:id',
        component: UpdateCvPageComponent,
        title: 'Add CV',
        resolve: {
          cv: detailsReducerResolver,
        },
        canActivate: [authGuardGuard],
      },
      {
        path: 'list',
        component: MasterDetailsComponent,
        resolve: { cvs: cvReducerResolver },
        children: [
          {
            path: ':id',
            component: CvDetailsPageComponent,
            title: 'CV Details',
            resolve: { cv: detailsReducerResolver },
          },
        ],
      },
      {
        path: ':id',
        component: CvDetailsPageComponent,
        resolve: {
          cv: detailsReducerResolver,
        },
      },
    ],
  },

  { path: 'login', component: LoginPageComponent, title: 'Login' },
  { path: 'color', component: ColorPageComponent, title: 'Color' },
  { path: 'rxjs', component: RxjsPageComponent, title: 'RxJS' },
  { path: 'products', component: ProductsPageComponent, title: 'Products' },
  { path: '**', component: NotfoundPageComponent, title: 'Not Found' },
];

export const ENDPOINT = 'https://apilb.tridevs.net/api/';
export const ENDPOINT_PRODUCT = 'https://dummyjson.com/';
