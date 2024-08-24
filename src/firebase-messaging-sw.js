importScripts('https://www.gstatic.com/firebasejs/9.1.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.2/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyCs2i8ct1F0k0o_coV6o2xjjSSmQG-zdeM",
  authDomain: "appdevnotification.firebaseapp.com",
  projectId: "appdevnotification",
  storageBucket: "appdevnotification.appspot.com",
  messagingSenderId: "1055620921369",
  appId: "1:1055620921369:web:85d7be6217345f7a89d288",
  measurementId: "G-3YT0QRE4Y5"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Message received in SW:', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  console.log('Notification details:', notificationTitle, notificationOptions);

  self.registration.showNotification(notificationTitle, notificationOptions).then(() => {
    console.log('Notification displayed successfully');
  }).catch((error) => {
    console.error('Error displaying notification:', error);
  });
});
