import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CvModel } from 'src/app/domain/models/cv.model';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent {
  @Input("cv") cv!:CvModel
  @Output() onSelected:EventEmitter<number> = new EventEmitter<number>()

  emitCvSelected(){

    this.onSelected.emit(this.cv.id)
  }
}
