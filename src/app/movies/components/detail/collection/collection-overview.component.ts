import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { ConfigurationService } from '../../../../services/configuration/configuration.service';
import { CollectionsService } from '../../../../services/collections/collections.service';

@Component({
    selector: 'app-collection-overview',
    templateUrl: 'collection-overview.component.html',
    styleUrls: ['collection-overview.component.scss']
})

export class CollectionOverviewComponent implements OnInit {
    @Input() collection: any
    collectionDetails: any;

    public backdropImage: string;

    constructor(
        private configService: ConfigurationService,
        private collectionsService: CollectionsService
    ) { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.collection !== undefined) {
            this.collection = changes.collection.currentValue;
            this.backdropImage = this.getFullBackdropPath();
            this.getCollectionDetails();
        }  
    }

    ngOnInit() { 
        this.backdropImage = this.getFullBackdropPath();
        this.getCollectionDetails();
    }

    getFullBackdropPath(): string {
        let params = {
            path: this.collection.backdrop_path
        }
        return this.configService.getFullBackdropPath(params);

    }

    getCollectionDetails() {
        this.collectionsService.getDetails(this.collection.id)
            .subscribe(collection => this.collectionDetails = collection);
    }
}