import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FcmService {
  currentMessage: Observable<any>;

  constructor(private afMessaging: AngularFireMessaging) {
    this.currentMessage = this.afMessaging.messages;

    this.afMessaging.messages.subscribe((payload) => {
      console.log('Message received. ', payload);
      // Customize notification here
    });
  }

  getPermission() {
    this.afMessaging.requestToken.subscribe(
      (token) => {
        console.log('FCM Token:', token);
        // Send token to server if needed
      },
      (error) => {
        console.error('Error getting permission for notifications', error);
      }
    );
  }
}
