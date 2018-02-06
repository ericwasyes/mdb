import { Component, OnInit, Input, style, state, animate, transition, trigger } from '@angular/core';

@Component({
    selector: 'app-fixed-header',
    templateUrl: 'fixed-header.component.html',
    styles: [
        `
        .fixed-header {
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 2;
        }
        .spacer {
            flex: 1 1 auto;
        }
        `
    ],
    animations: [
        trigger('fadeInOut', [
            transition(':enter', [   // :enter is alias to 'void => *'
                style({ opacity: 0 }),
                animate(150, style({ opacity: 1 }))
            ]),
            transition(':leave', [   // :leave is alias to '* => void'
                animate(150, style({ opacity: 0 }))
            ])
        ])
    ]
})

export class FixedHeaderComponent implements OnInit {
    @Input() type: string;
    @Input() details: any;
    @Input() showFixedHeader: boolean;
    @Input() voteColor: string;

    constructor() { }

    ngOnInit() { }

    getOverlayStyle() {
        let isSemi = false;
        let transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

        return {
            'top': isSemi ? 'auto' : '50%',
            'bottom': isSemi ? '5%' : 'auto',
            'left': '50%',
            'transform': transform,
            '-moz-transform': transform,
            '-webkit-transform': transform,
            'font-size': 50 / 3.5 + 'px'
        };
    }
}