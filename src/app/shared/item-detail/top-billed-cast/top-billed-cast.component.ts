import { Component, OnInit, Input } from '@angular/core';
import { Cast } from '../../../models/cast';

@Component({
    selector: 'app-top-billed-cast',
    templateUrl: 'top-billed-cast.component.html',
    styleUrls: ['top-billed-cast.component.scss']
})

export class TopBilledCastComponent implements OnInit {
    @Input() topBilledCast: Cast[];
    constructor() { }

    ngOnInit() { }
}