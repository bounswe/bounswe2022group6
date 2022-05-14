from django.test import TestCase
from .models import *
import json

# This class will test location and info API's
class TestLocationMgr(TestCase):
    @classmethod
    def setUpTestData(self):
        country = Countries.objects.create(country="Turkey")
        state = States.objects.create(country=country, state="Istanbul")
        city = Cities.objects.create(state=state, city="Yakuplu")
        UserLocation.objects.create(username="user0", country=country, state=state, city=city)
        city = Cities.objects.create(state=state, city="Umraniye")
        UserLocation.objects.create(username="user1", country=country, state=state, city=city)
        state = States.objects.create(country=country, state="Ankara")
        city = Cities.objects.create(state=state, city="Kazan")
        UserLocation.objects.create(username="user2", country=country, state=state, city=city)

    def test_location_get(self):
        print("Checking location API get method")
        data = json.loads(self.client.get('/location_mgr/location').content)
        self.assertEqual(data, {'loc': []})
        data = json.loads(self.client.get('/location_mgr/location?ip=127.0.0.1').content)
        self.assertEqual(data, {'loc': []})
        data = json.loads(self.client.get('/location_mgr/location?ip=8.8.8.8').content)
        self.assertEqual(data, {'loc': ['United States', 'Virginia', 'Ashburn']})

    def test_location_post(self):
        print("Checking location API post method")
        message = json.loads(self.client.post('/location_mgr/location', { "username": "user10",
        "country": "Turkey", "state": "ISTANBUL", "city":"umraniye"}).content)
        self.assertEqual(message, {'info': 'Operation completed successfully!'})
        message = json.loads(self.client.post('/location_mgr/location', {
            "username": "user2", "country": "Turkey", "state": "ISTANBUL"}).content)
        self.assertEqual(message, {'info': 'Operation completed successfully!'})
        message = json.loads(self.client.post('/location_mgr/location', {
            "username": "user11"}).content)
        self.assertEqual(message, {'info': 'Operation failed!'})
        message = json.loads(self.client.post('/location_mgr/location', {
            "username": "", "country": "Turkey", "state": "Istanbul"}).content)
        self.assertEqual(message, {'info': 'Operation failed!'})
        self.assertEqual(UserLocation.objects.count(), 4)

    def test_info_get(self):
        print("Checking info API get method")
        country = json.loads(self.client.get('/location_mgr/info').content)
        self.assertEqual(country, ["Turkey"])
        state = json.loads(self.client.get('/location_mgr/info?country=Turkey').content)
        self.assertEqual(state, ["Ankara", "Istanbul"])
        city = json.loads(self.client.get('/location_mgr/info?state=Istanbul').content)
        self.assertEqual(city, ["Umraniye", "Yakuplu"])

    def test_info_post(self):
        print("Checking info API post method")
        data = json.loads(self.client.post('/location_mgr/info', {"action":"userdata", "username": "user1"}).content)
        self.assertEqual(data, {'userdata': {'username': 'user1', 'country': 'Turkey', 'state': 'Istanbul', 'city': 'Umraniye'}})
        data = json.loads(self.client.post('/location_mgr/info', {"action":"userdata"}).content)
        self.assertEqual(data, {})
        data = json.loads(self.client.post('/location_mgr/info', {"action":"near", "country": "Turkey", "state": "istanbul", "city": "-"}).content)
        self.assertEqual(data, {'near': ['user0', 'user1']})
        data = json.loads(self.client.post('/location_mgr/info', {"action":"near", "country": "Turkey", "state": "-", "city": "-"}).content)
        self.assertEqual(data, {'near': ['user0', 'user1', 'user2']})
        data = json.loads(self.client.post('/location_mgr/info', {"action":"near", "country": "Turkey"}).content)
        self.assertEqual(data, {'near': ['user0', 'user1', 'user2']})
        data = json.loads(self.client.post('/location_mgr/info', {"action":"near", "country": "fgh"}).content)
        self.assertEqual(data, {'near': []})
        data = json.loads(self.client.post('/location_mgr/info', {"action":"near", "country": "Turkey", "state": "sdf"}).content)
        self.assertEqual(data, {'near': []})
