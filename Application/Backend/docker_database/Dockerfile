FROM postgres:15.1-alpine
RUN apk add bash 

WORKDIR /tools
COPY ./world.sql /docker-entrypoint-initdb.d/world.sql
RUN chown postgres:postgres /docker-entrypoint-initdb.d/world.sql

COPY ./init_db.sh /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/init_db.sh

COPY ./reset_db.sh /tools/
RUN chmod +x /tools/reset_db.sh
