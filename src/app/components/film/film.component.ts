import { Component, EventEmitter, Input, Output, ChangeDetectionStrategy } from '@angular/core';
import { Film } from '../../models/film';

@Component({
    selector: 'app-film',
    templateUrl: './film.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmComponent {
    @Input() count: number;
    @Input() film: Film;
    @Output() delete = new EventEmitter();
    @Output() rateClick = new EventEmitter();
    @Output() select = new EventEmitter();
}
