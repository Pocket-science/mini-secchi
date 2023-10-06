import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { ENV } from '../app.constant';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.page.html',
  styleUrls: ['./signup-page.page.scss'],
})
export class SignupPagePage implements OnInit {
  username: string;
  email: string;
  password: string;

  private parseAppId: string = ENV.parseAppId;
  private parseServerUrl: string = ENV.parseServerUrl;
  private parseJSKey: string = ENV.parseJSKey;

  constructor() { }

  ngOnInit() {
    Parse.initialize(this.parseAppId, this.parseJSKey);
    (Parse as any).serverURL = this.parseServerUrl; 
  }

  async signUp() {
    const user = new Parse.User();
    user.set('username', this.username);
    user.set('email', this.email);
    user.set('password', this.password);

    try {
      await user.signUp();
      // User is signed up, proceed to next action
    } catch (error) {
      console.error('Failed to sign up:', error);
      // Handle the error as you see fit
    }
  }
}
