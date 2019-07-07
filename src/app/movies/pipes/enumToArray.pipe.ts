import {Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumToArray',
  pure: true
})
export class EnumToArrayPipe implements PipeTransform {
  transform(data: object) {
    const keys = Object.keys(data);
    return keys;
  }
}
