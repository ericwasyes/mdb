import { Directive, Input, ElementRef, AfterViewInit, OnChanges } from '@angular/core';

@Directive({ selector: '[read-more]' })

export class ReadMoreDirective implements AfterViewInit, OnChanges {
    @Input('read-more-length') private maxLength: number;
    @Input('read-more-element') private elementChange: HTMLElement;

    private currentText: string;
    private hideToggle: boolean = true;
    private text: string;
    private isCollapsed: boolean = true;

    constructor(private elRef: ElementRef) { }

    public ngAfterViewInit() {
        console.log(this.elementChange);

        this.text = this.elementChange.innerHTML;
        this.toggleView();
        if (!this.hideToggle) {
            this.elRef.nativeElement.classList.remove('hidden');
        } else {
            this.elRef.nativeElement.classList.add('hidden');
        }
        this.elRef.nativeElement.addEventListener('click', (event: MouseEvent) => {
            event.preventDefault();
            this.toggleView();
        });
    }

    public ngOnChanges() {
        if (this.text) {
            this.toggleView();
        }
    }

    private toggleView(): void {
        this.determineView();
        this.isCollapsed = !this.isCollapsed;
        if (this.isCollapsed) {
            this.elRef.nativeElement.querySelector('.more').style.display = "none";
            this.elRef.nativeElement.querySelector('.less').style.display = "inherit";
        } else {
            this.elRef.nativeElement.querySelector('.more').style.display = "inherit";
            this.elRef.nativeElement.querySelector('.less').style.display = "none";
        }
    }

    private determineView(): void {
        if (this.text.length <= this.maxLength) {
            this.currentText = this.text;
            this.elementChange.innerHTML = this.currentText;
            this.isCollapsed = false;
            this.hideToggle = true;
            return;
        }
        this.hideToggle = false;
        if (this.isCollapsed === true) {
            this.currentText = this.text.substring(0, this.maxLength) + '...';
            this.elementChange.innerHTML = this.currentText;
        } else if (this.isCollapsed === false) {
            this.currentText = this.text;
            this.elementChange.innerHTML = this.currentText;
        }
    }
}