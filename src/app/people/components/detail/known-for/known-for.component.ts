import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-known-for',
    templateUrl: './known-for.component.html',
    styleUrls: ['./known-for.component.scss']
})
export class KnownForComponent implements OnInit {
    @Input() knownFor: any;
    constructor() { }

    ngOnInit() {
    }

}
