import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private webSocket: WebSocket;

  constructor() {
    this.webSocket = new WebSocket('ws://localhost:3000');
  }

  public connect(): Observable<any> {
    return new Observable(observer => {
      this.webSocket.onmessage = (event) => observer.next(event.data);
      this.webSocket.onerror = (event) => observer.error(event);
      this.webSocket.onclose = () => observer.complete();
    });
  }

  public sendMessage(message: string): void {
    this.webSocket.send(message);
  }
}

/*
 public messages: string[] = [];
  public message: string = '';

  constructor(private webSocketService: WebSocketService) { }

  ngOnInit(): void {
    this.webSocketService.connect().subscribe(
      (message) => {
        this.messages.push(message);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  sendMessage(): void {
    this.webSocketService.sendMessage(this.message);
    this.message = '';
  }

*/
