import { SafeResourceUrl } from "@angular/platform-browser/src/security/dom_sanitization_service";

export class VideosResponse {
    id: string;
    results: Video[];
}

class Video {
    id: string;
    iso_639_1: string;
    iso_3166_1: number;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
    santized_url?: SafeResourceUrl
}