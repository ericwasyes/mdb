import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Crew } from '../../../models/crew';
import {  } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
    selector: 'app-featured-crew',
    templateUrl: 'featured-crew.component.html'
})

export class FeaturedCrewComponent implements OnInit {
    @Input() type: string;
    @Input() crew: Crew[];
    @Input() creators: any[];

    director: Crew;
    writers: Crew[];

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        this.crew = changes.crew !== undefined ? changes.crew.currentValue : this.crew;
        this.creators = changes.creators !== undefined ? changes.creators.currentValue : this.creators;

        this.getFeaturedCrew();
    }

    ngOnInit() {
        this.getFeaturedCrew();
     }

    getFeaturedCrew(): void {
        this.director = this.crew.find(crewMember => {
            return crewMember.job == 'Director';
        });

        this.writers = this.crew.filter(crewMember => {
            return crewMember.job == 'Screenplay';
        })
    }
}