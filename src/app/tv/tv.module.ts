// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { OverlayContainer } from '@angular/cdk/overlay';
import {RoundProgressModule} from 'angular-svg-round-progressbar';
import { DragScrollModule } from 'ngx-drag-scroll';
import { Router } from '@angular/router';

// Angular Material
import {
    MatToolbarModule, 
    MatExpansionModule, 
    MatInputModule, 
    MatButtonModule, 
    MatPaginatorModule, 
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatChipsModule,
    MatMenuModule,
    MatGridListModule,
    MatSelectModule
 } from '@angular/material';

 // Modules
 import { AppRoutingModule } from './../app-routing.module';
 import { SharedModule } from '../shared/shared.module';

 // Components
import { TvListComponent } from './components/list/tv-list.component';
import { TvComponent } from './tv.component';
import { TvFeaturedComponent } from './components/featured/tv-featured.component';

import { TvDetailComponent } from './components/detail/tv-detail.component';
import { SeasonsOverviewComponent } from './components/detail/seasonsOverview/seasons-overview.component';
import { SeasonDetailComponent } from './components/detail/seasonsOverview/seasonDetail/season-detail.component';
import { SeasonComponent } from './components/season/season.component';

// Services
import { TvService } from '../services/tv/tv.service';
import { TechnicalDetailsComponent } from './components/detail/technicalDetails/technical-details.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatExpansionModule,
        MatInputModule,
        MatButtonModule,
        MatPaginatorModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatTabsModule,
        MatChipsModule,
        MatMenuModule,
        RoundProgressModule,
        MatGridListModule,
        MatSelectModule,
        DragScrollModule,
        AppRoutingModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        TvListComponent,
        TvComponent,
        TvFeaturedComponent,
        TvDetailComponent,
        SeasonsOverviewComponent,
        SeasonDetailComponent,
        TechnicalDetailsComponent,
        SeasonComponent
    ],
    providers: [
        TvService
    ],
})
export class TvModule { }
