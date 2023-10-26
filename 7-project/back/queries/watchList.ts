export const watchListQueries = {
	createTable: `
    CREATE TABLE IF NOT EXISTS "watch_list" (
        "id" VARCHAR(100) NOT NULL,
        "user_id" VARCHAR(100) NOT NULL,
        "movie_id" VARCHAR(100) NOT NULL,
        "date_added" VARCHAR(100) NOT NULL
    )`,
	findAllByUserId: `SELECT watch_list.*, "backdrop", "popularity", "poster", "tagline", "title", "video_count", "vote_average", "vote_count" FROM watch_list INNER JOIN movies ON watch_list.movie_id = movies.id WHERE watch_list.user_id = $1`,
	insertMovieToList: `INSERT INTO "watch_list" ("id", "user_id", "movie_id", "date_added") VALUES ($1, $2, $3, $4)`,
	deleteMovieFromUserList: `DELETE FROM "watch_list" WHERE movie_id = $1 AND user_id = $2`,
	findOneMovieListUserItem: `SELECT * FROM "watch_list" WHERE movie_id = $1 AND user_id = $2`,
};
