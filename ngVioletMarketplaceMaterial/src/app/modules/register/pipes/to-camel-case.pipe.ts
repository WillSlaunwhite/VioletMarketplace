import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCamelCase'
})
export class ToCamelCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/(?:^\w[A-Z]|\b\w|\s+)/g, (match, index) => {
      if (+match === 0) return '';
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
}
