FROM postgres:15.1-alpine
RUN apk add bash 

WORKDIR /tools
COPY ./world.sql /docker-entrypoint-initdb.d/world.sql
#RUN cat <(echo -e "CREATE DATABASE ${ANNOTATION_DB} OWNER ${POSTGRES_USER};\nCREATE DATABASE ${LOCATION_DB} OWNER ${POSTGRES_USER};\n") /tools/world.sql > /docker-entrypoint-initdb.d/world.sql

COPY ./init_db.sh /docker-entrypoint-initdb.d/
ADD https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/v1.9/sql/world.sql /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/init_db.sh

COPY ./reset_db.sh /tools/
RUN chmod +x /tools/reset_db.sh
