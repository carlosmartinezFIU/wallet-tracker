/*CREATE TABLE transactions(
    item_id BIGSERIAL NOT NULL PRIMARY KEY,
    item_month VARCHAR(10) NOT NULL,
    item_day NUMERIC NOT NULL,
    item_year NUMERIC NOT NULL,
    item_name VARCHAR(150) NOT NULL,
    item_price NUMERIC(19,2) NOT NULL,
    item_category VARCHAR(15) NOT NULL
);
*/



INSERT INTO transactions (item_month, item_day, item_year, item_name, item_price, item_category) VALUES('March', 13, 2022, 'Phone', 800.89, 'Income');
INSERT INTO transactions (item_month, item_day, item_year, item_name, item_price, item_category) VALUES('April', 18, 2021, 'Burger', 12.89, 'Food');
INSERT INTO transactions (item_month, item_day, item_year, item_name, item_price, item_category) VALUES('May', 01, 2022, 'Ballons', 770.89, 'Income');
INSERT INTO transactions (item_month, item_day, item_year, item_name, item_price, item_category) VALUES('January', 12, 2021, 'Car', 12.89, 'Food');
INSERT INTO transactions (item_month, item_day, item_year, item_name, item_price, item_category) VALUES('February', 19, 2022, 'Bill', 300.89, 'Utilities');
INSERT INTO transactions (item_month, item_day, item_year, item_name, item_price, item_category) VALUES('March', 22, 2021, 'Water Park', 180.67, 'Recreational');
INSERT INTO transactions (item_month, item_day, item_year, item_name, item_price, item_category) VALUES('June', 27, 2022, 'Check', 250.89, 'Insurance');
INSERT INTO transactions (item_month, item_day, item_year, item_name, item_price, item_category) VALUES('September', 30, 2021, 'Ribs', 12.89, 'Food');
INSERT INTO transactions (item_month, item_day, item_year, item_name, item_price, item_category) VALUES('August', 11, 2022, 'Light Bill', 190.89, 'Utilities');
INSERT INTO transactions (item_month, item_day, item_year, item_name, item_price, item_category) VALUES('April', 19, 2019, 'Horse', 12.89, 'Food');
INSERT INTO transactions (item_month, item_day, item_year, item_name, item_price, item_category) VALUES('March', 13, 2018, 'Watch', 400.89, 'Income');
INSERT INTO transactions (item_month, item_day, item_year, item_name, item_price, item_category) VALUES('January', 12, 2019, 'Tacobell', 12.89, 'Food');
