import { Component, OnInit } from '@angular/core';
import { FcmService } from '../fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FCM Angular App';
  notificationCount: number = 0;
  notifications: { message: string }[] = [];
  constructor(private fcmService: FcmService) {}

  ngOnInit() {
    // Request permission to receive notifications
    this.fcmService.getPermission();

    // Optionally, subscribe to messages
    this.fcmService.currentMessage.subscribe((message) => {
      this.notifications.push({ message: message.notification?.body || 'New notification' });
      this.notificationCount++;
      console.log('Message received: ', this.notificationCount);
      console.log('Message received: ', message);
      // Handle the message, e.g., display notification or update UI
    });
  }
}
