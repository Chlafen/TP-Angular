import { Component } from '@angular/core';
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
    filter: CvFilterName = new CvFilterName()
    query: string = ""
    serviceFilter: Observable<CvFilterModel> = this.cvService.filter$
    constructor(
      private cvService: CvService
    ) { 
      this.serviceFilter.subscribe((filter)=>{
        if(filter.label != this.filter.label){
          this.query = ""
        }
      })
    }
  
    filterByName() {
      this.filter.query = this.query
      this.cvService.setFilter(this.filter)
    }
}
