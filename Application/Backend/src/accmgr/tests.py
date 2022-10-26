from django.test import TestCase, Client
from .models import *
import json

class RegistrationTest(TestCase):

    def setUp(self):
        self.client = Client()

    def test_fields(self):
        response = self.client.post('/register/', { "username": "mark", "email": "mark.zucky@facadeledger.com",
                "password": "passWord!", "gender":"m", "birth_day":"06", "birth_month":"10"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user registration failed')
        self.assertEqual(response_content["error"], "{'form_data': ['Missing form data.']}")
        self.assertEqual(response.status_code, 400)

    def test_bad_username(self):
        response = self.client.post('/register/', { "username": "mark.zucky", "email": "mark.zucky@facadeledger.com",
                "password": "passWord!", "gender":"m", "birth_day":"06", "birth_month":"10", "birth_year":"1970"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user registration failed')
        self.assertEqual(response_content["error"], "{'username': ['Enter a valid value.']}")
        self.assertEqual(response.status_code, 400)

    def test_long_username(self):
        response = self.client.post('/register/', { "username": "markzuckyzuckerson", "email": "mark.zucky@facadeledger.com",
                "password": "passWord!", "gender":"m", "birth_day":"06", "birth_month":"10", "birth_year":"1970"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user registration failed')
        self.assertEqual(response_content["error"], "{'username': ['Ensure this value has at most 16 characters (it has 18).']}")
        self.assertEqual(response.status_code, 400)

    def test_short_username(self):
        response = self.client.post('/register/', { "username": "mk", "email": "mark.zucky@facadeledger.com",
                "password": "passWord!", "gender":"m", "birth_day":"06", "birth_month":"10", "birth_year":"1970"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user registration failed')
        self.assertEqual(response_content["error"], "{'username': ['Ensure this value has at least 3 characters (it has 2).']}")
        self.assertEqual(response.status_code, 400)