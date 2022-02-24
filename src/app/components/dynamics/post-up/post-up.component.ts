import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-post-up',
  templateUrl: './post-up.component.html',
  styleUrls: ['./post-up.component.css']
})
export class PostUpComponent implements OnInit {

  selectedFile:any;
  
  constructor(
    private service: SharedService,
    private fb: FormBuilder
  ) { }

  postForm!: FormGroup

  baseUrlImg = 'https://localhost:44353/Photos/Product/News/';

  arrImg:any = []

  loaiHinh: string = ''
  
  ngOnInit(): void {
    this.postForm = this.fb.group({
      canGoc: this.fb.control(false),
      tinhTrang: this.fb.control(''),
      loaiHinh: this.fb.control(''),
      thueBan: this.fb.control(''),
      danhMuc: this.fb.control(''),
      tinhThanh: this.fb.control(''),
      quanHuyen: this.fb.control(''),
      xaPhuong: this.fb.control(''),
    })

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

    console.log(this.postForm.get('isCangoc')?.value);

    alert(this.arrImg.length)
    this.arrImg.forEach((arr:any) => {
      alert(arr)
    })

    // get value of radio button
    let x = document.getElementsByName('tinh-trang');
    x.forEach((a:any) => {
      if(a.checked === true){
        this.loaiHinh = a.value;
      }
    })

    alert(this.loaiHinh)

  }

  deleteImage(i: number) {
    this.arrImg.splice(i, 1)
  }

  submit(postForm: any){
    console.log(postForm);
  }
}
