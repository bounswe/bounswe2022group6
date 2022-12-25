#!/bin/bash

# Wait for database to respond
while :
do
    (echo -n > /dev/tcp/$POSTGRES_HOST/5432) >/dev/null 2>&1
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
python manage.py makemigrations accmgr
python manage.py migrate accmgr --fake-initial
python manage.py migrate --run-syncdb
python manage.py migrate --database=annotation
python manage.py migrate --database=annotation --run-syncdb

# Create debug superuser if username given
if [ "$DJANGO_SUPERUSER_USERNAME" ]
then
    python manage.py createsuperuser \
        --noinput \
        --username $DJANGO_SUPERUSER_USERNAME \
        --email $DJANGO_SUPERUSER_EMAIL
fi

python manage.py runserver 0.0.0.0:8000
