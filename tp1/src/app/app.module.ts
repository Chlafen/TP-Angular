import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { ColorComponent } from './views/color-page/color/color.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputCarteComponent } from './carte-container/input-carte/input-carte.component';
import { CarteVisiteComponent } from './carte-container/carte-visite/carte-visite.component';
import { FormsModule } from '@angular/forms';
import { CarteContainerComponent } from './carte-container/carte-container.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { CvPageComponent } from './views/cv-page/cv-page.component';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { ColorPageComponent } from './views/color-page/color-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { NotfoundPageComponent } from './views/notfound-page/notfound-page.component';
import { CvContainerComponent } from './views/cv-page/cv-container/cv-container.component';
import { ItemComponentComponent } from './views/cv-page/cv-container/item-component/item-component.component';
import { ListeComponentComponent } from './views/cv-page/cv-container/liste-component/liste-component.component';
import { ListEmbaucheComponent } from './views/cv-page/list-embauche/list-embauche.component';
import { DataModule } from './data/data.module';
import { CvDetailsPageComponent } from './views/cv-details-page/cv-details-page.component';
import { CvDetailsComponent } from './views/cv-page/cv-container/cv-details/cv-details.component';
import { LoginFormComponent } from './views/login-page/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavItemComponent } from './components/navbar/nav-item/nav-item.component';
import { EmbaucheItemComponent } from './views/cv-page/list-embauche/embauche-item/embauche-item.component';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    InputCarteComponent,
    CarteVisiteComponent,
    CarteContainerComponent,
    CvContainerComponent,
    ListeComponentComponent,
    CvDetailsComponent,
    ItemComponentComponent,
    DefaultImagePipe,
    NavbarComponent,
    NavItemComponent,
    CvPageComponent,
    LoginPageComponent,
    ColorPageComponent,
    HomePageComponent,
    NotfoundPageComponent,
    ListEmbaucheComponent,
    CvDetailsPageComponent,
    LoginFormComponent,
    EmbaucheItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    DataModule,
    ToastModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
