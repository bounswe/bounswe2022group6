from django.test import TransactionTestCase
from .models import *
import json

class TestViews(TransactionTestCase):

    def test_register_post(self):
        message = json.loads(self.client.post('/register', { "username": "user1", "email": "local@user.com",
                "password": "passWord!", "gender":"m", "birth_day":"06", "birth_month":"10", "birth_year":"1970"}).content)
        self.assertEqual(message['info'], 'success')
        message = json.loads(self.client.post('/register', { "username": "user2@user.com", "email": "local@user.com",
                "password": "passWord!", "gender":"M", "birth_day":"06", "birth_month":"10", "birth_year":"1970"}).content)
        self.assertEqual(message['info'], 'failure')
        message = json.loads(self.client.post('/register', { "username": "user3", "email": "local@user.com",
                "password": "passWord!", "gender":"q", "birth_day":"06", "birth_month":"10", "birth_year":"1970"}).content)
        self.assertEqual(message['info'], 'failure')
        self.assertEqual(User.objects.count(), 1)

# Create your tests here.
