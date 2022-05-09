import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-detail-chat',
  templateUrl: './detail-chat.component.html',
  styleUrls: ['./detail-chat.component.css']
})
export class DetailChatComponent implements OnInit {

  constructor() { }

  messContent = ''
  socket: any

  ngOnInit(): void {
    this.socket = io.io(`localhost:3000`)
  }

  sendMessage() {
    console.log(this.messContent);
    this.messContent = ''
    this.socket.emit('mess-sending', this.messContent)
  }
  
}
