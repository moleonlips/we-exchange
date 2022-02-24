import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-post-up',
  templateUrl: './post-up.component.html',
  styleUrls: ['./post-up.component.css']
})
export class PostUpComponent implements OnInit {

  selectedFile:any;
  
  constructor(private service: SharedService) { }

  baseUrlImg = 'https://localhost:44353/Photos/Product/News/';

  arrImg:any = []

  trangthai: string = ''
  
  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files;
    this.service.onUpLoad(this.selectedFile).subscribe((data:any) => {
      // this.arrImg.push(data)
      let urls = data.split('@#$nb32bh@#$')
      let arr = urls.slice(1, urls.length)
      this.arrImg = this.arrImg.concat(arr)
    })
  }

  // get filename to put in database
  getfilename() {
    alert(this.arrImg.length)
    this.arrImg.forEach((arr:any) => {
      alert(arr)
    })

    // get value of radio button
    let x = document.getElementsByName('tinh-trang');
    x.forEach((a:any) => {
      if(a.checked === true){
        this.trangthai = a.value;
      }
    })

    alert(this.trangthai)
  }

  deleteImage(i: number) {
    this.arrImg.splice(i, 1)
  }
}
