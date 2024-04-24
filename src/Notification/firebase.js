import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyAbgqnoluWcH60lY5O3iLGwyZlnNNc-DF4',
  authDomain: 'push-notification-fireba-d2c03.firebaseapp.com',
  projectId: 'push-notification-fireba-d2c03',
  storageBucket: 'push-notification-fireba-d2c03.appspot.com',
  messagingSenderId: '99128927070',
  appId: '1:99128927070:web:83f7d78ea3f35d547125cf',
  measurementId: 'G-68RX3C9P23',
};

const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const requestPermission = async () => {
  //requesting permission using Notification API
  const permission = await Notification.requestPermission();
  console.log('Permission', permission);

  if (permission === 'granted') {
    const token = await getToken(messaging, {
      vapidKey:
        'BFpsTTuQ6Ko0U54-06DqtygsCswuiRqYtv9VgIDVnyc7PDmd0RN08Gi4sNGM8CCFmROt5KtdZsDYulLL9rnC9_w',
    });
    console.log('Token', token);
  }
};
