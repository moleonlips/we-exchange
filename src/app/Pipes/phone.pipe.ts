import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): string {
    let arr = value.split('');
    arr.forEach((item: string, i: number, arr) => {
      if([3,6].includes(i)) {
        arr[i] += '.';
      }
    })

    return arr.join('');
  }

}
