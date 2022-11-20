FROM mysql/mysql-server:8.0

WORKDIR /tools

COPY ./init_db.sh /docker-entrypoint-initdb.d/
ADD https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/v1.9/sql/world.sql /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/init_db.sh

ADD https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/v1.9/sql/world.sql /tools
COPY ./reset_db.sh /tools/
RUN chmod +x /tools/reset_db.sh
