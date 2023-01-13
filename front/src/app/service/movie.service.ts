import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Movie } from '../interfaces/movie.interface';
import { AuthService } from './auth.service';
import { SearchQueryParams } from '../interfaces/search-query-params.interface';
import { NotificationService } from './notification.service';
import { CONGIF } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieUrl = CONGIF.API_BASE_URL + '/movies'
  private httpHeaders = new HttpHeaders()
    .set('content-type', 'application/json');


  constructor(private http: HttpClient, private authService: AuthService, private notificationService: NotificationService) {

  }

  private addAuthorizationHeader() {
    const token = `Bearer ${this.authService.getBearerToken()}`;
    this.httpHeaders = this.httpHeaders.set('Authorization', token);

  }

  searchMovies(searchQueryParams: SearchQueryParams): Observable<Movie[]> {
    if (!searchQueryParams.query.trim() || searchQueryParams.query.length < 2) {
      return of([]);
    }

    this.addAuthorizationHeader()

    const httpParams = new HttpParams()
      .set('query', searchQueryParams.query)
      .set('sortBy', searchQueryParams.sortBy);

    return this.http.get<Movie[]>(this.movieUrl, {
      headers: this.httpHeaders,
      params: httpParams
    }).pipe(
      catchError(this.handleError<Movie[]>('searchMovies', []))
    );
  }

  getMovieByIdentifier(id: string): Observable<Movie> {
    this.addAuthorizationHeader()

    return this.http.get<Movie>(`${this.movieUrl}/${id}`, {
      headers: this.httpHeaders
    }).pipe(
      catchError(this.handleError<Movie>('getMovieByIdentifier', undefined))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      this.notificationService.add(error.statusText)
      return of(result as T);
    };
  }
}
