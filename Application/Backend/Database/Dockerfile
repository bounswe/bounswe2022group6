FROM mysql/mysql-server:8.0

COPY ./Database/init_db.sh /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/init_db.sh