import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CONGIF } from '../app.config';
import { CredentialsInterface } from '../interfaces/credentials.interface';
import { Token } from '../interfaces/token.interface';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = CONGIF.API_BASE_URL + '/auth/login';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private notificationService: NotificationService) { }

  authenticateUser(credentials: CredentialsInterface): Observable<Token> {
    return this.http.post<Token>(this.loginUrl, credentials, this.httpOptions)
      .pipe(
        tap((userToken: Token) => {
          if (userToken.token) {
            window.localStorage.setItem(CONGIF.BEARER_TOKEN_NAME, userToken.token)
          }
        }),
        catchError(this.handleError<Token>('authenticateUser'))
      )
  }

  getBearerToken(): string {
    return window.localStorage.getItem(CONGIF.BEARER_TOKEN_NAME) || ''
  }

  removeUserToken(): Observable<boolean> {
    window.localStorage.removeItem('user-token')
    return of(true)
  }

  userIsAuthenticate(): boolean {
    return (window.localStorage.getItem(CONGIF.BEARER_TOKEN_NAME) !== null)
  }

  private handleError<T>(operation = 'operation', result?: Token) {
    return (error: any): Observable<T> => {
      // console.log(error)
      this.notificationService.add(error.statusText)
      return of(result as T);
    };
  }
}
