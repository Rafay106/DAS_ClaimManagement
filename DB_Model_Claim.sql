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

INSERT INTO city (name, state_id) VALUES ('Jaipur', 1), ('Udaipur', 1), ('Ajmer', 1), ('Lucknow', 2), ('Kanpur', 2), ('Agra', 2);

CREATE TABLE `claim_management`.`du`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` nvarchar(255) NOT NULL,
	`code` int(11) NOT NULL,
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE `claim_management`.`isu`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` varchar(255) NOT NULL,
	`code` int(11) NOT NULL,
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE `claim_management`.`designation`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` varchar(255) NOT NULL,
	`code` int(11) NOT NULL,
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO designation (name, code) VALUES 
('chairperson',  101),
('president',  102),
('CEO',  103),
('general manager',  201),
('senior manager',  202),
('team lead',  301);

CREATE TABLE `claim_management`.`grade`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` varchar(255) NOT NULL,
	`code` int(11) NOT NULL,
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE `claim_management`.`employee`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` varchar(255) NULL,
	`sex` char(1) NULL,
	`email` varchar(100) NOT NULL UNIQUE,
	`mobile_no` int(11) NULL,
	`emp_type_flag` char(1) NULL DEFAULT ('T'),
	`isu_id` int(11) NULL,
	`du_id` int(11) NULL,
	`city_id` int(11) NULL,
	`state_id` int(11) NULL,
	`designation_id` int(11) NULL,
	`grade_id` int(11) NULL,
	`conf_date` date NULL,
	`prob_start_date` date NULL,
	`prob_end_date` date NULL,
	`prob_duration` int(1) NULL,
	`prob_extension_duration` int(1) NULL DEFAULT (0),
	`LWD` date NULL,
	`UserName` int(11) NULL,
	`Pwd` varchar(20) NULL,
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE,
	FOREIGN KEY (`isu_id`) REFERENCES `isu`(`id`),
	FOREIGN KEY (`du_id`) REFERENCES `du`(`id`),
	FOREIGN KEY (`city_id`) REFERENCES `city`(`id`),
	FOREIGN KEY (`state_id`) REFERENCES `state`(`id`),
	FOREIGN KEY (`designation_id`) REFERENCES `designation`(`id`),
	FOREIGN KEY (`grade_id`) REFERENCES `grade`(`id`)
);

INSERT INTO employee (name, sex, email, city_id, state_id, designation_id) VALUES 
('Muhammad Rafay Siddiqui', 'm', 'rafay.siddiqui106@gmail.com', 1, 1,  4),
('Rajswee', 'f', 'rajswee@gmail.com', 2, 1,  5),
('Saloni Bhatnagar', 'f', 'saloni@gmail.com', 4, 2,  6),
('Shreya Jain', 'f', 'shreya@gmail.com', 6, 2,  6);


CREATE TABLE `claim_management`.`user_type`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`name` varchar(255) NULL,
	`code` int(11) NULL,
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO user_type (name) VALUES ('admin'), ('approver'), ('staff');

CREATE TABLE `claim_management`.`user`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `employee_id` int(11) NOT NULL,
	`code` varchar(5) NOT NULL,
	`name` varchar(255) NULL,
	`email` varchar(100) NOT NULL UNIQUE,
	`dob` date NULL,
	`mobile_no` int(11) NULL,
	`current_address` varchar(255) NULL,
	`city_id` int(11) NULL,
	`state_id` int(11) NULL,
	`doj` date NULL,
	`user_type_id` int(11) NULL,
	`pswd` varchar(10) NULL,
	`pwd_set_date` datetime NULL,
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE,
    FOREIGN KEY (`employee_id`) REFERENCES `employee`(`id`),
	FOREIGN KEY (`city_id`) REFERENCES `city`(`id`),
	FOREIGN KEY (`state_id`) REFERENCES `state`(`id`),
    FOREIGN KEY (`user_type_id`) REFERENCES `user_type`(`id`)
);

INSERT INTO user (employee_id, code, name, email, city_id, state_id, user_type_id) VALUES 
(1, 'DAS01', 'Muhammad Rafay Siddiqui', 'rafay.siddiqui106@gmail.com', 1, 1, 1),
(2, 'DAS02', 'Rajswee', 'rajswee@gmail.com', 2, 1, 2),
(3, 'DAS03', 'Saloni Bhatnagar', 'saloni@gmail.com', 4, 2, 3),
(4, 'DAS04', 'Shreya Jain', 'shreya@gmail.com', 6, 2, 3);

CREATE TABLE `claim_management`.`claim_status`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`value` varchar(30) NOT NULL,
    `active_flag` BOOLEAN NOT NULL DEFAULT TRUE
);

INSERT INTO claim_status (value) VALUES 
('pending'),
('approved'),
('denied'),
('clarification required');


CREATE TABLE `claim_management`.`claim`(
	`id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
	`claim_for` varchar(255) NOT NULL,
	`bill_date` date NULL,
	`bill_no` varchar(30) NULL,
	`amount` decimal(9,2),
	`submit_date` datetime NOT NULL,
	`place` int(11) NULL,
	`approved_date` datetime NULL,
	`claimer_id` int(11) NOT NULL,
	`aprrover_id` int(11) NULL,
	`status_id` int(11) NOT NULL DEFAULT(1),
    `comment` varchar(255) NULL,
	`active_flag` BOOLEAN NOT NULL DEFAULT TRUE,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (`place`) REFERENCES `city`(`id`),
	FOREIGN KEY (`claimer_id`) REFERENCES `employee`(`id`),
	FOREIGN KEY (`aprrover_id`) REFERENCES `employee`(`id`),
	FOREIGN KEY (`status_id`) REFERENCES `claim_status`(`id`)
);
INSERT INTO claim (claim_for, bill_date, bill_no, amount, submit_date, place, approved_date, claimer_id, aprrover_id, status_id, comment) VALUES 
('laptop', '2023-09-01', '0123456789', 79989.99, '2023-09-03 01:00:00', 1, '2023-09-05 07:00:00', 3, 2, 2, '');


