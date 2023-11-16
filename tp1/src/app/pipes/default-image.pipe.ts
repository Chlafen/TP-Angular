import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: String): String {
    if(value == "/assets/images/" || value == "")
      return '/assets/images/1.png';
    return value;
  }

}
