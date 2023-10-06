import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { ENV } from '../app.constant';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {
  username: string;
  password: string;


  private parseAppId: string = ENV.parseAppId;
  private parseServerUrl: string = ENV.parseServerUrl;
  private parseJSKey: string = ENV.parseJSKey;

  constructor() { }

  ngOnInit() {
    Parse.initialize(this.parseAppId, this.parseJSKey);

    
          (Parse as any).serverURL = this.parseServerUrl; 

  }
  async login() {
    try {
      const user = await Parse.User.logIn(this.username, this.password);
      // User is logged in, navigate to another page or do something else
    } catch (error) {
      console.error('Failed to log in:', error);
      // Handle the error however you'd like
    }
  }
}
