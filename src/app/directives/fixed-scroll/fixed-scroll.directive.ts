import { Directive, OnInit, OnDestroy, ElementRef, HostListener, Output, Input, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Event } from '@angular/router';

@Directive({ selector: '[fixedScroll]' })
export class FixedScrollDirective {
    @Output() scrollPast = new EventEmitter();
    
    constructor(private elRef: ElementRef) {
    }


    @HostListener('body:scroll', ['$event'])
    onScrollEvent($event) {
        var top = this.elRef.nativeElement.getBoundingClientRect().top
        if (top < 0) {
            this.scrollPast.emit(true);
        } else if (top >= 0) {
            this.scrollPast.emit(false)
        }
    }
}
