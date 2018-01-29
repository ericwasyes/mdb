import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-people-media-images',
    templateUrl: 'people-media-images.component.html'
})

export class PeopleMediaImagesComponent implements OnInit {
    @Input() images: any;

    constructor() { }

    ngOnInit() { }

    

}