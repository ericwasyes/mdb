import { Component, OnInit, Input } from '@angular/core';
import { ListResponse } from '../../models/ListResponse';

@Component({
    selector: 'app-recommendations',
    templateUrl: 'recommendations.component.html'
})

export class RecommendationsComponent implements OnInit {
    @Input() type: string;
    @Input() recommendations: ListResponse;
    
    constructor() { }

    ngOnInit() { }
}