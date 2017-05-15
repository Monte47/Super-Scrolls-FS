# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## books
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
author      | string    | not null
description | text      | not null
image_url   | string    | not null


## bookshelves
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null


## shelvings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
book_id     | integer   | not null, foreign key (references books), indexed
bookshelf_id| integer   | not null, foreign key (references bookshelves), indexed


## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
book_id     | integer   | not null, foreign key (references books), indexed
body        | text      | not null
