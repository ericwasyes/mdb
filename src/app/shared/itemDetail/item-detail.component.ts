import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Details } from '../../models/details';
import { Credits } from '../../models/credits';
import { Cast } from '../../models/cast';

@Component({
    selector: 'item-detail',
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

    ngOnInit() { 
        this.topBilledCast = this.credits.cast.slice(0, 5);
    }

    ngAfterViewInit() {}

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