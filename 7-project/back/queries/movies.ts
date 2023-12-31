export const movieQueries = {
	createTable: `
    CREATE TABLE IF NOT EXISTS "movies" (
        "id" VARCHAR NOT NULL,
        "adult" BOOLEAN NOT NULL,
        "backdrop" VARCHAR NOT NULL,
        "budget" INTEGER NOT NULL,
        "genres" INTEGER[] NOT NULL,
        "homepage" VARCHAR NOT NULL,
        "tmdb_id" INTEGER NOT NULL,
        "imdb_id" VARCHAR NOT NULL,
        "original_language" VARCHAR NOT NULL,
        "original_title" VARCHAR NOT NULL,
        "overview" TEXT NOT NULL,
        "popularity" DOUBLE PRECISION NOT NULL,
        "poster" VARCHAR NOT NULL,
        "production_companies" TEXT[] NOT NULL,
        "release_date" VARCHAR NOT NULL,
        "revenue" INTEGER NOT NULL,
        "runtime" INTEGER NOT NULL,
        "spoken_languages" TEXT[],
        "tagline" TEXT NOT NULL,
        "title" VARCHAR NOT NULL,
        "video_count" INTEGER NOT NULL,
        "vote_average" DOUBLE PRECISION NOT NULL,
        "vote_count" INTEGER NOT NULL
    )`,
	insertMovie: `INSERT INTO "movies" ("id", "adult", "backdrop", "budget", "genres", "homepage", "tmdb_id", "imdb_id", "original_language", "original_title", "overview", "popularity", "poster", "production_companies", "release_date", "revenue", "runtime", "spoken_languages", "tagline", "title", "video_count", "vote_average", "vote_count") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23)`,

	createMovieVideosTable: `
        CREATE TABLE IF NOT EXISTS "videos" (
            "id" VARCHAR NOT NULL,
            "name" VARCHAR NOT NULL,
            "key" VARCHAR NOT NULL,
            "site" VARCHAR NOT NULL,
            "size" NUMERIC NOT NULL,
            "type" VARCHAR NOT NULL,
            "official" BOOLEAN NOT NULL,
            "published_at" VARCHAR NOT NULL
            )`,
	insertVideos: `INSERT INTO "videos" ("id", "name", "key", "site", "size", "type", "official", "published_at") VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,

	createCastTable: `
    CREATE TABLE IF NOT EXISTS "cast" (
        "id" VARCHAR NOT NULL,
        "movie_id" VARCHAR NOT NULL,
        "tmdb_id" VARCHAR NOT NULL,
        "name" VARCHAR NOT NULL,
        "character" VARCHAR NOT NULL,
        "profile" VARCHAR NOT NULL
        )`,
	insertCast: `INSERT INTO "cast" ("id", "movie_id", "tmdb_id", "name", "character", "profile") VALUES ($1, $2, $3, $4, $5, $6)`,

	findFirst10: `SELECT "id", "backdrop", "poster", "tagline", "title", "video_count", "vote_average", "vote_count" FROM "movies" WHERE "video_count" > 0 ORDER BY random() LIMIT 10`,
	findAll: `SELECT "id", "backdrop", "poster", "tagline", "title", "video_count", "vote_average", "vote_count" FROM "movies" LIMIT 100`,

	findTop20: `SELECT "id", "backdrop", "popularity", "poster", "tagline", "title", "video_count", "vote_average", "vote_count" FROM "movies" ORDER BY "popularity" DESC LIMIT 20`,
	findTopAction: `SELECT "id", "backdrop", "popularity", "poster", "tagline", "title", "video_count", "vote_average", "vote_count" FROM "movies" WHERE 28=ANY("genres") ORDER BY "vote_count" DESC LIMIT 20`,

	findTopHorror: `SELECT "id", "backdrop", "popularity", "poster", "tagline", "title", "video_count", "vote_average", "vote_count" FROM "movies" WHERE 27=ANY("genres") ORDER BY "vote_average" DESC LIMIT 20`,

	findMovieByTMDBId: `SELECT * FROM "movies" WHERE "tmdb_id" = $1`,

	findMovieById: `SELECT * FROM "movies" WHERE "id" = $1`,
	findCastByMovieId: `SELECT * FROM "cast" WHERE "movie_id" = $1`,

	findCastById: `SELECT * FROM "cast" WHERE "tmdb_id" = $1`,
	findVideosById: `SELECT * FROM "videos" WHERE "id" = $1`,

	searchMovies: `SELECT "id", "poster", "tagline", "title" FROM "movies"
    WHERE "title" ILIKE '%'  || $1 || '%'`,
};
