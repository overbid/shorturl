# Short URL


## TODO

- [x] Backend
- [] Frontend
- [] Nginx Configuration

## Requirement

- *Nix Systems
- Docker 19.03.0+
- Docker Compose 1.25.5+

## Installation

1. Clone this repository.
2. copy and rename `.env.example` to `.env`
3. Use `id` in terminal to get values in `.env`
    - USERID - uid
    - GROUPID - gid
4. Run command `docker-compose run --rm backend yarn`

## Up and running

- Run `docker-compose up -d` to start services.
- Run `./express.sh` after change code in backend.

## Backend

- POST `/url` with `{ url: 'http://example.com' }` in body to get short url
- GET `/` redirect to `get`
- GET `/:uri` to get full URL
