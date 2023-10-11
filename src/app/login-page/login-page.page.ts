import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  username: string;
  password: string;

  showForgotPasswordLink: boolean = false;


  constructor(private router: Router) { }

  ngOnInit() {
   

  }
  errorMessage: string = '';

  async login() {
    try {
      const user = await Parse.User.logIn(this.username, this.password);
      // User is logged in, proceed to another action
      this.errorMessage = ''; // clear any previous error message
      this.showForgotPasswordLink = false;
      this.router.navigate(['/home']);


    } catch (error) {
      this.errorMessage = 'Failed to log in'; // update the error message
      this.showForgotPasswordLink = true;  // Show the link

      console.error('Failed to log in:', error);
    }
  }

  navigateToResetPassword() {
    this.router.navigate(['/reset-password']);  // Navigate to Reset Password page
  }
  
}
