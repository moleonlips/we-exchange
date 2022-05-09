import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class SocketService {

	number!: Subject<number>

	constructor(private socket: Socket) { }

	emitInfo(info: any) {
		this.socket.emit("iamin", info);
	}

	// send message
	onCompleteSend() {
		this.socket.on("mess-sending", (content: string) => {
			
		})
	}
}