import { Action } from '@ngrx/store';
import * as filmAction from '../actions/films';

import { Film } from '../../models';

export interface State {
    ids: number[];
    films: { [id: number]: Film };
    rate: number;
    selected: number;
}

export const initialState: State = {
    ids: [1, 2, 3],
    films: {
        1: {
            id: 1,
            name: 'Avengers',
            rate: 5
        },
        2: {
            id: 2,
            name: 'Iron man',
            rate: 5
        },
        3: {
            id: 3,
            name: 'Fight club',
            rate: 5
        }
    },
    rate: 5,
    selected: null
};

export const emptyInitialState: State = {
    ids: [],
    films: {},
    rate: null,
    selected: null
};

export function reducer(state: State = emptyInitialState, action: filmAction.Action) {
    switch(action.type) {
        case filmAction.ADD_ONE: {
            const newFilm = action.payload;
            state.films[newFilm.id] = newFilm;
            return {
                ...state,
                ids: [...state.ids, newFilm.id],
            };
        }
        case filmAction.SELECT: {
            const id = action.payload;
            return {
                ...state,
                selected: id
            };
        }
        case filmAction.DELETE_ONE: {
            const id = action.payload;
            for(let index in state.ids) {
                if(state.ids[index] === id) {
                    state.ids.splice(Number(index), 1);
                    break;
                }
            }
            delete state.films[id];
            if(state.selected === id) {
                state.selected = null;
            }
            let rate = 0, sum = 0;
            for(let index in state.films) {
                sum += state.films[index].rate ? state.films[index].rate : 0;
            }
            if(sum) {
                rate = sum / state.ids.length;
            }
            return {
                ids: state.ids,
                films: JSON.parse(JSON.stringify(state.films)),
                rate: rate,
                selected: state.selected
            };
        }
        case filmAction.GET_RATE: {
            let rate = 0, sum = 0;
            for(let index in state.films) {
                sum += state.films[index].rate ? state.films[index].rate : 0;
            }
            if(sum) {
                rate = sum / state.ids.length;
            }
            return {
                ...state,
                rate: rate
            }
        }
        case filmAction.LOAD_FILMS_SUCCESS: {
            let ids = [],
                films = {},
                rate = 0;
            for(let film of action.payload) {
                ids.push(film.id);
                films[film.id] = film;
                rate += film.rate;
            }
            rate = rate / action.payload.length;
            return {
                ...state,
                ids: ids,
                films: films,
                rate: rate
            }
        }
        default:
            return state;
    }
}

export const getIds = (state: State) => state.ids;
export const getFilms = (state: State) => state.films;
export const getSelected = (state: State) => state.selected;
export const getRate = (state: State) => state.rate;