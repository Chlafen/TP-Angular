import { Person } from '../../models/person.model';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input-carte',
  templateUrl: './input-carte.component.html',
  styleUrls: ['./input-carte.component.css']
})
export class InputCarteComponent {
  person = new Person()

  @Output() onPersonChanged = new EventEmitter<Person>()

  emitPersonChange(e:any){
    this.onPersonChanged.emit(this.person)
  }
}
