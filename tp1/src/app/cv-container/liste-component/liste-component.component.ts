import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from 'src/app/models/cv.model';

@Component({
  selector: 'app-liste-component',
  templateUrl: './liste-component.component.html',
  styleUrls: ['./liste-component.component.css']
})
export class ListeComponentComponent {
  selectedId:number=1
  @Input("listCvs") listCvs!: Cv[]
  @Output() onSelected:EventEmitter<number> = new EventEmitter<number>()
  changeSelected(id:number){
    this.selectedId = id
    this.onSelected.emit(id)
  }

}
