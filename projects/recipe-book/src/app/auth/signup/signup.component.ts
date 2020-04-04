import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private authServive: AuthService
  ) { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBiVEPxiTlGiiSW_B-ro6ZWtKTUJI5QiTg',
      authDomain: 'recipe-book.firebaseapp.com'
    });
  }

  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.authServive.signupUser(email, password);

  }

}
