import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listForSale: Product[] = []
  listToRent: Product[] = []
  listForU: Product[] = []
  baseUrl = 'https://localhost:44339/Photos/Products/';
  currentUser = JSON.parse(localStorage.getItem('currentUser')!)
  
  constructor(
    private service: SharedService,
  ) { }

  ngOnInit(): void {
    this.onFilterListForSale(5);
    this.onFilterListToRent(5);
    this.onFilterForU(5);
  }

  onFilterListForSale(quantity: number) {
    this.service.getProducts().subscribe((data: Product[]) => {
      
      data = this.shuffle(data)
      
      let rs = data.filter((prd: Product) => {
        return Boolean(this.currentUser)? prd.tranzaction === 'Cần bán' && prd.userID !== this.currentUser.id: prd.tranzaction === 'Cần bán';
      })

      this.listForSale = rs.slice(0, quantity);
    })
  }

  onFilterListToRent(quantity: number) {
    this.service.getProducts().subscribe((data: Product[]) => {
      
      data = this.shuffle(data)

      let rs = data.filter((prd: Product) => {
        return Boolean(this.currentUser)? prd.tranzaction === 'Cho thuê' && prd.userID !== this.currentUser.id: prd.tranzaction === 'Cho thuê';
      })
      this.listToRent = rs.slice(0, quantity);
    })
  }

  onFilterForU(quantity: number) {
    this.service.getProducts().subscribe((data: Product[]) => {
      let rs = []
      data = this.shuffle(data)
      
      if(Boolean(this.currentUser)){
        rs = data.filter((prd: Product) => {
          return prd.city === this.currentUser.city && prd.userID !== this.currentUser.id
        })
      }
      else {
        rs = data.sort((a: Product, b: Product) => {
          return (a.ppmm)/(a.size) > (b.ppmm)/(b.size)? 1: 0;
        })
      }

      this.listForU = rs.slice(0 , quantity)
    })
  }


  shuffle(array: any[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] 
      = 
      [array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
}
