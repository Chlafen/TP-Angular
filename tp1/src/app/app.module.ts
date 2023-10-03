import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputCarteComponent } from './carte-container/input-carte/input-carte.component';
import { CarteVisiteComponent } from './carte-container/carte-visite/carte-visite.component';
import { FormsModule } from '@angular/forms';
import { CarteContainerComponent } from './carte-container/carte-container.component';
import { CvContainerComponent } from './cv-container/cv-container.component';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { ListeComponentComponent } from './cv-container/liste-component/liste-component.component';
import { ItemComponentComponent } from './cv-container/item-component/item-component.component';
import { DetailComponentComponent } from './cv-container/detail-component/detail-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    InputCarteComponent,
    CarteVisiteComponent,
    CarteContainerComponent,
    CvContainerComponent,
    DefaultImagePipe,
    ListeComponentComponent,
    ItemComponentComponent,
    DetailComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
