import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-season-cast',
    templateUrl: './season-cast.component.html',
    styleUrls: ['./season-cast.component.scss']
})
export class SeasonCastComponent implements OnInit {
    @Input() cast: any;

    constructor() { }

    ngOnInit() {
    }

}
