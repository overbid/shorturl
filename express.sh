#!/bin/sh

docker rm -f express
docker-compose up -d backend
docker-compose logs -f backend