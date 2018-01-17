import { Component, OnInit, Input } from '@angular/core';
import { ListResponse } from '../../models/ListResponse';

@Component({
    selector: 'featured-list',
    templateUrl: 'featured-list.component.html'
})

export class FeaturedListComponent implements OnInit {
    @Input() items: ListResponse;
    @Input() type: string;

    constructor() { }

    ngOnInit() { 
        console.log(this.items);
    }
}