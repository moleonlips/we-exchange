import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  frmChatting: FormGroup = new FormGroup({
    content: this.fb.control('', Validators.required)
  })

  messages: any[] = []
  
  isOpened: boolean = false
  
  lat = 20.899678016373528;
  lng = 105.92672007803499;
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
    this.messages.sort((a:any, b:any) => {
      return a.id < b.id? a.id - b.id: b.id - a.id;
    })
  }

  onSendMessage(value: any) {
    if(Boolean(value.content)) {
      let newMess = {
        id: 1,
        auth: true,
        content: `${value.content}`,
        date: new Date()
      }
      
      this.messages.unshift(newMess)
      this.frmChatting.reset();
    }
  }

  quickChat(event: any) {
    this.isOpened = true;
    let newMess:any
    if(this.messages.length > 0) {
      newMess = {
        id: this.messages.length,
        auth: true,
        content: `${event.target.textContent}`,
        date: new Date()
      }
    }   
    else {
      newMess = {
        id: 1,
        auth: true,
        content: `${event.target.textContent}`,
        date: new Date()
      }
    }
    this.messages.unshift(newMess)
    
    event.target.setAttribute("style", "display: none");
  }

  onCloseBoxChat(){
    this.isOpened = false
  }

  onChat(){
    this.isOpened = true
  }

}