#!/bin/bash

mysqld &

# Wait for database to respond
while :
do
    (echo -n > /dev/tcp/127.0.0.1/$MYSQL_DATABASE_PORT) >/dev/null 2>&1
    WAITFORIT_result=$?
    if [[ $WAITFORIT_result -eq 0 ]]; then
        echo "Database responded!"
        break
    fi
    echo "Waiting for database..."
    sleep 5
done

mysql -u root --password="$MYSQL_ROOT_PASSWORD" -D $MYSQL_DATABASE << EOF
SET SESSION group_concat_max_len = 1000000;
-- build dynamic sql (DROP TABLE tbl1, tbl2...;)
SELECT CONCAT('DROP TABLE ',GROUP_CONCAT(CONCAT('${MYSQL_DATABASE}','.',table_name)),';')
INTO @droplike
FROM information_schema.tables
WHERE table_name NOT IN ('cities', 'states', 'countries')
AND table_schema='${MYSQL_DATABASE}';

-- display the dynamic sql statement
SELECT @droplike;

-- execute dynamic sql
PREPARE stmt FROM @droplike;
EXECUTE stmt;
DEALLOCATE PREPARE stmt;
EOF
