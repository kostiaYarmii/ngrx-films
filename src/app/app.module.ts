import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { RatingModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { FilmsComponent } from './components/films/films.component';
import { FilmComponent } from './components/film/film.component';
import { SelectedFilmComponent } from './components/selected-film/selected-film.component';

import { reducers, metaReducers } from './store/reducers';
import { NewFilmComponent } from './components/new-film/new-film.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

import { EffectsModule } from '@ngrx/effects';
import { FilmsEffects } from './store/effects/films.effects';

@NgModule({
    declarations: [
        AppComponent,
        FilmsComponent,
        FilmComponent,
        SelectedFilmComponent,
        NewFilmComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        StoreModule.forRoot(reducers, { metaReducers }),
        RatingModule.forRoot(),
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
        ),
        EffectsModule.forRoot([FilmsEffects])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
