import { Component, OnInit } from '@angular/core';
import { FcmService } from '../fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FCM Angular App';

  constructor(private fcmService: FcmService) {}

  ngOnInit() {
    // Request permission to receive notifications
    this.fcmService.getPermission();

    // Optionally, subscribe to messages
    this.fcmService.currentMessage.subscribe((message) => {
      console.log('Message received: ', message);
      // Handle the message, e.g., display notification or update UI
    });
  }
}
