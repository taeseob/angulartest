import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, search: string, newValue: string): any {
    return value.replace(search, newValue);
  }

}
