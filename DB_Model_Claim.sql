DROP DATABASE `claim_management`;
CREATE DATABASE `claim_management`;
USE `claim_management`;

CREATE TABLE `claim_management`.`state`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` varchar(255) NOT NULL,
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO `state` (`name`) VALUES ('Rajasthan'), ('Uttar Pradesh');

CREATE TABLE `claim_management`.`city`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` varchar(255) NOT NULL,
	`state_id` int(11) NULL,
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE,
	FOREIGN KEY (`state_id`) REFERENCES `state`(`id`)
);

INSERT INTO city (name, state_id) VALUES
('Ajmer', 1), ('Alwar', 1), ('Bharatpur', 1), ('Bhilwara', 1), ('Bikaner', 1), ('Dhaulpur', 1),
('Hanumangarh', 1), ('Jaipur', 1), ('Jodhpur', 1), ('Kishangarh', 1), ('Kota', 1), ('Pali', 1),
('Sikar', 1), ('Tonk', 1), ('Udaipur', 1), ('Lucknow', 2), ('Kanpur', 2), ('Agra', 2);

CREATE TABLE `claim_management`.`du`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` nvarchar(255) NOT NULL,
	-- `code` int(11) NOT NULL,
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO `du` (name) VALUES ('Management'), ('Software-Development');

CREATE TABLE `claim_management`.`isu`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` varchar(255) NOT NULL,
    `du_id` int(11) NOT NULL, 
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (`du_id`) REFERENCES `du`(`id`)
);

INSERT INTO `isu` (name, du_id) VALUES ('Web', 2), ('Mobile', 2);

-- CREATE TABLE `claim_-- management`.`grade`(
-- 	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
-- 	`name` varchar(255) NOT NULL,
-- 	`code` int(11) NOT NULL,
-- 	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE
-- );

CREATE TABLE `claim_management`.`employee`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` varchar(255) NULL,
	`gender` char(1) NULL,
	`email` varchar(100) NOT NULL UNIQUE,
	`mobile_no` int(11) NULL,
	-- `emp_type_flag` char(1) NULL DEFAULT ('T'),
	`isu_id` int(11) NULL,
	`city_id` int(11) NULL,
	`conf_date` date NULL,
	`prob_start_date` date NULL,
	`prob_end_date` date NULL,
	`prob_duration` int(1) NULL,
	`prob_extension_duration` int(1) NULL DEFAULT (0),
	`LWD` date NULL,
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE,
	FOREIGN KEY (`isu_id`) REFERENCES `isu`(`id`),
	FOREIGN KEY (`city_id`) REFERENCES `city`(`id`)
);

INSERT INTO employee (name, gender, email, isu_id, city_id) VALUES 
('Muhammad Rafay Siddiqui', 'm', 'rafay.siddiqui106@gmail.com', 1, 8),
('Lokesh', 'm', 'lokesh@gmail.com', 1, 8),
('Rajswee', 'f', 'rajswee@gmail.com', 2, 8),
('Saloni Bhatnagar', 'f', 'saloni@gmail.com', 2, 8),
('Shreya Jain', 'f', 'shreya@gmail.com', 2, 8);


CREATE TABLE `claim_management`.`user_type`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` varchar(255) NULL,
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO user_type (name) VALUES ('admin'), ('sub-admin'), ('staff');

CREATE TABLE `claim_management`.`user`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `employee_id` int(11) NOT NULL,
	`name` varchar(255) NULL,
	`email` varchar(100) NOT NULL UNIQUE,
	`dob` date NULL,
	`mobile_no` int(11) NULL,
	`current_address` varchar(255) NULL,
	`doj` date NULL,
	`user_type_id` int(11) NULL,
	`hash` varchar(255) NOT NULL,
    `salt` varchar(255) NOT NULL,
	`pwd_set_date` datetime NULL,
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (`employee_id`) REFERENCES `employee`(`id`),
    FOREIGN KEY (`user_type_id`) REFERENCES `user_type`(`id`)
);

INSERT INTO user (employee_id, name, email, user_type_id, hash, salt) VALUES 
(1, 'Muhammad Rafay', 'rafay@gmail.com', 1, 'das123', ''),
(2, 'Lokesh', 'lokesh@gmail.com', 2, 'das123', ''),
(3, 'Rajswee', 'rajswee@gmail.com', 1, 'das123', ''),
(4, 'Saloni Bhatnagar', 'saloni@gmail.com', 1, 'das123', ''),
(5, 'Shreya Jain', 'shreya@gmail.com', 1, 'das123', '');

CREATE TABLE `claim_management`.`claim_status`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`value` varchar(30) NOT NULL,
    `active_flag` BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO claim_status (value) VALUES 
('Approved'),
('Clarification Pending'),
('Pending'),
('Rejected');

CREATE TABLE `claim_management`.`claim`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`claim_for` varchar(255) NOT NULL,
	`bill_date` date NULL,
	`bill_no` varchar(30) NULL,
	`amount` decimal(9,2),
	`submit_date` datetime NOT NULL,
	`place` int(11) NULL,
	`last_action_date` datetime NULL,
	`claimer_id` int(11) NOT NULL,
	`manager_id` int(11) NULL,
	`status_id` int(11) NOT NULL DEFAULT(1),
    `comments` varchar(255) NULL,
    `remarks` varchar(255) NULL,    
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (`place`) REFERENCES `city`(`id`),
	FOREIGN KEY (`claimer_id`) REFERENCES `employee`(`id`),
	FOREIGN KEY (`manager_id`) REFERENCES `employee`(`id`),
	FOREIGN KEY (`status_id`) REFERENCES `claim_status`(`id`)
);
INSERT INTO claim (claim_for, bill_date, bill_no, amount, submit_date, place, last_action_date, claimer_id, manager_id, status_id, comments, remarks) VALUES 
('laptop', '2023-09-01', '0123456789', 79989.99, '2023-09-03 01:00:00', 1, '2023-09-05 07:00:00', 3, 2, 2, '[{"date":"2023-09-03T01:00:00Z", "msg":"Purchased laptop as requested"},]', '[{"date":"2023-09-05T07:00:00Z", "msg":"claim approved"},]');


