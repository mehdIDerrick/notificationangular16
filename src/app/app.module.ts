import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { RouterModule, Routes } from '@angular/router';  // Import RouterModule
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
const routes: Routes = [
  { path: '', component: AppComponent },
];
@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Import RouterModule and configure routes
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideMessaging(() => getMessaging()),
    AngularFireModule.initializeApp(environment.firebaseConfig), // Initialize Firebase with config
    AngularFireMessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
