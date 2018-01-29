import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange, Inject, HostListener } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export enum KEY_CODE {
    RIGHT_ARROW = 39,
    LEFT_ARROW = 37
}

@Component({
    selector: 'app-image-dialog',
    templateUrl: 'image-dialog.component.html',
    styles: [`
        .dialog-container {
            height: 100%;   
        }   
        img {
            max-height: 100%;
            max-width: 100%;
        }       
    `]
})

export class ImageDialogComponent {
    private imageInView: string;
    private disableNext = false;
    private disablePrevious = false;

    constructor(
        public dialogRef: MatDialogRef<ImageDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
        this.imageInView = this.formatFullPath(this.data.path);

        let currIdx = this.data.images.findIndex(image => image.file_path === this.data.path);
        this.disableNext = this.isNextDisabled(currIdx);
        this.disablePrevious = this.isPreviousDiabled(currIdx);
    }


    @HostListener('window:keyup', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
            if (this.disableNext === false) {
                this.next();
            }
        }

        if (event.keyCode === KEY_CODE.LEFT_ARROW) {
            if (this.disablePrevious === false) {
                this.previous();
            }
        }
    }

    formatFullPath(path: string): string {
        return this.data.baseUrl + 'original' + path;
    }


    previous(): void {
        let currIdx = this.data.images.findIndex(image => image.file_path === this.data.path);
        this.disableNext = this.isNextDisabled(currIdx + 1);
        this.disablePrevious = this.isPreviousDiabled(currIdx - 1);

        this.data.path = this.data.images[currIdx - 1].file_path;
        this.imageInView = this.formatFullPath(this.data.path);
    }

    next(): void {
        let currIdx = this.data.images.findIndex(image => image.file_path === this.data.path);
        this.disableNext = this.isNextDisabled(currIdx + 1);
        this.disablePrevious = this.isPreviousDiabled(currIdx - 1);

        this.data.path = this.data.images[currIdx + 1].file_path;
        this.imageInView = this.formatFullPath(this.data.path);
    }

    isNextDisabled(idx: number): boolean {
        return idx === this.data.images.length - 1 ? true : false;
    }

    isPreviousDiabled(idx: number): boolean {
        return idx === 0 ? true : false;
    }
}