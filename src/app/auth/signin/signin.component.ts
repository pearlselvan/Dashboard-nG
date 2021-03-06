import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSigin(form: NgForm) {
    console.log('Signing in for' , form.value.email);

    const email = form.value.email;
    const password = form.value.password;
    this.authService.signinUser(email, password);

    console.log('Token OnSign : ' , this.authService.getToken());
  }
}
