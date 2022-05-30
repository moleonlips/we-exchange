import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleService {

  constructor() { }

  districtNCategory = new Subject<string>();

  onFilterPriceRange(filterData: string) {
    this.districtNCategory.next(filterData);
  }
}
