export interface IReview {
	id: string;
	movie_id: string;
	user_id: string;
	published_at: string;
	spoilers: boolean;
	title: string;
	review: string;
	rating: number;
	likes: number;
	dislikes: number;
	userName: string | null;
	userFirstName: string | null;
	userLastName: string | null;
	userPicture: string | null;
}

export interface INewReview {
	movie_id: string;
	user_id: string;
	spoilers: boolean;
	title: string;
	review: string;
	rating: number | null;
	likes: number;
	dislikes: number;
}

export interface IEditReview {
	id: string;
	movie_id: string;
	user_id: string;
	published_at: string;
	spoilers: boolean;
	title: string;
	review: string;
	rating: number;
	likes: number;
	dislikes: number;
}

export interface IEditReviewLikes {
	id: string;
	likes: number;
	dislikes: number;
}

export interface IDeleteReview {
	id: string;
	user_id: string;
}
