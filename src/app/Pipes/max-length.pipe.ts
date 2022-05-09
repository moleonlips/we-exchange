import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxLength'
})
export class MaxLengthPipe implements PipeTransform {

  transform(value: string, maxlength: number): string {
    return value.substring(0 , maxlength);
  }

}
