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
  private static defaultColor = "white"
  color:String = "white" // two way binding
  rainbow:String = "white"
  timeout: any;

  constructor() {
    let hsl = 0;
    this.timeout = setInterval(() => {
      this.rainbow =  `hsl(${hsl}, 100%, 50%)`;
      hsl = (hsl + 1) % 360;
    }, 10)
  }

  onChangeColor() {
    this.color =  ColorComponent.defaultColor
  }

  onColorValid(){
    clearInterval(this.timeout)
  }

  ngOnDestroy(){
    clearInterval(this.timeout)
  }
}
