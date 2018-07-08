import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Film } from '../../models/film';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-selected-film',
    template: '<h1 *ngIf="film.name">{{film.name}}</h1>'
})
export class SelectedFilmComponent {
    @Input() film: Film;
}
