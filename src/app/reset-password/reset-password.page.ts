import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email: string;
  message: string = '';
  

  constructor() { }

  ngOnInit() {
  }

  async resetPassword() {
    try {
      await Parse.User.requestPasswordReset(this.email);
      this.message = 'Password reset link sent.';
    } catch (error) {
      this.message = 'Failed to send password reset link.';
      console.error('Reset password failed:', error);
    }
  }
}
