import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']  
})

export class LoginComponent {
    email = new FormControl('', [Validators.required, Validators.email]);
    password = new FormControl('', [Validators.required])
    confirm_password = new FormControl('', [Validators.required])

    getErrorMessage() {
        if (this.email.hasError('required')) {
          return 'You must enter a value';
        }
        return this.email.hasError('email') ? 'Not a valid email' : '';
      }
}
