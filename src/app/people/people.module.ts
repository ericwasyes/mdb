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
    MatSelectModule,
    MatButtonToggleModule,
    MatTooltipModule
 } from '@angular/material';

 // Modules
 import { AppRoutingModule } from './../app-routing.module';
 import { SharedModule } from '../shared/shared.module';
import { PeopleService } from '../services/people/people.service';
import { PeopleComponent } from './people.component';
import { PeopleDetailComponent } from './components/detail/people-detail.component';
import { PeopleListComponent } from './components/list/people-list.component';
import { KnownForComponent } from './components/detail/known-for/known-for.component';
import { PeopleCreditsComponent } from './components/detail/credits/people-credits.component';


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
        SharedModule,
        MatButtonToggleModule,
        MatTooltipModule
    ],
    exports: [],
    declarations: [
        PeopleComponent,
        PeopleDetailComponent,
        PeopleListComponent,
        KnownForComponent,
        PeopleCreditsComponent,
    ],
    providers: [
        PeopleService
    ],
})
export class PeopleModule { }
