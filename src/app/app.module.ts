import {Routes , RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'app/app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountService } from './account.service';
import { LoggingService } from './logging.service';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StatusComponent } from './status/status.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from 'app/auth/signup/signup.component';
import { AuthService } from './auth/auth.service';
import { RunComponent } from './run/run.component';



// const appRoutes: Routes = [
//   {path: '' , component : HomeComponent },
//   {path: 'status' , component : StatusComponent },
//   {path: 'contact' , component : ContactComponent },
//   {path: 'signup' , component : SignupComponent },
//   {path: 'signin' , component : SigninComponent }


// ];


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent,
    HomeComponent,
    HeaderComponent,
    StatusComponent,
    ContactComponent,
    SignupComponent,
    SigninComponent,
    RunComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [AccountService , LoggingService , AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
