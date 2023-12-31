import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { ColorComponent } from './views/color-page/color/color.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { CvAgeTabsComponent } from './views/cv-page/cv-age-tabs/cv-age-tabs.component';
import { SearchBarComponent } from './views/cv-page/search-bar/search-bar.component';
import { ProductsPageComponent } from './views/products-page/products-page.component';
import { ProductItemComponent } from './views/products-page/product-item/product-item.component';
import { PaginationComponent } from './views/products-page/pagination/pagination.component';
import { ProductsContainerComponent } from './views/products-page/products-container/products-container.component';
import { RxjsPageComponent } from './views/rxjs-page/rxjs-page.component';
import { MergeComponent } from './views/rxjs-page/merge/merge.component';
import { MasterDetailsComponent } from './views/master-details/master-details.component';
import { AutocompleteComponent } from './views/cv-page/autocomplete/autocomplete.component';
import { SearchListComponent } from './views/cv-page/search-list/search-list.component';
import { AddCvPageComponent } from './views/add-cv-page/add-cv-page/add-cv-page.component';
import { UpdateCvPageComponent } from './views/update-cv-page/update-cv-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
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
    CvAgeTabsComponent,
    SearchBarComponent,
    ProductsPageComponent,
    ProductItemComponent,
    PaginationComponent,
    ProductsContainerComponent,
    RxjsPageComponent,
    MergeComponent,
    MasterDetailsComponent,
    AutocompleteComponent,
    SearchListComponent,
    AddCvPageComponent,
    UpdateCvPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    DataModule,
    ToastModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
