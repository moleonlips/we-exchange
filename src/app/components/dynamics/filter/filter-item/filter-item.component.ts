import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.css']
})
export class FilterItemComponent implements OnInit {

  constructor(
    private activated: ActivatedRoute,
    private router: Router,
    private service: SharedService
  ) { }

  baseUrl: string = 'https://localhost:44339/Photos/Products/'

  urlResting = this.router.url.split('/')

  listPrd: Product[] = []

  ngOnInit(): void {
    this.service.getProducts().subscribe((list: Product[]) => {
      this.listPrd = list.filter((item: Product) => {
        return this.urlResting[2] === 'cho-thue' ? item.tranzaction === 'Cho thuê' : item.tranzaction === 'Cần bán';
      })

    })
  }

  viewMode = true;

  defaultOrder = 'Giá thấp trước'
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
  sortBy(event: any) {
    //lay out handle
    let orderitem = event.target.textContent
    this.defaultOrder = orderitem
    //end layout handle

    switch (orderitem) {
      case 'Giá thấp trước':
        this.listPrd = this.listPrd.sort((a: Product, b: Product) => {
          return a.ppmm > b.ppmm ? 1 : -1;
        })
        break;

      case 'Tin mới trước':
        this.listPrd = this.listPrd.sort((a: Product, b: Product) => {
          return a.postOn < b.postOn ? 1 : -1;
        })
        break;

      case 'Ngẫu nhiên':
        this.listPrd = this.shuffle(this.listPrd)
        break;

      default:
        this.listPrd = this.listPrd.sort((a: Product, b: Product) => {
          return a.postOn < b.postOn ? 1 : -1;
        })
        break;
    }
  }



  shuffle(array: any[]) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}
