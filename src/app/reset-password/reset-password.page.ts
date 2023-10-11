import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { ENV } from '../app.constant';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email: string;
  message: string = '';
  
  private parseAppId: string = ENV.parseAppId;
  private parseServerUrl: string = ENV.parseServerUrl;
  private parseJSKey: string = ENV.parseJSKey;
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
