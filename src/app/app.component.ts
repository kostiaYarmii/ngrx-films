import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { Film } from './models';

import * as fromRoot from './store/reducers';
import * as filmAction from './store/actions/films';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    films$: Observable<Film[]>;
    maxId$: Observable<number>;
    rate$: Observable<number>;
    selected$: Observable<any>;
    showAddFilm = false;
    
    constructor(private store: Store<fromRoot.State>) {
        this.films$ = store.select(fromRoot.getAllFilms);
        this.maxId$ = store.select(fromRoot.getMaxId);
        this.rate$ = store.select(fromRoot.getRate);
        this.selected$ = store.select(fromRoot.getSelectedFilm);
    }
    
    ngOnInit() {
        this.store.dispatch({ type: 'LOAD_FILMS' });
    }
    
    onAddFilm(newFilm: string) {
        this.store.dispatch({ type: 'ADD_FILM', payload: { name: newFilm, rate: 0 } });
        this.showAddFilm = false;
    }
    
    onDelete(id: number) {
        this.store.dispatch({ type: 'DELETE_FILM', payload: id });
    }
    
    onRateClick() {
        this.store.dispatch(new filmAction.GetRate());
    }
    
    onSelect(id: number) {
        this.store.dispatch(new filmAction.Select(id));
    }
}
