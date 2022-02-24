import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitString'
})
export class LimitStringPipe implements PipeTransform {

  transform(value: string, limit: number) {
    return value.length < limit? value: value.substring(0, limit - 3) + '...';
  }

}
