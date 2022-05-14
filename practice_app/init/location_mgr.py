from apps.location_mgr.models import *
from django.conf import settings
import csv
from pathlib import PurePath

cnt=0
with open(PurePath(settings.BASE_DIR, 'init', 'world-cities.csv'), newline='', encoding="utf8") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        # For every row, insert attribute if it does not exists.
        country = Countries.objects.filter(country=row['country']).first()
        if country == None:
            country = Countries.objects.create(country=row['country'])
        state = States.objects.filter(state=row['subcountry'], country=country).first()
        if state == None:
            state = States.objects.create(state=row['subcountry'], country=country)
        city = Cities.objects.filter(city=row['name'], state=state).first()
        if city == None:
            city = Cities.objects.create(city=row['name'], state=state)
        cnt+=1
        # Track process
        if cnt % 1000 == 0:
            print("Current iteration:", cnt)