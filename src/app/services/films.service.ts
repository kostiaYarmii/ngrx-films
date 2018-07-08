import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Film } from '../models';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class FilmsService {

    private filmsUrl = 'api/films';

    constructor(private http: HttpClient) { }

    getFilms(): Observable<Film[]> {
        return this.http.get<Film[]>(this.filmsUrl).pipe(
            catchError(this.handleError('getFilms', []))
        );
    }

    addFilm(film: Film): Observable<Film> {
        return this.http.post<Film>(this.filmsUrl, film, httpOptions).pipe(
            catchError(this.handleError<Film>('addFilm'))
        );
    }

    deleteFilm(film: Film | number): Observable<Film> {
        const id = typeof film === 'number' ? film : film.id;
        const url = `${this.filmsUrl}/${id}`;

        return this.http.delete<Film>(url, httpOptions).pipe(
            catchError(this.handleError<Film>('deleteFilm'))
        );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
    */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: Error): Observable<T> => {
            console.error(error);
            this.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    private log(message: string) {
        console.log('FilmsService: ' + message);
    }
}