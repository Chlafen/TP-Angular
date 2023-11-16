import { Component, Input } from '@angular/core';
import { CvModel } from 'src/app/domain/models/cv.model';


@Component({
  selector: 'app-cv-container',
  templateUrl: './cv-container.component.html',
  styleUrls: ['./cv-container.component.css']
})
export class CvContainerComponent {
  @Input("cvList") cvList!: CvModel[]
  selectedCv?:CvModel

  changeSelected(id:number){
    this.selectedCv = this.cvList?.find((cv)=>cv.id==id)
  }
}
