export const reviewQueries = {
	createReviewsTable: `
    CREATE TABLE IF NOT EXISTS "reviews" (
        "id" VARCHAR(100) NOT NULL,
        "movie_id" VARCHAR(100) NOT NULL,
        "user_id" VARCHAR(100) NOT NULL,
        "published_at" VARCHAR(100) NOT NULL,
        "spoilers" BOOLEAN,
        "title" VARCHAR(100),
        "review" TEXT,
        "rating" INTEGER,
        "likes" INTEGER NOT NULL,
        "dislikes" INTEGER NOT NULL
    )`,
	insertReview: `INSERT INTO "reviews" ("id", "movie_id", "user_id", "published_at", "spoilers", "title", "review", "rating", "likes", "dislikes") VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
	findReviewsByMovieId: `SELECT * FROM "reviews" WHERE "movie_id" = $1`,
	findReviewByReviewId: `SELECT * FROM "reviews" WHERE "id" = $1`,
	editReviewById: `UPDATE "reviews" SET "published_at" = $2, "spoilers" = $3, "title" = $4, "review" = $5, "rating" = $6, "likes" = $7, "dislikes" = $8 WHERE "id" = $1`,
	editReviewLikesById: `UPDATE "reviews" SET "likes" = $2, "dislikes" = $3 WHERE "id" = $1`,
	deleteReviewById: `DELETE FROM "reviews" WHERE "id" = $1`,
};
