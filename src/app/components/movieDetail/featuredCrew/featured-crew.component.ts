import { Component, OnInit, Input } from '@angular/core';
import { Crew } from '../../../services/movies/credits';

@Component({
    selector: 'featured-crew',
    templateUrl: 'featured-crew.component.html',
})

export class FeaturedCrewComponent implements OnInit {
    @Input() crew: Crew[];
    director: Crew;
    writers: Crew[];

    constructor() { }

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