import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Effect, Actions } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as filmsActions from '../actions/films';
import { FilmsService } from '../../services/films.service';

@Injectable()
export class FilmsEffects {
    constructor(private actions$: Actions, private filmsService: FilmsService) { }
    
    @Effect()
    loadFilms$ = this.actions$.ofType('LOAD_FILMS').pipe(
        switchMap(() => {
            return this.filmsService.getFilms().pipe(
                map(films => new filmsActions.LoadFilmsSuccess(films)),
                catchError(error => of(new filmsActions.LoadFilmsFail(error)))
            );
        })
    );
    
    @Effect()
    deleteFilm$ = this.actions$.ofType('DELETE_FILM').pipe(
        switchMap(action => {
            return this.filmsService.deleteFilm(action['payload']).pipe(
                map(() => new filmsActions.DeleteOne(action['payload'])),
            )
        })
    );
    
    @Effect()
    addFilm$ = this.actions$.ofType('ADD_FILM').pipe(
        switchMap(action => {
            return this.filmsService.addFilm(action['payload']).pipe(
                map(result => new filmsActions.AddOne(result)),
            )
        })
    );
}