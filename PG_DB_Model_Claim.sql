set
	time zone 'UTC';

CREATE TABLE
	state (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL);

INSERT INTO
	state (name)
VALUES
	('Rajasthan'),
	('Uttar Pradesh');

CREATE TABLE
	city (
		id SERIAL PRIMARY KEY,
		name VARCHAR(255) NOT NULL,
		state_id INT NULL,
		FOREIGN KEY (state_id) REFERENCES state (id)
	);

INSERT INTO
	city (name, state_id)
VALUES
	('Ajmer', 1),
	('Alwar', 1),
	('Bharatpur', 1),
	('Bhilwara', 1),
	('Bikaner', 1),
	('Dhaulpur', 1),
	('Hanumangarh', 1),
	('Jaipur', 1),
	('Jodhpur', 1),
	('Kishangarh', 1),
	('Kota', 1),
	('Pali', 1),
	('Sikar', 1),
	('Tonk', 1),
	('Udaipur', 1),
	('Lucknow', 2),
	('Kanpur', 2),
	('Agra', 2);

CREATE TABLE
	du (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL);

INSERT INTO
	du (name)
VALUES
	('Management'),
	('Software-Development');

CREATE TABLE
	isu (
		id SERIAL PRIMARY KEY,
		name VARCHAR(255) NOT NULL,
		du_id INT NOT NULL,
		FOREIGN KEY (du_id) REFERENCES du (id)
	);

INSERT INTO
	isu (name, du_id)
VALUES
	('Web', 2),
	('Mobile', 2);

CREATE TABLE
	employee (
		id SERIAL PRIMARY KEY,
		name VARCHAR(255) NULL,
		gender CHAR(1) NULL,
		email VARCHAR(100) NOT NULL UNIQUE,
		mobile_no VARCHAR(13) NULL,
		emp_type_flag CHAR(1) NULL DEFAULT ('T'),
		isu_id INT NULL,
		city_id INT NULL,
		conf_DATE DATE NULL,
		prob_start_DATE DATE NULL,
		prob_end_DATE DATE NULL,
		prob_duration INT NULL,
		prob_extension_duration INT NULL DEFAULT (0),
		LWD DATE NULL,
		active_flag BOOLEAN NOT NULL DEFAULT TRUE,
		FOREIGN KEY (isu_id) REFERENCES isu (id),
		FOREIGN KEY (city_id) REFERENCES city (id)
	);

INSERT INTO
	employee (name, gender, email, isu_id, city_id)
VALUES
	('Muhammad Rafay', 'm', 'rafay@gmail.com', 1, 8),
	('Lokesh', 'm', 'lokesh@gmail.com', 1, 8),
	('Rajswee', 'f', 'rajswee@gmail.com', 2, 8),
	('Saloni Bhatnagar', 'f', 'saloni@gmail.com', 2, 8),
	('Shreya Jain', 'f', 'shreya@gmail.com', 2, 8);

CREATE TABLE
	user_type (id SERIAL PRIMARY KEY, name VARCHAR(255) NULL);

INSERT INTO
	user_type (name)
VALUES
	('admin'),
	('sub-admin'),
	('staff');

CREATE TABLE
	users (
		id SERIAL PRIMARY KEY,
		employee_id INT NOT NULL,
		name VARCHAR(255) NULL,
		email VARCHAR(100) NOT NULL UNIQUE,
		dob DATE NULL,
		mobile_no VARCHAR(13) NULL,
		current_address VARCHAR(255) NULL,
		doj DATE NULL,
		user_type_id INT NULL,
		hash VARCHAR(255) NOT NULL,
		pwd_set_date DATE NULL,
		active_flag BOOLEAN NOT NULL DEFAULT TRUE,
		FOREIGN KEY (employee_id) REFERENCES employee (id),
		FOREIGN KEY (user_type_id) REFERENCES user_type (id)
	);

INSERT INTO
	users (
		employee_id,
		name,
		email,
		user_type_id,
		hash,
		pwd_set_date
	)
VALUES
	(
		1,
		'Muhammad Rafay',
		'rafay@gmail.com',
		1,
		'$2b$10$LKgSl8XVqLd3LkFrNgYV2uT9ohtLFsjUACx1H45bbCR0oI5/cUq3G',
		now ()
	),
	(
		2,
		'Lokesh',
		'lokesh@gmail.com',
		2,
		'$2b$10$LKgSl8XVqLd3LkFrNgYV2uT9ohtLFsjUACx1H45bbCR0oI5/cUq3G',
		now ()
	),
	(
		3,
		'Rajswee',
		'rajswee@gmail.com',
		2,
		'$2b$10$LKgSl8XVqLd3LkFrNgYV2uT9ohtLFsjUACx1H45bbCR0oI5/cUq3G',
		now ()
	),
	(
		4,
		'Saloni Bhatnagar',
		'saloni@gmail.com',
		3,
		'$2b$10$LKgSl8XVqLd3LkFrNgYV2uT9ohtLFsjUACx1H45bbCR0oI5/cUq3G',
		now ()
	),
	(
		5,
		'Shreya Jain',
		'shreya@gmail.com',
		3,
		'$2b$10$LKgSl8XVqLd3LkFrNgYV2uT9ohtLFsjUACx1H45bbCR0oI5/cUq3G',
		now ()
	);

CREATE TABLE
	claim_status (id SERIAL PRIMARY KEY, value VARCHAR(30) NOT NULL);

INSERT INTO
	claim_status (value)
VALUES
	('Approved'),
	('Clarification Pending'),
	('Pending'),
	('Rejected');

CREATE TABLE
	claim (
		id SERIAL PRIMARY KEY,
		claim_for VARCHAR(255) NOT NULL,
		bill_date DATE NULL,
		bill_no VARCHAR(30) NULL,
		amount NUMERIC(9, 2),
		submit_date DATE NOT NULL,
		place INT NULL,
		last_action_date DATE NULL,
		claimer_id INT NOT NULL,
		manager_id INT NULL,
		status_id INT NOT NULL DEFAULT (3),
		comments JSONB NULL,
		remarks JSONB NULL,
		FOREIGN KEY (place) REFERENCES city (id),
		FOREIGN KEY (claimer_id) REFERENCES employee (id),
		FOREIGN KEY (manager_id) REFERENCES employee (id),
		FOREIGN KEY (status_id) REFERENCES claim_status (id)
	);

INSERT INTO
	claim (
		claim_for,
		bill_date,
		bill_no,
		amount,
		submit_date,
		place,
		last_action_date,
		claimer_id,
		manager_id,
		status_id,
		comments,
		remarks
	)
VALUES
	(
		'laptop',
		'2023-09-01',
		'0123456789',
		79989.99,
		'2023-09-03 01:00:00',
		8,
		'2023-09-05 07:00:00',
		4,
		2,
		1,
		'[{"dt":"2023-09-03T01:00:00Z", "msg":"Purchased laptop as requested"}]',
		'[{"dt":"2023-09-05T07:00:00Z", "msg":"claim approved"}]'
	);

INSERT INTO
	claim (
		claim_for,
		bill_date,
		bill_no,
		amount,
		submit_date,
		place,
		claimer_id,
		comments
	)
VALUES
	(
		'Travel to Bikaner',
		'2023-09-10',
		'0123456789',
		79989.99,
		now (),
		5,
		5,
		'[{"dt":"2023-09-03T01:00:00Z", "msg":"Purchased laptop as requested"}]'
	);