import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  

  constructor(
    private shared: SharedService,
    private activated: ActivatedRoute,
  ) { }

  baseUrl = 'https://localhost:44339/Photos/Products/';
  isFollowing = false;

  thisPage: string = '';

  crtUser = JSON.parse(localStorage.getItem('currentUser')!);
  usr!:User;
  isMyProfile: boolean = false;
  sortBy = ''
  productList!: Product[]

  ngOnInit(): void {

    this.activated.params.subscribe(param => {
      if (param) {
        let userID = Number(param['param']);
        // check are they the same people?
        this.isMyProfile = this.crtUser.id === userID;

        // get fullname of user who is being viewed detail
        this.shared.getUserByID(userID).subscribe((usr: User) => {
          this.usr = usr;
          this.thisPage = `Trang cá nhân - ${usr.fullname}`;
        })

        // get list of products are posted by that user
        this.shared.getProductByUID(userID).subscribe((data: Product[]) => {
          this.productList = data;          
        })
      }
    })    
  }

  onFollow() {
    this.isFollowing = !this.isFollowing;
  }

  onSort() {
    switch (this.sortBy) {
      case 'upping':
        this.productList = this.productList.sort((a: Product, b: Product) =>{
          return a.ppmm > b.ppmm? 1: -1;
        })
        break;
    
      case 'downing':
        this.productList = this.productList.sort((a: Product, b: Product) =>{
          return a.ppmm < b.ppmm? 1: -1;
        })
        break;
    
      case 'newest':
        this.productList = this.productList.sort((a: Product, b: Product) =>{
          return a.postOn < b.postOn? 1: -1;
        })
        break;
    
      case 'tranzaction':
        this.productList = this.productList.sort((a: Product, b: Product) =>{
          return a.tranzaction > b.tranzaction? 1: -1;
        })
        break;
    
      default:
        this.productList = this.productList.sort((a: Product, b: Product) =>{
          return a.ppmm > b.ppmm? 1: -1;
        })
        break;
    }
  }
}
