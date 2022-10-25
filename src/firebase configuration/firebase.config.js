import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDUWlvDOHmx6rD8CU3cKyxvsvM02pbE2gE',
  authDomain: 'brain-stormy-client.firebaseapp.com',
  projectId: 'brain-stormy-client',
  storageBucket: 'brain-stormy-client.appspot.com',
  messagingSenderId: '24073532827',
  appId: '1:24073532827:web:103220cc20994157355d3e',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
