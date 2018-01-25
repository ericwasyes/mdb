import { SearchList } from "../../shared/search/search-list";

export interface PeopleSearch {
    page: number;
    total_results: number;
    total_pages: number;
    results: Person[];
}

class Person {
    profile_path: string;
    adult: boolean;
    id: number;
    known_for: KnownFor[];
    name: string;
    popularity: number
}

class KnownFor {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: Date;
    original_title: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    populairty: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}