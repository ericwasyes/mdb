import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { TvListComponent } from './tv/components/list/tv-list.component';
import { TvComponent } from './tv/tv.component';
import { TvDetailComponent } from './tv/components/detail/tv-detail.component';
import { SeasonComponent } from './tv/components/season/season.component';
import { TvFeaturedComponent } from './tv/components/featured/tv-featured.component';
import { MoviesFeaturedComponent } from './movies/components/featured/movies-featured.component';
import { MoviesListComponent } from './movies/components/list/movies-list.component';
import { MovieDetailComponent } from './movies/components/detail/movie-detail.component';
import { PeopleComponent } from './people/people.component';
import { PeopleDetailComponent } from './people/components/detail/people-detail.component';
import { PeopleListComponent } from './people/components/list/people-list.component';

const appRoutes: Routes = [
    {
        path: 'movies',
        component: MoviesComponent,
        children: [   
            {
                path: 'featured',
                component: MoviesFeaturedComponent,
                data: {
                    title: 'Featured Movies'
                }
            },
            {
                path: 'search',
                component: MoviesListComponent,
                data: {
                    title: 'Search Movies',
                }
            },
            {
                path: ':id',
                component: MovieDetailComponent,
                children: [
                    
                ]
            }
        ]
    },
    {
        path: 'tv',
        component: TvComponent,
        children: [   
            {
                path: 'featured',
                component: TvFeaturedComponent,
                data: {
                    title: 'Featured TV Shows'
                }
            },
            {
                path: 'search',
                component: TvListComponent,
                data: {
                    title: 'Search TV Shows',
                }
            },
            {
                path: ':id',
                component: TvDetailComponent,
                children: [
                    
                ]
            },
            {
                path: ':id1/season/:id2',
                component: SeasonComponent
            }
        ]
    }, 
    {
        path: 'people',
        component: PeopleComponent,
        children: [
            // {
            //     path: 'featured',
            //     component: PeopleFeaturedComponent,
            //     data: {
            //         title: 'Featured People'
            //     }
            // },
            {
                path: 'search',
                component: PeopleListComponent,
                data: {
                    title: 'Search People',
                }
            },
            {
                path: ':id',
                component: PeopleDetailComponent,
            }
        ]
    },
    {
        path: '**', 
        component: PageNotFoundComponent,
        data: {
            title: 'Too much tuna!'
        }

    }


];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {
                // enableTracing: true, // <-- debugging purposes only
            }
        )
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]
})
export class AppRoutingModule { }