import { Component } from '@angular/core';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-list-embauche',
  templateUrl: './list-embauche.component.html',
  styleUrls: ['./list-embauche.component.css']
})
export class ListEmbaucheComponent {
    cvs$ = this.cvService.cvEmbauche$; 
    constructor(private cvService: CvService) { }
}