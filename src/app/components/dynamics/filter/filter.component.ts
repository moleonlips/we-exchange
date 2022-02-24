import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  viewMode = true;

  thisPage: string = 'Filtering...'

  defaultOrder = 'Giá thấp trước'

  ngOnInit(): void {
  }

  changeViewMode() {
    this.viewMode = !this.viewMode
  }

  
  // change the active item filter
  activeFilter(event: any) {
    // layout handle
    let eles = document.querySelectorAll('.order-filter-item')
    eles.forEach(e => {
      e.classList.remove('active')
    })
    event.target.classList.add('active')
    // end layout handle
  }

  // select option to sort
  sortBy(event:any) {
    //lay out handle
    let orderitem = event.target.textContent
    this.defaultOrder = orderitem
    //end layout handle
  }

}
