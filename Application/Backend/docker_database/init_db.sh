#!/bin/bash

mysql -u ${MYSQL_USER} --password="$MYSQL_ROOT_PASSWORD" -D $MYSQL_DATABASE < /tools/world.sql
