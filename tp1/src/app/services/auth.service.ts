import { Injectable } from '@angular/core';
import { Store } from './store/store';
import { TokenModel } from '../domain/models/token.model';
import { LoginUserDto } from '../domain/dtos/user/login-user.dto';
import { LogoutUser } from '../domain/usecases/user/logout-user.usecase';
import { LoginUser } from '../domain/usecases/user/login-user.usecase';
import { Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private store = new Store<TokenModel>({ token: '', expiresAt: new Date() });

  constructor(private loginUser: LoginUser, private logoutUser: LogoutUser) {
    this.initialize({ token: '', expiresAt: new Date() });
  }

  token$ = this.store.select((state) => {
    if (state.expiresAt.getTime() < new Date().getTime()) {
      return '';
    }
    return state.token;
  });

  isAuthed$ = this.store.select((state) => {
    return (
      state.token !== '' && state.expiresAt.getTime() > new Date().getTime()
    );
  });

  private isLocalStorageTokenValid(): boolean {
    let token: string = localStorage.getItem('token') || '';
    let expiresAt: string = localStorage.getItem('expiresAt') || '';
    let isExpired: boolean =
      new Date(expiresAt).getTime() < new Date().getTime();
    return !(token == '' || expiresAt == '' || isExpired);
  }

  private setLocalStorageToken(token: TokenModel): void {
    localStorage.setItem('token', token.token);
    localStorage.setItem('expiresAt', token.expiresAt.toString());
  }

  private resetLocalStorage(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresAt');
  }

  initialize(initialToken: TokenModel): void {
    this.store.update((_) => {
      if (!this.isLocalStorageTokenValid()) {
        this.resetLocalStorage();
        return initialToken;
      } else {
        let token: string = localStorage.getItem('token') || '';
        let expiresAt: string = localStorage.getItem('expiresAt') || '';
        return { token: token, expiresAt: new Date(expiresAt) };
      }
    });
  }

  login(userLogin: LoginUserDto): Observable<boolean> {
    return this.loginUser.execute(userLogin).pipe(
      map((token: TokenModel) => {
        this.setLocalStorageToken(token);

        this.store.update((_) => token);
        return true;
      }),
      catchError((err) => {
        return [false];
      })
    );
  }

  logout(): Observable<void> {
    this.store.update((_) => {
      return { token: '', expiresAt: new Date() };
    });
    let token: string = localStorage.getItem('token') || '';

    this.resetLocalStorage();
    return this.logoutUser.execute(token);
  }

  isAuthed(): boolean {
    return this.isLocalStorageTokenValid();
  }
}
