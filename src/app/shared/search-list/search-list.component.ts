import { Component, OnInit, Input } from '@angular/core';
import { SearchList } from '../search/search-list';

@Component({
    selector: 'app-search-list',
    templateUrl: 'search-list.component.html',
    styleUrls: ['search-list.component.scss']
})

export class SearchListComponent implements OnInit {
    @Input() searchResult: SearchList;
    @Input() type: string;
    
    constructor() { }

    ngOnInit() { }
}