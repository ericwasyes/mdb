import { Component, OnInit, Input } from '@angular/core';
import { groupBy, sortBy, Dictionary } from 'lodash'

import { Crew } from '../../../../models/crew';

@Component({
    selector: 'app-season-crew',
    templateUrl: './season-crew.component.html',
    styleUrls: ['./season-crew.component.scss']
})
export class SeasonCrewComponent implements OnInit {
    @Input() crew: Crew[];
    groupedCrew: any;

    constructor() { }

    ngOnInit() {
        let groups = this.groupByDepartment(this.crew);
        this.groupedCrew = Object.keys(groups).map(key => groups[key]);
     }

    groupByDepartment(crew: Crew[]): Dictionary<Crew[]> {
        return groupBy(crew, 'department' );
    }
}
