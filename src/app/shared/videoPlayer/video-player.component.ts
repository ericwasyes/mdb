import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourceUrl } from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
    selector: 'video-player',
    template: `
        <iframe width="300"
            [src]="sanitizedUrl" 
            frameborder="0" allowfullscreen>
        </iframe>
        `,
})

export class VideoPlayerComponent implements OnInit {
    @Input() videoUrl: string;
    private videoBaseUrl: string = 'https://www.youtube.com/embed/';
    sanitizedUrl: SafeResourceUrl;

    constructor(
        private sanitizer: DomSanitizer) { }

    ngOnInit() { 
        this.sanitizedUrl = this.sanitizeVideoUrl(this.videoUrl);
    }

    sanitizeVideoUrl(url: string): SafeResourceUrl {
        let fullUrl = this.videoBaseUrl + url;
        return this.sanitizer.bypassSecurityTrustResourceUrl(fullUrl);
    }
}