export class ReviewResults {
    id: string;
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number;
}

class Result {
    id: string;
    author: string;
    content: string;
    url: string;
}
