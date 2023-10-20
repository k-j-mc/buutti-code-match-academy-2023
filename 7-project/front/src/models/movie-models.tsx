export interface IVideo {
	id: string;
	key: string;
	name: string;
	official: boolean;
	published_at: string;
	site: string;
	size: number;
	type: string;
}

export interface IVideos {
	videos: IVideo[];
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

export interface IMovieMinimal {
	id: string;
	backdrop: string;
	poster: string;
	tagline: string;
	title: string;
	vote_average: number;
	vote_count: number;
}

export interface MovieArrayModel {
	allMovies: MovieInterface[];
}

export type LoadingState = Record<string, boolean>;
