import { SubList } from "../sublist";

export class Details {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: string;
    budget: number;
    genres: SubList[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    production_companies: SubList[];
    production_countries: ProductionCounty[];
    release_date: Date;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    name: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

class ProductionCounty {
    iso_3166_1: string;
    name: string;
}

class SpokenLanguage {
    iso_639_1: string;
    name: string;
}

