#!/bin/bash

# Wait for database to respond
while :
do
    (echo -n > /dev/tcp/$MYSQL_DATABASE_HOST/$MYSQL_DATABASE_PORT) >/dev/null 2>&1
    WAITFORIT_result=$?
    if [[ $WAITFORIT_result -eq 0 ]]; then
        echo "Database responded!"
        break
    fi
    echo "Waiting for database..."
    sleep 5
done

# Update database and run the server
python manage.py makemigrations
python manage.py migrate --run-syncdb

# Create debug superuser if username given
if [ "$DJANGO_SUPERUSER_USERNAME" ]
then
    python manage.py createsuperuser \
        --noinput \
        --username $DJANGO_SUPERUSER_USERNAME \
        --email $DJANGO_SUPERUSER_EMAIL
fi

python manage.py runserver 0.0.0.0:8000
