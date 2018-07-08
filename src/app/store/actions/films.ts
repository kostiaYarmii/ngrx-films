import { Action } from '@ngrx/store';
import { Film } from '../../models';

export const SELECT = '[Films] Select';
export const ADD_ONE = '[Films] Add One';
export const DELETE_ONE = '[Films] Delete One';
export const GET_RATE = '[Films] Get Rate';
export const LOAD_FILMS_SUCCESS = '[Films] Load Success';
export const LOAD_FILMS_FAIL = '[Films] Load Fail';

export class Select implements Action {
    readonly type = SELECT;
    constructor(public payload: number) { }
}

export class AddOne implements Action {
    readonly type = ADD_ONE;
    constructor(public payload: Film) { }
}

export class DeleteOne implements Action {
    readonly type = DELETE_ONE;
    constructor(public payload: number) { }
}

export class GetRate implements Action {
    readonly type = GET_RATE;
}

export class LoadFilmsSuccess implements Action {
    readonly type = LOAD_FILMS_SUCCESS;
    constructor(public payload: Film[]) { }
}

export class LoadFilmsFail implements Action {
    readonly type = LOAD_FILMS_FAIL;
    constructor(public payload: any) { }
}

export type Action = AddOne | Select | DeleteOne | GetRate | LoadFilmsSuccess | LoadFilmsFail;