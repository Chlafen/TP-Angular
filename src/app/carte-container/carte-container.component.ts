import { Component } from '@angular/core';
import { Person } from '../models/person.model';

@Component({
  selector: 'app-carte-container',
  templateUrl: './carte-container.component.html',
  styleUrls: ['./carte-container.component.css']
})
export class CarteContainerComponent {
  person:Person = new Person()

  updatePerson(person:Person){
    this.person=person
  }
}
