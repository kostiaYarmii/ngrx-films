import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-new-film',
    templateUrl: './new-film.component.html'
})
export class NewFilmComponent {
    @Output() addFilm = new EventEmitter();
    @Output() cancel = new EventEmitter();
    newFilm: string = null;
}
