import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CvFilterModel } from 'src/app/domain/models/cv-filter.model';
import { CvFilterName } from 'src/app/domain/models/filters/cv-filter-name.filter';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
    @Output("filter")
    filterChanged: EventEmitter<CvFilterModel> = new EventEmitter<CvFilterModel>()

    query: string = ""

    filter: CvFilterName = new CvFilterName()
    constructor(
    ) { }
  
    filterByName() {
      this.filter.query = this.query
      this.filterChanged.emit(this.filter)
    }

    clearQuery() {
      this.query = ""
      this.filterByName()
    }
}
