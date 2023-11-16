import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})

export class ColorComponent {

  private colorList: String[] = [
    'red','green', 'blue', 'yellow', "white"
  ];
  private static defaultColor = "white"
  color:String = "white"

  onChangeColor() {
    this.color =  ColorComponent.defaultColor
  }
  onKey(event: any){
    const inputVal:String = event.target.value.toLowerCase()

    if(this.colorList.includes(inputVal)){
      this.color = inputVal
    }
  }
}
