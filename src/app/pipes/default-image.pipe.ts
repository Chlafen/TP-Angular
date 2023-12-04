import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage',
})
export class DefaultImagePipe implements PipeTransform {
  transform(value: String): String {
    console.log('------------------', value);

    if (value.includes('http')) {
      return 'http' + value.split('http')[1];
    }

    if (value == '/assets/images/' || value == '')
      return '/assets/images/default.png';
    return value;
  }
}
