import { Component } from '@angular/core';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.css']
})
export class CvContainerComponent {
  cvList: Cv[] = [
    new Cv(1, "Med", "Bouchnak", 26, 12345678, "Dev FS", "assets/images/2.png", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),
    new Cv(2, "John", "Doe", 26, 12345678, "Ing", "assets/images/1.png",        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."),
    new Cv(3, "Alex", "Kime", 26, 12345678, "Doc", "assets/images/3.png",       "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores."),
  ];

  selectedCv?:Cv = this.cvList[0]

  changeSelected(id:number){
    this.selectedCv = this.cvList.find((cv)=>cv.id==id)
  }
}
