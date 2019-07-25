CREATE TABLE bars
(
  id SERIAL NOT NULL PRIMARY KEY,
  bar_name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  location VARCHAR(255) NOT NULL,
  has_beach BOOLEAN DEFAULT FALSE,
  bar_owner_id INTEGER NOT NULL REFERENCES users(id)
);

CREATE TABLE reviews
(
  id SERIAL NOT NULL PRIMARY KEY,
  rating INTEGER NOT NULL,
  comment TEXT,
  like_count INTEGER,
  dislike_count INTEGER,
  reviewer_id INTEGER NOT NULL REFERENCES users(id),
  bar_id INTEGER NOT NULL REFERENCES bars(id)
);