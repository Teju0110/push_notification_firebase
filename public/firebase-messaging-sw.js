// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js'
);

// Initialize the Firebase app in the service worker
// "Default" Firebase configuration (prevents errors)
const firebaseConfig = {
  apiKey: 'AIzaSyAbgqnoluWcH60lY5O3iLGwyZlnNNc-DF4',
  authDomain: 'push-notification-fireba-d2c03.firebaseapp.com',
  projectId: 'push-notification-fireba-d2c03',
  storageBucket: 'push-notification-fireba-d2c03.appspot.com',
  messagingSenderId: '99128927070',
  appId: '1:99128927070:web:83f7d78ea3f35d547125cf',
  measurementId: 'G-68RX3C9P23',
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received Background Message', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    // icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
