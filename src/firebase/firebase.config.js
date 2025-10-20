// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd53mFSVDiEZ9MGXW9AcK3MxW7JXg8E0s",
  authDomain: "dragon-news-79f23.firebaseapp.com",
  projectId: "dragon-news-79f23",
  storageBucket: "dragon-news-79f23.firebasestorage.app",
  messagingSenderId: "584454795361",
  appId: "1:584454795361:web:a09422dcdfc16113c27a20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);

export default app;