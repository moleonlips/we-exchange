import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { Provinces } from 'src/app/models/provinces.model';
import { SharedService } from 'src/app/services/shared/shared.service';

import { ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';


@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit {

  indexes: number[] = [1.2, 0.963, 0.964, 0.965, 1, 1.05, 1.08, 1.01, 1.02, 1.05, 1.08, 1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.01, 1.02, 1.03, 1.04];

  // chart's configurations
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  }

  loading = false;

  // set of 12 month lately
  barChartLabels: Label[] = []

  // type of chart, variable
  type: ChartType = 'bar'

  // type of chart
  barChartType: ChartType = this.type;

  // 
  barChartLegend = true;

  // màu các thành phần của biểu đồ
  chartColors: Color[] = [
    {
      backgroundColor: ["#F4862090", "#F4862090", "#F4862090", "#F4862090", "#F4862090", "#F4862090", "#F4862090", "#F4862090", "#F4862090", "#F4862090", "#F4862090", "#F48620"]
    },
    {
      backgroundColor: ["#C0232390", "#C0232390", "#C0232390", "#C0232390", "#C0232390", "#C0232390", "#C0232390", "#C0232390", "#C0232390", "#C0232390", "#C0232390", "#C02323"]
    }
  ];

  // defind init data
  barChartData = [
    { data: this.renderNumber(0, 0, 0), label: '' },
  ];

  
  renderNumber(lth: number, fromm: number, to: number) {
    let arr: number[] = [];
    // thực hiện thêm phần tử cho đến khi length == lth
    while (arr.length < lth) {
      // random giá đất trung bình của tháng đầu tiên
      if(arr.length === 0) {
        let numb = Math.ceil(Math.random() * 100);
        // thêm giá trị random được vào mảng nếu nó nằm trong khoảng giá trị cho phép
        // cụ thể ở đây là FROMM & TO
        if (numb > fromm && numb < to) {
          arr.push(numb)
        }
      }
      // giá đất trung bình của tháng t2 trở đi, biến đổi dựa trên tháng thứ 1 và chỉ số (random theo config có sẵn)
      else {
        // mỗi tháng sẽ có 1 chỉ số ngấu nhiên. tạo sự tự nhiên cho dữ liệu mô phỏng
        let index = this.indexes[Math.floor(Math.random()*this.indexes.length)];
        arr.push(Math.round((arr[arr.length - 1] * index) * 100) / 100)
      }
    }
    arr.push(0, Math.max(...arr) * 1.5)
    return arr;
  }

  listProductResult!: Product[]

  crMonth = new Date().getMonth();
  crYear = new Date().getFullYear();
  setOf12: Label[] = []

  get12LatestMonth() {
    while (this.setOf12.length < 12) {
      if (this.crMonth > 0) {
        this.setOf12.unshift(this.crMonth + '/' + this.crYear)
      }
      else {
        this.crMonth = 12
        this.setOf12.unshift(this.crMonth + '/' + --this.crYear)
      }
      this.crMonth--
    }
    return this.setOf12
  }

  constructor(
    private shared_s: SharedService,
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

  districtSelected = '';
  categorySelected = '';


  analyzeBtn = false;

  ngOnInit(): void {
    this.shared_s.getAllDistricts().subscribe(data => {
      this.districtsOfHCM = data.filter(d => {
        return d.provinceID === 2;
      })

      this.districtsOfHanoi = data.filter(d => {
        return d.provinceID === 1;
      })
    })

    this.shared_s.getProvince().subscribe((data: Provinces[]) => {
      this.provinces = data;
    })

    this.shared_s.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  isReadyfilterData = false;

  provinceChange(e: any) {
    this.districts = []
    this.shared_s.getDistricts(e.target.value).subscribe(data => {
      this.districts = data;

      this.analyzeBtn = true;
    })
  }

  analyzeNow() {
    this.loading = true;
    setTimeout(() => {
      this.isReadyfilterData = true;

      this.barChartLabels = this.get12LatestMonth();
  
      this.barChartData = [
        { data: this.renderNumber(12, 34, 87), label: this.categorySelected + ' - ' + this.districtSelected },
      ];  
      this.loading = false;
    }, 3000);
  }

  onAnalytics(district: string) {
    this.loading = true;
    document.getElementById("anchor")!.scrollIntoView();
    setTimeout(() => {
      this.isReadyfilterData = true;

      this.barChartLabels = this.get12LatestMonth();
  
      this.barChartData = [
        { data: this.renderNumber(12, 34, 87), label: this.categorySelected + ' - ' + district },
      ];
      this.loading = false;  
    }, 3000);
    
  }
}
