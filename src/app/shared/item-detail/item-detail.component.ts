import { Component, OnInit, Input, AfterViewInit, SimpleChanges, OnChanges } from '@angular/core';
import { Details } from '../../models/movies/details';
import { Credits } from '../../models/credits';
import { Cast } from '../../models/cast';

@Component({
    selector: 'app-item-detail',
    templateUrl: 'item-detail.component.html',
    styleUrls: ['item-detail.component.scss']
})

export class ItemDetailComponent implements OnInit {
    @Input() type: string;
    @Input() details: Details;
    @Input() credits: Credits;
    @Input() voteColor: string;
    topBilledCast: Cast[];

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        this.details = changes.details !== undefined ? changes.details.currentValue : this.details;
        this.credits = changes.credits !== undefined ? changes.credits.currentValue : this.credits;
        
        this.topBilledCast = this.getTopBilledCast();
    }

    ngOnInit() { 
        this.topBilledCast = this.getTopBilledCast();
    }

    getTopBilledCast(): Cast[] {
        return this.credits.cast.slice(0, 5);
    }

    getOverlayStyle() {
        let isSemi = false;
        let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';
    
        return {
            'top': isSemi ? 'auto' : '50%',
            'bottom': isSemi ? '5%' : 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': 50 / 3.5 + 'px'
        };
    }
}