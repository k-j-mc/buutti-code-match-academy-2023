export interface IMovieTMDB {
	id: number;
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}

export interface IMovie {
	id: string;
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	TMDB_id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	vote_average: number;
	vote_count: number;
	backdrop: string;
	poster: string;
}

export interface IMovieDetails {
	id: string;
	budget: number;
	homepage: string;
	imdb_id: string;
	TMDB_id: number;
	production_companies: string[];
	revenue: number;
	runtime: number;
	spoken_languages: string[];
	tagline: string;
	cast: number[];
}

export interface IVideos {
	id: string;
	name: string;
	key: string;
	site: string;
	size: number;
	type: string;
	official: boolean;
	published_at: string;
}

export interface ICast {
	id: string;
	TMDB_id: string;
	name: string;
	popularity: number;
	character: string;
	credit_id: number;
	order: number;
}
