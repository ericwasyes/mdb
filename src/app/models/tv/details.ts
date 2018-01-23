import { SubList } from "../sublist";
import { TvSeasonOverview } from "../tvSeasons/tv-season-overview";

export class TvDetails {
    backdrop_path: string;
    created_by: ShowCreator[];
    epispde_run_time: number[];
    first_air_date: Date;
    genres: SubList[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: Date;
    name: string;
    networks: SubList[];
    number_of_episodes: number;
    number_of_seasons: 8;
    origin_country: string[];
    original_language: string;
    original_name: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: SubList[];
    seasons: TvSeasonOverview[];
    status: string;
    type: string;
    vote_average: number;
    vote_count: number;
}

class ShowCreator {
    id: number;
    name: string;
    gender: number;
    profile_path: string;
}
