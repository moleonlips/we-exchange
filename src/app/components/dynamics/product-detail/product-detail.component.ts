import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Messages } from 'src/app/models/messages.model';
import { Pictures } from 'src/app/models/pictures.model';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {

  showFlag: boolean = false;
  selectedImageIndex: number = -1;

  imageObject: Array<object> = [];

  constructor(
    private fb: FormBuilder,
    private activated: ActivatedRoute,
    private service: SharedService,
  ) { }

  showLightbox(index: number) {
    this.selectedImageIndex = index;
    this.showFlag = true;
  }

  closeEventHandler() {
    this.showFlag = false;
    this.selectedImageIndex = -1;
  }

  frmChatting: FormGroup = new FormGroup({
    content: this.fb.control('', Validators.required)
  })

  currentUser = JSON.parse(localStorage.getItem('currentUser')!)

  isMine: boolean = false

  messages: Messages[] = []
  
  isOpened: boolean = false

  baseUrl = 'https://localhost:44339/Photos/Products/';
  
  mapType = "satelite"

  imgs:Pictures[] = []

  listOfRecommendations!: Product[]

  currentPrd!: Product
  author!: User
  step = 5
  originQtt = this.step

  ngOnInit(): void {
    this.messages.sort((a:any, b:any) => {
      return a.id < b.id? a.id - b.id: b.id - a.id;
    })

    this.getPrdDetail();
    this.getRecommendProducts(this.originQtt);
  }

  getRecommendProducts(quantity: number){
    let theSameList = []
    this.service.getProducts().subscribe((data: Product[]) => {
      
      // in case current product's transaction is rent
      if(this.currentPrd.tranzaction === 'Cho thuê'){
        theSameList = data.filter((prd: Product) => {
          return (
            // the distance between them must be less than 8% current item's size
            (Math.abs(prd.size - this.currentPrd.size) < (this.currentPrd.size * 0.08))
            // they must be in the same city
            && (prd.city == this.currentPrd.city)
            // Similar listings haven't to contain current item
            && (prd.id !== this.currentPrd.id)
            && (prd.tranzaction === "Cho thuê")
            && (prd.type === this.currentPrd.type)
          )
        })
        this.listOfRecommendations = theSameList.slice(0, quantity)
      }

      // in case current item's transaction is sell
      else {
        theSameList = data.filter((prd: Product) => {
          return (
            // the distance between them must less than 25% current item's value
            (Math.abs(this.currentPrd.ppmm - prd.ppmm) < (this.currentPrd.ppmm * 0.25)
            || this.currentPrd.type === prd.type)
            // Similar listings haven't to contain current item
            && (prd.id !== this.currentPrd.id)
            && (prd.tranzaction === "Cần bán")
          )
        })
        this.listOfRecommendations = theSameList.slice(0, quantity)
      }
    })
  }

  lazyFake(){
    this.originQtt += this.step
    this.getRecommendProducts(this.originQtt)
  }

  getPrdDetail(){
    this.activated.params.subscribe(param => {
      // get the id of products through the URL
      let prdID = param['param']

      this.service.getProductById(prdID).subscribe((prdInfo: Product) => {
        if(prdInfo){
          this.currentPrd = prdInfo
          
          this.getAuthorOfPrd(this.currentPrd.userID)
  
          this.getImgsOfPrd(prdID)
        }
      })
    })
  }

  getAuthorOfPrd(userID: number) {
    this.service.getUserByID(userID).subscribe((data: User) => {
      if(data){
        this.author = data;
      }
    })
  }

  getImgsOfPrd(prdID: number) {
    this.service.getImages().subscribe((data: Pictures[]) => {
      
      if(data){
        this.imgs = data.filter((img: Pictures) => {
          return img.productID == prdID
        })
      
        setTimeout(() => {
          this.imageObject = this.imgs.map((img: Pictures) => {
            return {
              image: `${this.baseUrl}${img.url}`
            }
          })  
        }, 0);
        
      }
    })
  }

  onSendMessage(value: any) {
    if(Boolean(value.content)) {
      let newMess = {
        id: 0,
        contents: `${value.content}`,
        recipientID: this.currentPrd.userID,
        senderID: this.currentUser.id,
        seen: false,
        timesend: new Date(),
        productID: this.currentPrd.id
      }

      this.service.sendMessage(newMess).subscribe(() => {
        this.messages.unshift(newMess)
        this.frmChatting.reset();
      })
      
    }
  }

  quickChat(event: any) {
    this.isOpened = true;
    let newMess: Messages
    if(this.messages.length > 0) {
      newMess = {
        id: 0,
        contents: event.target.textContent,
        recipientID: this.currentPrd.userID,
        senderID: this.currentUser.id,
        seen: false,
        timesend: new Date(),
        productID: this.currentPrd.id
      }
    }   
    else {
      newMess = {
        id: 0,
        contents: event.target.textContent,
        recipientID: this.currentPrd.userID,
        senderID: this.currentUser.id,
        seen: false,
        timesend: new Date(),
        productID: this.currentPrd.id
      }
    }

    this.service.sendMessage(newMess).subscribe(() => {
      this.messages.unshift(newMess)
      this.frmChatting.reset();
      event.target.setAttribute("style", "display: none");
    })
    
  }


  onCloseBoxChat(){
    this.isOpened = false
  }

  onChat(){
    this.isOpened = true
  }

}