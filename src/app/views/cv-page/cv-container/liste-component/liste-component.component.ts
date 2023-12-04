import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CvFilterModel } from 'src/app/domain/models/cv-filter.model';
import { CvModel } from 'src/app/domain/models/cv.model';

@Component({
  selector: 'app-liste-component',
  templateUrl: './liste-component.component.html',
  styleUrls: ['./liste-component.component.css']
})
export class ListeComponentComponent implements OnInit{
  selectedId:number = -1
  @Input("listCvs") listCvs!: CvModel[]
  filteredCvs: CvModel[] = []
  @Output() onSelected:EventEmitter<number> = new EventEmitter<number>()
  
  ngOnInit(){
    this.filteredCvs = this.listCvs
  }
  
  changeSelected(id:number){
    this.selectedId = id
    this.onSelected.emit(id)
  }
  
  onFilterChanged(filter: CvFilterModel) {
    this.filteredCvs = filter.filter(this.listCvs)
  }
}
