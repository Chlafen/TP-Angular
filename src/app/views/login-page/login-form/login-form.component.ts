import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { LoginUserDto } from 'src/app/domain/dtos/user/login-user.dto';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers: [MessageService]
})
export class LoginFormComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService,
  ) { }

  login: LoginUserDto = {email: '', password: ''}
  error: string = '';
  get isButtonDisabled(): boolean {
      return this._getFormError() !== FormError.NoError;
  }

  get isInvalidEmail(): boolean {
    const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if(!EMAIL_REGEX.test(this.login.email)) {
      return true;
    }
    return false;
  }

  get isInvalidPassword(): boolean {
    return this.login.password.length < 4;
  }

  ngOnInit(): void {
    this.authService.isAuthed() && this.router.navigate(['/cv'])
  }

  _getFormError(): FormError {
    if(!this.login.email || !this.login.password) {
      return FormError.EmptyField;
    }
    if (this.isInvalidEmail) {
      return FormError.InvalidEmail;
    }
    if (this.isInvalidPassword) {
      return FormError.InvalidPassword;
    }
    return FormError.NoError;
  }



  onSubmit(): void {
    this.error = this._getFormError();
    switch (this.error) {
      case FormError.EmptyField:
        this.error = FormError.EmptyField;
        break;
      case FormError.InvalidEmail:
        this.error = FormError.InvalidEmail;
        break;
      case FormError.InvalidPassword:
        this.error = FormError.InvalidPassword;
        break;
    }
    if (this.error !== FormError.NoError) {
      return;
    }
    this.authService.login(this.login!).pipe(
      tap((val) => {
        if (val) {
          this.messageService.add({
            severity:'success',
            summary:'Login',
            detail:'You have been logged in',
            key: 'br',
          });
          this.router.navigate(['/cv'])
        }
        else {
          this.messageService.add({
            severity:'error',
            summary:'Login',
            detail:'Invalid credentials',
            key: 'br',
          });
          this.error = FormError.InvalidCredentials;
        }
      }),
      catchError((err) => {
        this.error = FormError.InvalidCredentials;
        this.messageService.add({
          severity:'error',
          summary:'Login',
          detail:'Error logging in',
          key: 'br',
        });
        return [false];
      }),
    ).subscribe()
  }
};

enum FormError {
  EmptyField = 'Please fill in all the fields',
  InvalidEmail = 'Please enter a valid email',
  InvalidPassword = 'Password must be at least 4 characters long',
  InvalidCredentials = 'Invalid credentials',
  NoError = ''
}
