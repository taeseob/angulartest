import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string): any {
    if (!!value) {
      return value + '님, 안녕하세요!';
    }
    return;
  }

}
