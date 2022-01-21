CREATE DATABASE justiceleague;

CREATE TABLE members(
    members_id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE users(
    id SERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
)
