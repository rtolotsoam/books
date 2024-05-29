import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyCWkcvbNwQNewFWJ0gxhrgUEOC_LxO9PEs",
      authDomain: "tolotsoabooks.firebaseapp.com",
      projectId: "tolotsoabooks",
      storageBucket: "tolotsoabooks.appspot.com",
      messagingSenderId: "528976951266",
      appId: "1:528976951266:web:63e7d4a59019df70dc2bbb",
      measurementId: "G-SCTVCEVFS9"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
