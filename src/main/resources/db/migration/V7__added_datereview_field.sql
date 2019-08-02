ALTER TABLE reviews ADD review_date TIMESTAMP;

UPDATE reviews
SET review_date = '2019-06-01T15:54:27.906045'
WHERE reviewer_id = 1;

UPDATE reviews
SET review_date = '2019-07-01T15:54:27.906045'
WHERE reviewer_id = 2;