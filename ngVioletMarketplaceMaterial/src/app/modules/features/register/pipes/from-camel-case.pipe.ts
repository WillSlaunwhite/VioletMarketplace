import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromCamelCase'
})
export class FromCamelCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/([A-Z])/g, ' $1').trim().toLowerCase();
  }
}
