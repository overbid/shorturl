create table url
(
    uri       varchar(21)  not null
        constraint url_pkey
            primary key,
    full_url  varchar(255) not null
        constraint url_full_url_key
            unique,
    short_url varchar(255) not null
        constraint url_short_url_key
            unique,
    count     integer
);