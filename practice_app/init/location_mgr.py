from apps.location_mgr.models import *
from django.conf import settings
import csv
from pathlib import PurePath

cnt=0
with open(PurePath(settings.BASE_DIR, 'init', 'world-cities.csv'), newline='', encoding="utf8") as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        country = Countries.objects.filter(country=row['country']).first()
        if country == None:
            country = Countries(country=row['country'])
            country.save()
        state = States.objects.filter(state=row['subcountry'], country=country).first()
        if state == None:
            state = States(state=row['subcountry'], country=country)
            state.save()
        city = Cities.objects.filter(city=row['name'], state=state).first()
        if city == None:
            city = Cities(city=row['name'], state=state)
            city.save()
        cnt+=1
        if cnt % 1000 == 0:
            print("Current iteration:", cnt)