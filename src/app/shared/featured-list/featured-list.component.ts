import { Component, OnInit, Input } from '@angular/core';
import { ListResponse } from '../../models/ListResponse';

@Component({
    selector: 'app-featured-list',
    templateUrl: 'featured-list.component.html',
    styleUrls: ['featured-list.component.scss']
})

export class FeaturedListComponent implements OnInit {
    @Input() items: ListResponse;
    @Input() type: string;

    constructor() { }

    ngOnInit() { 
    }
}