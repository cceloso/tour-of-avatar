import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Bending } from './bending';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class BendingService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  private log(message: string) {
    this.messageService.add(`BendingService: ${message}`);
  }

  private bendingsUrl = 'https://avatarapi.herokuapp.com/bendings';

  // Handle Http operation that failed.
  // Let the app continue.
  // @param operation - name of the operation that failed
  // @param result - optional value to return as the observable result
  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getBendings(): Observable<Bending[]> {
    return this.http.get<Bending[]>(this.bendingsUrl)
      .pipe(
        tap(_ => this.log('fetched bendings')),
        catchError(this.handleError<Bending[]>('getBendings', []))
      );
  }

  getBending(name: string): Observable<Bending> {
    const url = `${this.bendingsUrl}/${name}`;
    return this.http.get<Bending>(url).pipe(
      tap(_ => this.log(`fetched bending name=${name}`)),
      catchError(this.handleError<Bending>(`getBending name=${name}`))
    );
  }

}
