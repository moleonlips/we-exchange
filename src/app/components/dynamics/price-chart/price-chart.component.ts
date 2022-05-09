import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Provinces } from 'src/app/models/provinces.model';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit {

  constructor(
    private service: SharedService,
  ) { }

  provinceSelected = 0;

  thisPage: string = 'Tham khảo giá'
  thisMonth: Number = new Date().getMonth() + 1;
  thisYear: Number = new Date().getFullYear();

  districtsOfHCM: any = []
  districtsOfHanoi: any = []

  provinces: any = [];
  districts: any = [];
  categories: any = [];

  analyzeBtn = false;

  ngOnInit(): void {
    this.service.getAllDistricts().subscribe(data => {
      this.districtsOfHCM = data.filter(d => {
        return d.provinceID === 2;
      })

      this.districtsOfHanoi = data.filter(d => {
        return d.provinceID === 1;
      })
    })

    this.service.getProvince().subscribe((data:Provinces[]) => {
      this.provinces = data;
    })

    this.service.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  provinceChange(e: any) {
    this.districts = []
    this.service.getDistricts(e.target.value).subscribe(data => {
      this.districts = data;

      this.analyzeBtn = true;
    })
  }

  analyzeNow() {
    this.service.getProducts().subscribe((data: Product[]) => {
      console.log([document.querySelector("#tranzaction")].values);
      
      
      // console.log(data.filter(p => {
      //   return p.tranzaction = document.querySelector("#tranzaction")!;
      // }));
      
    })
  }

}
