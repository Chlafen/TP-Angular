import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../../models/cv.model';

@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css']
})
export class ItemComponentComponent {
  @Input("cv") cv!:Cv
  @Output() onSelected:EventEmitter<number> = new EventEmitter<number>()

  emitCvSelected(){

    this.onSelected.emit(this.cv.id)
  }
}
