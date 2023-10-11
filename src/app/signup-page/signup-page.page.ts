import { Component, OnInit } from '@angular/core';
import * as Parse from 'parse';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.page.html',
  styleUrls: ['./signup-page.page.scss'],
})






export class SignupPagePage implements OnInit {
  signupForm: FormGroup;
  confirmationMessage: string = null;


  constructor(private fb: FormBuilder, private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeatPassword: ['', Validators.required]
    }, { validator: this.passwordMatcher.bind(this) });
  }

  ngOnInit() {

  }
  passwordMatcher(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const repeatPassword = control.get('repeatPassword');
    
    if (!password || !repeatPassword) return null;
    
    return password.value === repeatPassword.value ? null : { 'mismatch': true };
  }
  errorMessage: string = null;

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
      this.confirmationMessage = "A confirmation email has been sent. Please confirm to log in.";

      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 5000);  // Redirects after 5000 milliseconds (5 seconds)

    } catch (error) {
      this.errorMessage = error.message;
      console.error('Failed to sign up:', error);
      // Handle the error as you see fit
    }
  }
}
