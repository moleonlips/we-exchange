import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }

  messages = [
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
    {
      id: 1,
      recipientID: Math.ceil(Math.random() * 5),
      senderID:  Math.ceil(Math.random() * 5),
      content: 'hello!',
      productID: 1
    },
  ]

  contactList:any = []
  recipientIDList:any[] = []
  set = new Set();

  ngOnInit(): void {
    console.log(this.messages);
    

    this.recipientIDList = this.messages.map((a:any) => {
      return a.recipientID
    })

    this.contactList = new Set(this.recipientIDList);
    console.log(this.contactList);
  }

}
