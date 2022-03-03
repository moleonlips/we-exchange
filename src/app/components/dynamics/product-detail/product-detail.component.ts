import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  
  lat = 20.9259157;
  lng = 105.9327416;
  mapType = "satelite"

  imgs = [
    "detail1.jpg",
    "detail2.jpg",
    "detail3.jpg",
    "detail4.jpg",
    "detail5.jpg",
    "detail6.jpg",
    "detail1.jpg",
    "detail2.jpg",
    "detail3.jpg",
    "detail4.jpg",
    "detail5.jpg",
    "detail6.jpg",
  ]

  ngOnInit(): void {
  }

}
