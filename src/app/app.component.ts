import { Component } from '@angular/core';
import { AccountService } from './account.service';
import * as firebase from 'firebase';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {

  accounts: {name: string, status: string}[] = [];

  constructor(private accountservice: AccountService) {}

  // apiKey: "AIzaSyCtwC08zyDDmzAWUerqy8KgKrrBf-hjVaY",
  // authDomain: "angular-7ae1f.firebaseapp.com",

  ngOnInit() {
    this.accounts = this.accountservice.accounts;
    firebase.initializeApp({
      apiKey: 'AIzaSyCtwC08zyDDmzAWUerqy8KgKrrBf-hjVaY',
      authDomain: 'angular-7ae1f.firebaseapp.com',
    });

  }


}
