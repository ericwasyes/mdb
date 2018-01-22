import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'technical-details',
    templateUrl: 'technical-details.component.html'
})

export class TechnicalDetailsComponent implements OnInit {
    @Input() details: any;

    constructor() { }

    ngOnInit() { }
}