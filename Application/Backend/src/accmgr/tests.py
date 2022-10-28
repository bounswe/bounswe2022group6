from re import I
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

    # Note that there are more cases for special characters but they do not need to be tested aswell

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

    def test_gender_choice(self):
        response = self.client.post('/register/', { "username": "mark", "email": "mark.zucky@facadeledger.com",
                "password": "passWord!", "gender":"y", "birth_day":"06", "birth_month":"10", "birth_year":"1970"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user registration failed')
        self.assertEqual(response_content["error"], "{'gender': [\"Value 'Y' is not a valid choice.\"]}")
        self.assertEqual(response.status_code, 400)

    # Note that this applies to each date field

    def test_date_integer(self):
        response = self.client.post('/register/', { "username": "mark", "email": "mark.zucky@facadeledger.com",
                "password": "passWord!", "gender":"m", "birth_day":"06", "birth_month":"a", "birth_year":"1970"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user registration failed')
        self.assertEqual(response_content["error"], "{'birth_month': ['Enter an integer.']}")
        self.assertEqual(response.status_code, 400)
    
    # This does not prevent entering very small values, just check invalid dates

    def test_bad_date(self):
        response = self.client.post('/register/', { "username": "mark", "email": "mark.zucky@facadeledger.com",
                "password": "passWord!", "gender":"m", "birth_day":"223", "birth_month":"10", "birth_year":"1970"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user registration failed')
        self.assertEqual(response_content["error"], "{'birth_date': ['day is out of range for month']}")
        self.assertEqual(response.status_code, 400)

    def test_bad_email(self):
        response = self.client.post('/register/', { "username": "mark", "email": "zuckymucky",
                "password": "passWord!", "gender":"m", "birth_day":"06", "birth_month":"10", "birth_year":"1970"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user registration failed')
        self.assertEqual(response_content["error"], "{'email': ['Enter a valid email address.']}")
        self.assertEqual(response.status_code, 400)

    def test_success(self):
        response = self.client.post('/register/', { "username": "mark", "email": "mark.zucky@facadeledger.com",
                "password": "passWord!", "gender":"m", "birth_day":"06", "birth_month":"10", "birth_year":"1970"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user registration successful')
        self.assertEqual(response_content["userID"], 1)
        self.assertEqual(response.status_code, 201)

    def test_duplicate_username(self):
        self.client.post('/register/', { "username": "mark", "email": "mark.zucky@facadeledger.com",
                "password": "passWord!", "gender":"m", "birth_day":"06", "birth_month":"10", "birth_year":"1970"})

        response = self.client.post('/register/', { "username": "mark", "email": "mark.zuckymucky@facadeledger.com",
                "password": "passWord!", "gender":"m", "birth_day":"06", "birth_month":"10", "birth_year":"1970"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user registration failed')
        self.assertEqual(response_content["error"], "{'username': ['User with this Username already exists.']}")
        self.assertEqual(response.status_code, 400)

    def test_duplicate_email(self):
        self.client.post('/register/', { "username": "mark", "email": "mark.zucky@facadeledger.com",
                "password": "passWord!", "gender":"m", "birth_day":"06", "birth_month":"10", "birth_year":"1970"})

        response = self.client.post('/register/', { "username": "markzucky", "email": "mark.zucky@facadeledger.com",
                "password": "passWord!", "gender":"m", "birth_day":"06", "birth_month":"10", "birth_year":"1970"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user registration failed')
        self.assertEqual(response_content["error"], "{'email': ['User with this Email already exists.']}")
        self.assertEqual(response.status_code, 400)

class LoginTest(TestCase):

    def test_fields(self):
        response = self.client.post('/login/', { "useridentifier": "markine"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user login failed')
        self.assertEqual(response_content["error"], "{'form_data': ['Missing form data.']}")
        self.assertEqual(response.status_code, 400)

    def test_username(self):
        response = self.client.post('/login/', { "useridentifier": "markine", "password": "markineworld"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user login failed')
        self.assertEqual(response_content["error"], "{'username': ['No user with such username.']}")
        self.assertEqual(response.status_code, 400)

    def test_email(self):
        response = self.client.post('/login/', { "useridentifier": "markine@facadeledger.com", "password": "markineworld"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user login failed')
        self.assertEqual(response_content["error"], "{'email': ['No user with such email.']}")
        self.assertEqual(response.status_code, 400)

    def test_password_username(self):
        self.client.post('/register/', { "username": "markine", "email": "markine@facadeledger.com",
                "password": "markineworld", "gender":"f", "birth_day":"12", "birth_month":"3", "birth_year":"1988"})
        response = self.client.post('/login/', { "useridentifier": "markine", "password": "markineworld123"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user login failed')
        self.assertEqual(response_content["error"], "{'password': ['Password incorrect']}")
        self.assertEqual(response.status_code, 401)

    def test_password_email(self):
        self.client.post('/register/', { "username": "markine", "email": "markine@facadeledger.com",
                "password": "markineworld", "gender":"f", "birth_day":"12", "birth_month":"3", "birth_year":"1988"})
        response = self.client.post('/login/', { "useridentifier": "markine@facadeledger.com", "password": "markineworld123"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], 'user login failed')
        self.assertEqual(response_content["error"], "{'password': ['Password incorrect']}")
        self.assertEqual(response.status_code, 401)

    def test_success(self):
        self.client.post('/register/', { "username": "markine", "email": "markine@facadeledger.com",
                "password": "markineworld", "gender":"f", "birth_day":"12", "birth_month":"3", "birth_year":"1988"})
        response = self.client.post('/login/', { "useridentifier": "markine", "password": "markineworld"})
        response_content = json.loads(response.content)
        self.assertEqual(response_content["info"], "user login successful")
        self.assertIn("token", response_content.keys())
        self.assertEqual(response.status_code, 200)