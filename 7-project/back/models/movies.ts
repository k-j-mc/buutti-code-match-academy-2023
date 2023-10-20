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
	backdrop: string;
	budget: number;
	genres: any[];
	homepage: string;
	tmdb_id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster: string;
	production_companies: any[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: any[];
	tagline: string;
	title: string;
	video_count: number;
	vote_average: number;
	vote_count: number;
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
	character: string;
}
