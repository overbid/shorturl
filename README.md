# Short URL

## TODO

    * Frontend
    * Nginx Configuration

## Requirement

    * *Nix Systems
    * Docker 19.03.0+
    * Docker Compose 1.25.5+

## Installation

    1. Clone this repository.
    2. copy and rename `.env.example` to `.env`
    3. Use `id` in terminal to get values in `.env`
        * USERID - uid
        * GROUPID - gid
    4. Run command `docker-compose run --rm backend yarn`

## Up and running

    * `docker-compose up -d`
    * Use shell command `./express.sh` after change code in backend.
