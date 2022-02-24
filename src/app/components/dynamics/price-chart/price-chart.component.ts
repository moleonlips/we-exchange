import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-chart',
  templateUrl: './price-chart.component.html',
  styleUrls: ['./price-chart.component.css']
})
export class PriceChartComponent implements OnInit {

  constructor() { }

  thisPage: string = 'Tham khảo giá'
  thisMonth: Number = new Date().getMonth() + 1;
  thisYear: Number = new Date().getFullYear();

  locations: any = [
    "Quận 1",
    "Quận 2 - TP Thủ Đức",
    "Quận 3",
    "Quận 4",
    "Quận 5",
    "Quận 6",
    "Quận 7",
    "Quận 8",
    "Quận 9 - TP Thủ Đức",
    "Quận 10",
    "Quận 11",
    "Quận 12",
    "Quận Bình Tân",
    "Quận Bình Thạnh",
    "Quận Gò Vấp",
    "Quận Thủ Nhuận",
    "Quận Tân Bình",
    "Quận Tân Phú",
    "Quận Thủ Đức - TP Thủ Đức",
    "Huyện Bình Chánh",
    "Huyện Cần Giờ",
    "Huyện Củ Chi",
    "Huyện Hóc Môn",
    "Huyện Nhà Bè"
  ]

  ngOnInit(): void {

  }

}
