import { Component, OnInit } from '@angular/core';
import { SocketService } from './services/socket/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(private socketService: SocketService) { }

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser')!)
    if(currentUser) {
      this.socketService.emitInfo(currentUser.fullname)
    }
  }

  title = 'we-exchange';
}
