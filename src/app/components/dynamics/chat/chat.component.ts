import { Component, OnInit } from '@angular/core';
import { Messages } from 'src/app/models/messages.model';
import { Product } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { SharedService } from 'src/app/services/shared/shared.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(
    private service: SharedService
  ) { }

  currentUser = JSON.parse(localStorage.getItem('currentUser')!)

  filterChat = 'Tất cả';

  productWasMentioned = new Set();

  baseUrl = 'https://localhost:44339/Photos/Products/';

  listCompositeObject: any[] = []
  
  mlist!: Messages[]

  ngOnInit(): void {
    this.fnLoadData(this.filterChat)
  }


  fnLoadData(optionn: string) {
    // lấy ra danh sách mã sản phẩm được currentUser quan tâm
    this.service.getMessages().subscribe((data: Messages[]) => {
      let x = data.filter((m: Messages) => {
        return optionn === 'Tất cả'? m.senderID === this.currentUser.id || m.recipientID === this.currentUser.id:
        (optionn === 'Tôi bán'? m.recipientID === this.currentUser.id: m.senderID === this.currentUser.id)
      })
      // lấy ra các mã sản phẩm được nhắc đến trong những tin nhắn đó
      
      
      x.map((m: Messages) => m.productID)
      // distincting
      .forEach((item: number) => {
        this.productWasMentioned.add(item)
      })

      Array(...this.productWasMentioned).forEach(item => {
        this.service.getProductById(Number(item)).subscribe((data: Product) => {
          this.listCompositeObject = [...this.listCompositeObject, data]
        })
      })
  
      console.log(x);
    })
  }

  onfilterChat(item: string) {
    this.filterChat = item;
    this.fnLoadData(item)
  }

}
