import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})

export class ColorComponent {

  private colorList: String[] = [
    'red','green', 'blue', 'yellow', "white", "black", "pink", "purple", "orange", "brown", "grey", "cyan", "magenta"
  ];
  color:String = "" // two way binding
  rainbow:String = ""
  timeout: any;

  constructor() {
    let hsl = 0;
    this.timeout = setInterval(() => {
      this.rainbow =  `hsl(${hsl}, 100%, 50%)`;
      hsl = (hsl + 1) % 360;
    }, 10)
  }

  onChangeColor() {
    this.color =  ""
  }

  get isColorValid () {
    return this.colorList.includes(this.color.toLowerCase())
  } 

  ngOnDestroy(){
    clearInterval(this.timeout)
  }
}
