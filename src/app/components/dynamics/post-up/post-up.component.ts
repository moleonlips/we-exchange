import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Categories } from 'src/app/models/categories.model';
import { Districts } from 'src/app/models/districts.model';
import { Provinces } from 'src/app/models/provinces.model';
import { SharedService } from 'src/app/services/shared/shared.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-post-up',
  templateUrl: './post-up.component.html',
  styleUrls: ['./post-up.component.css']
})
export class PostUpComponent implements OnInit {

  selectedFile: any;

  locations: any[] = [
    {
      lat: 20.925979460573999,
      lng: 105.93272582222268
    },
    {
      lat: 20.947937174731777,
      lng: 105.93509566152306
    },
    {
      lat: 20.94637885234892,
      lng: 105.93194271997531
    },
    {
      lat: 20.94740539371383,
      lng: 105.92997287234867
    },
    {
      lat: 20.94700622173476,
      lng: 105.92851517851355
    },
    {
      lat: 20.94867955579655,
      lng: 105.92721252408438
    },
    {
      lat: 20.951325997497182,
      lng: 105.92923398937651
    },
    {
      lat: 20.951853311810012,
      lng: 105.92958499429771
    },
    {
      lat: 20.95253831344484,
      lng: 105.93082007514776
    },
    {
      lat: 20.95325877559271,
      lng: 105.9299939161008
    },
    {
      lat: 20.953630184326954,
      lng: 105.928892276668
    },
    {
      lat: 20.953336444066075,
      lng: 105.92807671403526
    },
    {
      lat: 20.952544397399663,
      lng: 105.92758264429725
    },
    {
      lat: 20.952278182367618,
      lng: 105.92639819676111
    },
    {
      lat: 20.951928927706717,
      lng: 105.92579881010683
    },
    {
      lat: 20.923386729556398,
      lng: 105.9307610698367
    },
    {
      lat: 20.922318310789215,
      lng: 105.92344184956119
    },
    {
      lat: 20.920519322094737,
      lng: 105.92227838807906
    },
    {
      lat: 20.920320566170922,
      lng: 105.93897075630453
    },
    {
      lat: 20.922970352199155,
      lng: 105.9637813066059
    },
    {
      lat: 20.923560960642412,
      lng: 105.96497598696132
    },
    {
      lat: 20.924369645060796,
      lng: 105.96431435547971
    },
    {
      lat: 20.92506224768314,
      lng: 105.96420186561741
    },
    {
      lat: 20.926691700193402,
      lng: 105.96545706068665
    },
    {
      lat: 20.929902037947734,
      lng: 105.9665441725776
    },
    {
      lat: 20.93120248251388,
      lng: 105.96490408132941
    },
    {
      lat: 20.932616392250882,
      lng: 105.96009412185872
    },
    {
      lat: 20.9393236199448,
      lng: 106.02647150492204
    },
    {
      lat: 20.934798490515764,
      lng: 106.02042418404875
    },
    {
      lat: 20.931599232948212,
      lng: 106.02345865016548
    },
    {
      lat: 20.932274230634885,
      lng: 106.02574701949538
    },
    {
      lat: 20.85383486455193,
      lng: 106.6855738416119
    },
    {
      lat: 20.85649264185438,
      lng: 106.69041035734236
    },
    {
      lat: 20.85172731968966,
      lng: 106.69351833920878
    },
    {
      lat: 20.854956514654297,
      lng: 106.70416252991792
    },
    {
      lat: 20.856463092472413,
      lng: 106.70579960269967
    },
    {
      lat: 20.941806084419248,
      lng: 105.9370204929758
    },
    {
      lat: 20.94084465985185,
      lng: 105.93711131740201
    },
    {
      lat: 20.94171586592127,
      lng: 105.9389348075984
    },
    {
      lat: 20.926635405409986,
      lng: 105.92724287295127
    },
    {
      lat: 20.920814193378675,
      lng: 105.93130670745299
    },
    {
      lat: 21.03289495552344,
      lng: 105.81887122749576
    },
    {
      lat: 21.034814441756392,
      lng: 105.826885262279
    },
    {
      lat: 21.034042430084966,
      lng: 105.82763849943063
    },
    {
      lat: 21.046805492806094,
      lng: 105.8038511348908
    },
    {
      lat: 21.045365635028652,
      lng: 105.80698315157889
    },
    {
      lat: 21.054202085460197,
      lng: 105.79222431032248
    },
    {
      lat: 21.05286108138765,
      lng: 105.79593364435638
    },
    {
      lat: 21.05148719236279,
      lng: 105.88555712547662
    },

  ];

  categories!: Categories[]
  provinces!: Provinces[]
  districts!: Districts[]

  // declare location
  lat!: number;
  lng!: number;

  constructor(
    private service: SharedService,
    private fb: FormBuilder
  ) { }

  postForm!: FormGroup

  baseUrlImg = 'https://localhost:44339/Photos/Products/';

  arrImg: any = []

  loaiHinh: string = ''
  userID_L = JSON.parse(localStorage.getItem('currentUser')!).id;

  ngOnInit(): void {
    this.postForm = this.fb.group({
      id: this.fb.control(0),
      title: this.fb.control('', Validators.required),
      cateID: this.fb.control(null, Validators.required),
      tranzaction: this.fb.control('', Validators.required),
      city: this.fb.control('', Validators.required),
      district: this.fb.control('', Validators.required),
      ward: this.fb.control('', Validators.required),
      userID: this.fb.control(null, Validators.required),
      size: this.fb.control(null, Validators.required),
      width: this.fb.control(null, Validators.required),
      ppmm: this.fb.control(null, Validators.required),
      deposit: this.fb.control(null),
      balcony: this.fb.control('', Validators.required),
      interior: this.fb.control(''),
      description: this.fb.control('', Validators.required),
      status: this.fb.control('', Validators.required),
      block: this.fb.control(''),
      floor: this.fb.control(''),
      iscorner: this.fb.control(false),
      badroom: this.fb.control(null),
      toilet: this.fb.control(null),
      maindirect: this.fb.control(''),
      postOn: new Date(),
      type: this.fb.control(''),
      legality: this.fb.control('', Validators.required),
    })
    this.locationHandler()
    this.getHintData()
  }

  getHintData() {
    this.service.getCategories().subscribe(cate => {
      this.service.getProvince().subscribe(province => {
        if (cate && province) {
          this.categories = cate
          this.provinces = province
        }
      })
    })
  }

  provinceSelected(event: any) {
    let prvID = this.provinces.filter(a => {
      return a.name.trim() == event.target.value
    })[0].id

    this.service.getDistricts(prvID).subscribe((data: Districts[]) => {
      this.districts = data
    })
  }

  submit(postForm: any) {
    let rs = {
      ...postForm,
      ppmm: this.numberConvert(this.postForm.get('ppmm')?.value),
      deposit: this.numberConvert(this.postForm.get('deposit')?.value),
      longi: this.lng,
      lati: this.lat,
      userID: this.userID_L,
      thumbnail: this.arrImg[0],
      id: Math.random()
    }

    let upProductPromise = new Promise((resolve, reject) => {
      this.service.postProduct(rs).subscribe(() => {
        resolve(rs.id);
      })
    })

    upProductPromise
      .then((productID) => {
        this.arrImg.forEach((path: string, index: number) => {
          let picture = {
            id: 0,
            url: path,
            productID: Number(productID),
            isThumbnail: index == 0 ? true : false,
          }
          console.log(picture);

          this.service.postPictures(picture).subscribe(data => {
          })

        })
        
        alert('Đăng tin thành công!');
        document.location.reload();
      })
  }

  numberConvert(str: string) {
    if (str) {
      let rs = str.split(',');
      return Number(rs.join(''))
    }
    else {
      return null;
    }
  }

  locationHandler() {
    let x: number = Math.ceil(Math.random() * this.locations.length) - 1;
    this.lat = this.locations[x].lat;
    this.lng = this.locations[x].lng;
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files;
    this.service.onUpLoad(this.selectedFile).subscribe((data: any) => {
      // this.arrImg.push(data)
      if (Boolean(data)) {
        let urls = data.split('@#$nb32bh@#$')
        let arr = urls.slice(1, urls.length)
        this.arrImg = this.arrImg.concat(arr)
      }
    })
  }

  deleteImage(i: number) {
    this.arrImg.splice(i, 1)
  }

  onChooseLocation(event: any) {
    console.log([event]);
  }
}


///AIzaSyCWEwcMFHjwI-YCYcEoGVrgEdGcgbPX0sg