import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs';
import { LoginUserDto } from 'src/app/domain/dtos/user/login-user.dto';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  login: LoginUserDto = {email: '', password: ''}
  error: string = '';
  constructor(private authService: AuthService, private router: Router) {
    console.log("login form");
    
    }
  ngOnInit(): void {
    this.authService.isAuthed$.pipe(
      tap((val)=>{
        if(val) this.router.navigate(['/cv'])
      })
    )
  }

  onSubmit(): void {
    if(!this.login.email || !this.login.password) {
      this.error = 'Please fill in all the fields';
      return;
    }
    const EMAIL_REGEX = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if(!EMAIL_REGEX.test(this.login.email)) {
      this.error = 'Please enter a valid email';
      return;
    }
    if (this.login.password.length < 4) {
      this.error = 'Password must be at least 8 characters long';
      return;
    }
    
    this.authService.login(this.login!).pipe(
      tap((val) => {
        if (val) {

          this.router.navigate(['/cv'])
        }
      }),
      catchError((err) => {
        this.error = "Invalid credentials";
        return [false]
      }),
    ).subscribe()
  }
};
