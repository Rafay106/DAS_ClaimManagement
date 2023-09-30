-- DROP DATABASE IF EXISTS claim_management;
-- CREATE DATABASE IF NOT EXISTS claim_management;
-- \c claim_management;

CREATE TABLE state(
	pk SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	active_flag BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO state (name) VALUES ('Rajasthan'), ('Uttar Pradesh');

CREATE TABLE city(
	pk SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	state_id INT NULL,
	active_flag BOOLEAN NOT NULL DEFAULT TRUE,
	FOREIGN KEY (state_id) REFERENCES state(pk)
);

INSERT INTO city (name, state_id) VALUES
('Ajmer', 1), ('Alwar', 1), ('Bharatpur', 1), ('Bhilwara', 1), ('Bikaner', 1), ('Dhaulpur', 1),
('Hanumangarh', 1), ('Jaipur', 1), ('Jodhpur', 1), ('Kishangarh', 1), ('Kota', 1), ('Pali', 1),
('Sikar', 1), ('Tonk', 1), ('Udaipur', 1), ('Lucknow', 2), ('Kanpur', 2), ('Agra', 2);

CREATE TABLE du(
	pk SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	active_flag BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO du (name) VALUES ('Management'), ('Software-Development');

CREATE TABLE isu(
	pk SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
    du_id INT NOT NULL, 
	active_flag BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (du_id) REFERENCES du(pk)
);

INSERT INTO isu (name, du_id) VALUES ('Web', 2), ('Mobile', 2);

-- CREATE TABLE claim_-- management.grade(
-- 	pk SERIAL PRIMARY KEY,
-- 	name VARCHAR(255) NOT NULL,
-- 	code INT NOT NULL,
-- 	active_flag BOOLEAN NOT NULL DEFAULT TRUE
-- );

CREATE TABLE employee(
	pk SERIAL PRIMARY KEY,
	name VARCHAR(255) NULL,
	gender CHAR (1) NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	mobile_no INT NULL,
	-- emp_type_flag CHAR (1) NULL DEFAULT ('T'),
	isu_id INT NULL,
	city_id INT NULL,
	conf_DATE DATE NULL,
	prob_start_DATE DATE NULL,
	prob_end_DATE DATE NULL,
	prob_duration INT NULL,
	prob_extension_duration INT NULL DEFAULT (0),
	LWD DATE NULL,
	active_flag BOOLEAN NOT NULL DEFAULT TRUE,
	FOREIGN KEY (isu_id) REFERENCES isu(pk),
	FOREIGN KEY (city_id) REFERENCES city(pk)
);

INSERT INTO employee (name, gender, email, isu_id, city_id) VALUES 
('Muhammad Rafay Spkdiqui', 'm', 'rafay.spkdiqui106@gmail.com', 1, 8),
('Lokesh', 'm', 'lokesh@gmail.com', 1, 8),
('Rajswee', 'f', 'rajswee@gmail.com', 2, 8),
('Saloni Bhatnagar', 'f', 'saloni@gmail.com', 2, 8),
('Shreya Jain', 'f', 'shreya@gmail.com', 2, 8);


CREATE TABLE user_type(
	pk SERIAL PRIMARY KEY,
	name VARCHAR(255) NULL,
	active_flag BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO user_type (name) VALUES ('admin'), ('sub-admin'), ('staff');

CREATE TABLE users(
	pk SERIAL PRIMARY KEY,
    employee_id INT NOT NULL,
	name VARCHAR(255) NULL,
	email VARCHAR(100) NOT NULL UNIQUE,
	dob DATE NULL,
	mobile_no INT NULL,
	current_address VARCHAR(255) NULL,
	doj DATE NULL,
	user_type_id INT NULL,
	hash VARCHAR(255) NOT NULL,
    salt VARCHAR(255) NOT NULL,
	pwd_set_date DATE NULL,
	active_flag BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (employee_id) REFERENCES employee(pk),
    FOREIGN KEY (user_type_id) REFERENCES user_type(pk)
);

INSERT INTO users (employee_id, name, email, user_type_id, hash, salt) VALUES 
(1, 'Muhammad Rafay', 'rafay@gmail.com', 1, 'das123', ''),
(2, 'Lokesh', 'lokesh@gmail.com', 2, 'das123', ''),
(3, 'Rajswee', 'rajswee@gmail.com', 1, 'das123', ''),
(4, 'Saloni Bhatnagar', 'saloni@gmail.com', 1, 'das123', ''),
(5, 'Shreya Jain', 'shreya@gmail.com', 1, 'das123', '');

CREATE TABLE claim_status(
	pk SERIAL PRIMARY KEY,
	value VARCHAR(30) NOT NULL,
    active_flag BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO claim_status (value) VALUES 
('Approved'),
('Clarification Pending'),
('Pending'),
('Rejected');

CREATE TABLE claim(
	pk SERIAL PRIMARY KEY,
	claim_for VARCHAR(255) NOT NULL,
	bill_DATE DATE NULL,
	bill_no VARCHAR(30) NULL,
	amount NUMERIC(9,2),
	submit_DATE DATE NOT NULL,
	place INT NULL,
	last_action_DATE DATE NULL,
	claimer_id INT NOT NULL,
	manager_id INT NULL,
	status_id INT NOT NULL DEFAULT(1),
    comments VARCHAR(255) NULL,
    remarks VARCHAR(255) NULL,    
	active_flag BOOLEAN NOT NULL DEFAULT TRUE,
	created_at DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (place) REFERENCES city(pk),
	FOREIGN KEY (claimer_id) REFERENCES employee(pk),
	FOREIGN KEY (manager_id) REFERENCES employee(pk),
	FOREIGN KEY (status_id) REFERENCES claim_status(pk)
);

INSERT INTO claim (claim_for, bill_DATE, bill_no, amount, submit_DATE, place, last_action_DATE, claimer_id, manager_id, status_id, comments, remarks) VALUES 
('laptop', '2023-09-01', '0123456789', 79989.99, '2023-09-03 01:00:00', 1, '2023-09-05 07:00:00', 3, 2, 2, '[{"DATE":"2023-09-03T01:00:00Z", "msg":"Purchased laptop as requested"},]', '[{"DATE":"2023-09-05T07:00:00Z", "msg":"claim approved"},]');


