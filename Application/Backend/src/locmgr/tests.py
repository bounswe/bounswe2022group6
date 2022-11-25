from django.test import TestCase
from .models import *
import json

class TestViews(TestCase):
    databases = ['location']
    @classmethod
    def setUpTestData(self):
        country = Countries.objects.create(name="Turkey")
        state = States.objects.create(country=country, name="Istanbul")
        city = Cities.objects.create(country=country, state=state, name="Yakuplu")
        city = Cities.objects.create(country=country, state=state, name="Umraniye")
        state = States.objects.create(country=country, name="Ankara")
        city = Cities.objects.create(country=country, state=state, name="Kazan")

    def test_info_get(self):
        print("Checking info API get method")
        country = json.loads(self.client.get('/locmgr/info').content)
        self.assertEqual(country, ["Turkey"])
        state = json.loads(self.client.get('/locmgr/info?country=Turkey').content)
        self.assertEqual(state, ["Ankara", "Istanbul"])
        city = json.loads(self.client.get('/locmgr/info?state=Istanbul').content)
        self.assertEqual(city, ["Umraniye", "Yakuplu"])

    def test_location_get(self):
        print("Checking location API get method")
        data = json.loads(self.client.get('/locmgr/location').content)
        self.assertEqual(data, {'loc': []})
        data = json.loads(self.client.get('/locmgr/location?ip=127.0.0.1').content)
        self.assertEqual(data, {'loc': []})
        data = json.loads(self.client.get('/locmgr/location?ip=8.8.8.8').content)
        self.assertEqual(data, {'loc': ['United States', 'Virginia', 'Ashburn']})
