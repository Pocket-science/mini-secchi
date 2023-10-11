import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { ENV } from '../app.constant';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.page.html',
  styleUrls: ['./signup-page.page.scss'],
})






export class SignupPagePage implements OnInit {
  signupForm: FormGroup;
  private parseAppId: string = ENV.parseAppId;
  private parseServerUrl: string = ENV.parseServerUrl;
  private parseJSKey: string = ENV.parseJSKey;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', Validators.required]
    }, { validator: this.passwordMatcher.bind(this) });
  }

  ngOnInit() {
    Parse.initialize(this.parseAppId, this.parseJSKey);
    (Parse as any).serverURL = this.parseServerUrl;
  }
  passwordMatcher(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const repeatPassword = control.get('repeatPassword');
    
    if (!password || !repeatPassword) return null;
    
    return password.value === repeatPassword.value ? null : { 'mismatch': true };
  }
  
  async signUp() {
    if (this.signupForm.invalid) {
      return;
    }

    const { username, email, password } = this.signupForm.value;

    const user = new Parse.User();
    user.set('username', username);
    user.set('email', email);
    user.set('password', password);

    try {
      await user.signUp();
      // User is signed up, proceed to next action
    } catch (error) {
      console.error('Failed to sign up:', error);
      // Handle the error as you see fit
    }
  }
}
