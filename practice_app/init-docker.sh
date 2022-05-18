python manage.py makemigrations
python manage.py migrate --run-syncdb

# Add initial attributes
python manage.py shell < init/location_mgr.py

# Cleanup, umount ramdisk
mv database/db.sqlite3 db.sqlite3
