import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CvFilterModel } from 'src/app/domain/models/cv-filter.model';
import { CvFilterJunior } from 'src/app/domain/models/filters/cv-filter-junior.filter';
import { CvFilterName } from 'src/app/domain/models/filters/cv-filter-name.filter';
import { CvFilterSenior } from 'src/app/domain/models/filters/cv-filter-senior.filter';
import { CvService } from 'src/app/services/cv.service';

@Component({
  selector: 'app-cv-age-tabs',
  templateUrl: './cv-age-tabs.component.html',
  styleUrls: ['./cv-age-tabs.component.css']
})
export class CvAgeTabsComponent {
  filters: CvFilterModel[] = []  
  selectedFilter?: CvFilterModel
  filter$: Observable<CvFilterModel> = this.cvService.filter$
  constructor(
    private cvService: CvService
  ) { 
    let allFilter = new CvFilterName()
    allFilter.label = "All"
    allFilter.query = ""
    this.filters.push(allFilter)
    this.filters.push(new CvFilterJunior())
    this.filters.push(new CvFilterSenior())
    this.selectedFilter = this.filters[0]

    this.filter$.pipe(
      map((filter)=>this.selectedFilter?.label == filter.label)
    ).subscribe((isSelected)=>{
      if(!isSelected){
        this.selectedFilter = this.filters[0]
      }
    });
  }

  filterByAge(filter: CvFilterModel) {
    this.selectedFilter = filter
    this.cvService.setFilter(filter)
  }

}
