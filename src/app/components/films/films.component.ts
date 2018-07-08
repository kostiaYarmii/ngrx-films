import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Film } from '../../models';

@Component({
    selector: 'app-films',
    templateUrl: './films.component.html'
})
export class FilmsComponent {
    @Input() films: Film[];
    @Output() delete = new EventEmitter();
    @Output() rateClick = new EventEmitter();
    @Output() select = new EventEmitter();
    
    trackByFn(index, item) {
        return index;
    }
}
