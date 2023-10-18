export const movieQueries = {
	createTable: `
    CREATE TABLE IF NOT EXISTS "movies" (
        "id" VARCHAR(100) NOT NULL,
        "adult" BOOLEAN NOT NULL,
        "backdrop_path" VARCHAR(100) NOT NULL,
        "genre_ids" INTEGER[] NOT NULL,
        "TMDB_id" INTEGER NOT NULL,
        "original_language" VARCHAR(100) NOT NULL,
        "original_title" VARCHAR(100) NOT NULL,
        "overview" VARCHAR NOT NULL,
        "popularity" NUMERIC,
        "poster_path" VARCHAR(100) NOT NULL,
        "release_date" DATE NOT NULL,
        "title" VARCHAR(100) NOT NULL,
        "vote_average" NUMERIC NOT NULL,
        "vote_count" NUMERIC NOT NULL,
        "backdrop" VARCHAR NOT NULL,
        "poster" VARCHAR NOT NULL

    )`,
	createMovieDetailsTable: `
    CREATE TABLE IF NOT EXISTS "movie_details" (
        "id" VARCHAR(100) NOT NULL,
        "budget" INTEGER NOT NULL,
        "homepage" VARCHAR(100) NOT NULL,
        "imdb_id" VARCHAR(100) NOT NULL,
        "TMDB_id" INTEGER NOT NULL,
        "production_companies" VARCHAR[] NOT NULL,
        "revenue" NUMERIC NOT NULL,
        "runtime" NUMERIC NOT NULL,
        "spoken_languages" TEXT[] NOT NULL,
        "tagline" TEXT NOT NULL,
        "cast" INTEGER[] NOT NULL
    )`,
	createMovieVideosTable: `
    CREATE TABLE IF NOT EXISTS "movie_videos" (
        "id" VARCHAR(100) NOT NULL,
        "name" VARCHAR(100) NOT NULL,
        "key" VARCHAR(100) NOT NULL,
        "site" VARCHAR(100) NOT NULL,
        "size" NUMERIC NOT NULL,
        "type" VARCHAR(100) NOT NULL,
        "official" BOOLEAN NOT NULL,
        "published_at" VARCHAR(100) NOT NULL
    )`,
	createCastTable: `
    CREATE TABLE IF NOT EXISTS "cast" (
        "id" VARCHAR(100) NOT NULL,
        "TMDB_id" VARCHAR(100) NOT NULL,
        "name" VARCHAR(100) NOT NULL,
        "popularity" NUMERIC NOT NULL,
        "character" VARCHAR(100) NOT NULL,
        "credit_id" VARCHAR(100) NOT NULL,
        "order" NUMERIC NOT NULL
    )`,

	findAll: `SELECT * FROM "movies"`,
	insertMovie: `INSERT INTO "movies" ("id", "adult", "backdrop_path", "genre_ids", "TMDB_id", "original_language", "original_title", "overview", "popularity", "poster_path", "release_date", "title", "vote_average", "vote_count", "backdrop", "poster") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`,
	insertDetails: `INSERT INTO "movie_details" 
        ("id", "budget", "homepage", "imdb_id", "TMDB_id", "production_companies", "revenue", "runtime", "spoken_languages", "tagline", "cast") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
	insertVideos: `INSERT INTO "movie_videos" 
        ("id", "name", "key", "site", "size", "type", "official", "published_at") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
	insertActors: `INSERT INTO "cast" 
        ("id", "TMDB_id", "name", "popularity", "character", "credit_id", "order") VALUES ($1, $2, $3, $4, $5, $6, $7)`,
	findMovieById: `SELECT * FROM "movies" WHERE "TMDB_id" = $1`,
	findCastById: `SELECT * FROM "cast" WHERE "id" = $1`,
};
