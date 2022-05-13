mkdir database
sudo mount -t tmpfs -o size=10m tmpfs database 
python3 manage.py makemigrations
python3 manage.py migrate --run-syncdb

python3 manage.py shell < init/location_mgr.py

mv database/db.sqlite3 db.sqlite3
sudo umount database
mv db.sqlite3 database/db.sqlite3
