import { Component, Input } from '@angular/core';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})


export class CarteVisiteComponent {
  @Input("person") person!: Person;
}

