import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Character } from './character';
import { CHARACTERS } from './mock-characters';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`CharacterService: ${message}`);
  }

  private charactersUrl = 'https://avatarapi.herokuapp.com/characters';
  
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

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl)
      .pipe(
        tap(_ => this.log('fetched characters')),
        catchError(this.handleError<Character[]>('getCharacters', []))
      );
  }

  getCharacter(name: string): Observable<Character> {
    const url = `${this.charactersUrl}/${name}`;
    return this.http.get<Character>(url).pipe(
      tap(_ => this.log(`fetched character name=${name}`)),
      catchError(this.handleError<Character>(`getCharacter name=${name}`))
    );
  }
  
  getBenders(bending: string): Observable<Character[]> {
    const url = `${this.charactersUrl}/benders/${bending}`;
    return this.http.get<Character[]>(url).pipe(
      tap(_ => this.log('fetched benders')),
      catchError(this.handleError<Character[]>('getBenders', []))
    );
  }

  searchCharacters(term: string): Observable<Character[]> {
    if(!term.trim()) {
      // if not search term, return empty array.
      return of([]);
    }
    // return this.http.get<Character[]>(`${this.charactersUrl}/?name=${term}`).pipe(
    return this.http.get<Character[]>(`${this.charactersUrl}/${term}`).pipe(
      tap(x => x.length ?
        this.log(`found character matching "${term}"`) :
        this.log(`no characters matching "${term}"`)),
      catchError(this.handleError<Character[]>('searchCharacters', []))
    );
  }
}
