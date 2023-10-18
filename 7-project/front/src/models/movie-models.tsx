export interface IVideos {
	iso_639_1: string;
	iso_3166_1: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
	id: string;
}

export interface MovieInterface {
	TMDB_id: number;
	adult: boolean;
	backdrop: string;
	backdrop_path: string;
	genre_ids: number[];
	id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster: string;
	poster_path: string;
	release_date: string;
	title: string;
	vote_average: string;
	vote_count: number;
}

export interface MovieArrayModel {
	allMovies: MovieInterface[];
}

export type LoadingState = Record<string, boolean>;
