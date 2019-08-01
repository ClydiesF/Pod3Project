ALTER TABLE bars ADD COLUMN bar_pic VARCHAR(255);

UPDATE bars
SET bar_pic = 'https://www.thebeachcomber.com/wp-content/uploads/2018/09/beachcomber_main_2.jpg'
WHERE bar_name = 'Beachcomber';

UPDATE bars
SET bar_pic = 'https://www.pourjudgementnewport.com/uploads/1/7/6/6/17664499/background-images/95306804.jpg'
WHERE bar_name = 'Pour Judgement';