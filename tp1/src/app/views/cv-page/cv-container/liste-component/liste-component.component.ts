import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CvModel } from 'src/app/domain/models/cv.model';

@Component({
  selector: 'app-liste-component',
  templateUrl: './liste-component.component.html',
  styleUrls: ['./liste-component.component.css']
})
export class ListeComponentComponent {
  selectedId:number = -1
  @Input("listCvs") listCvs!: CvModel[]
  @Output() onSelected:EventEmitter<number> = new EventEmitter<number>()
  changeSelected(id:number){
    this.selectedId = id
    this.onSelected.emit(id)
  }

}
