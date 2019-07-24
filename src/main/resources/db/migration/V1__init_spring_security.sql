CREATE TABLE roles
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255)
);

CREATE TABLE users
(
  id SERIAL NOT NULL PRIMARY KEY,
  username VARCHAR(255) UNIQUE,
  password VARCHAR(255),
  is_bar_owner BOOLEAN DEFAULT FALSE,
  user_pic VARCHAR(255)
);

CREATE TABLE users_roles
(
  user_id INTEGER NOT NULL,
  role_id INTEGER NOT NULL,
  PRIMARY KEY (user_id, role_id)
);