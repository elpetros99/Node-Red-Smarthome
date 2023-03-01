CREATE TABLE IF NOT EXISTS temperature_sensor(
	id int not null auto_increment primary key,
	name varchar(127) not null,
	temperature int not null,
	temperature_diff int not null,
	sensor_average float not null,
	date_time DATETIME not null,
	description varchar(255),
	is_late_processed boolean not null
);

CREATE TABLE IF NOT EXISTS air_condition_energy_sensor(
	id int not null auto_increment primary key,
	name varchar(127) not null,
	status boolean not null,
	energy int not null,
	sensor_sum int not null,
	date_time DATETIME not null,
	description varchar(255),
	is_late_processed boolean not null
);

CREATE TABLE IF NOT EXISTS electric_device_energy_sensor(
	id int not null auto_increment primary key,
	name varchar(127) not null,
	status boolean not null,
	energy int not null,
	sensor_sum int not null,
	date_time DATETIME not null,
	description varchar(255),
	is_late_processed boolean not null
);

CREATE TABLE IF NOT EXISTS total_energy_sensor(
	id int not null auto_increment primary key,
	name varchar(127) not null,
	total_energy int not null,
	sensor_max int not null,
	date_time DATETIME not null,
	description varchar(255),
	is_late_processed boolean not null
);

CREATE TABLE IF NOT EXISTS motion_sensor(
	id int not null auto_increment primary key,
	name varchar(127) not null,
	motion_status boolean not null,
	count int not null,
	date_time DATETIME not null,
	description varchar(255),
	is_late_processed boolean not null
);

CREATE TABLE IF NOT EXISTS water_consumption_sensor(
	id int not null auto_increment primary key,
	name varchar(127) not null,
  status boolean not null,
	consumption int not null,
	sensor_sum int not null,
	date_time DATETIME not null,
	description varchar(255),
	is_late_processed boolean not null
);

CREATE TABLE IF NOT EXISTS total_water_consumption_sensor(
	id int not null auto_increment primary key,
  name varchar(127) not null,
	total_consumption int not null,
	sensor_max int not null,
	date_time DATETIME not null,
	description varchar(255),
	is_late_processed boolean not null
);

CREATE TABLE IF NOT EXISTS alarm(
	id int not null auto_increment primary key,
	name varchar(127) not null,
	status boolean not null,
	date_time DATETIME not null,
	description varchar(255),
	is_late_processed boolean not null
);

CREATE TABLE IF NOT EXISTS late_rejected_event(
	event_id int not null auto_increment primary key,
	sensor_name varchar(127) not null,
	device_status boolean,
	measurement int,
	date_time DATETIME not null,
	description varchar(255)
);
