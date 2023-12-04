import { Component, EventEmitter, Input, Output } from '@angular/core';
import { map } from 'rxjs';
import { CvFilterModel } from 'src/app/domain/models/cv-filter.model';
import { CvFilterJunior } from 'src/app/domain/models/filters/cv-filter-junior.filter';
import { CvFilterName } from 'src/app/domain/models/filters/cv-filter-name.filter';
import { CvFilterSenior } from 'src/app/domain/models/filters/cv-filter-senior.filter';

@Component({
  selector: 'app-cv-age-tabs',
  templateUrl: './cv-age-tabs.component.html',
  styleUrls: ['./cv-age-tabs.component.css']
})
export class CvAgeTabsComponent {
  filters: CvFilterModel[] = []  
  selectedFilter?: CvFilterModel
  @Output("filter")
  filterEvent = new EventEmitter<CvFilterModel>()
  constructor(
  ) { 
    let allFilter = new CvFilterName()
    allFilter.label = "All"
    allFilter.query = ""
    this.filters.push(allFilter)
    this.filters.push(new CvFilterJunior())
    this.filters.push(new CvFilterSenior())
    this.selectedFilter = this.filters[0]
    
  }

  filterByAge(filter: CvFilterModel) {
    this.selectedFilter = filter
    this.filterEvent.emit(filter)
  }

}
