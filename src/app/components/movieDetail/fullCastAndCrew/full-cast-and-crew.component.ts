import { Component, OnInit, Input } from '@angular/core';
import { Credits, Crew } from '../../../services/movies/credits';
import { Observable} from 'rxjs/Observable';
import { groupBy, sortBy, Dictionary } from 'lodash'

@Component({
    selector: 'full-cast-and-crew',
    templateUrl: 'full-cast-and-crew.component.html'
})

export class FullCastAndCrewComponent implements OnInit {
    @Input() credits: Credits;
    groupedCrew: any;

    constructor() { }

    ngOnInit() {
        let groups = this.groupByDepartment(this.credits.crew);
        this.groupedCrew = Object.keys(groups).map(key => groups[key]);
     }

    groupByDepartment(crew: Crew[]): Dictionary<Crew[]> {
        return groupBy(crew, 'department' );
    }

    getFullProfilePath() {

    }
}