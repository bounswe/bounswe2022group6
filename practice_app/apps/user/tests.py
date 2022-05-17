from django.test import TestCase,SimpleTestCase, Client
from django.urls import reverse, resolve
from apps.user.views import *
from apps.user.models import User
from apps.user.forms import UserForm
import json

# Create your tests here.

class TestUrls(SimpleTestCase):

    def test_index_url(self):
        url = reverse('user:user-home')
        self.assertEquals(resolve(url).func, index)

    def test_list_url(self):
        url = reverse('user:user-list')
        self.assertEquals(resolve(url).func, userList)

    def test_detail_url(self):
        url = reverse('user:user-detail')
        self.assertEquals(resolve(url).func, userDetail)
    
    def test_detail_worker_url(self):
        url = reverse('user:user-detail-worker')
        self.assertEquals(resolve(url).func, userDetailWorker)
    
    def test_create_url(self):
        url = reverse('user:user-create')
        self.assertEquals(resolve(url).func, userCreate)
    
    def test_create_worker_url(self):
        url = reverse('user:user-create-worker')
        self.assertEquals(resolve(url).func,userCreateWorker)

class TestViews(TestCase):

    def setUp(self):
        self.client = Client()

        user_data={
            'username':'name1',
            'password':'password1',
            'mail':'mail@mail.com',
            'horoscope':'aquarius' 
        }

        self.new_data = {
            'username':'name2',
            'password':'password2',
            'mail':'mail@mail.com',
            'horoscope':'aquarius'
        }

        self.user_ = User.objects.create(**user_data)

    def test_index_GET(self):
        response = self.client.get(reverse('user:user-home'))
        
        self.assertEquals(response.status_code,200)
        self.assertTemplateUsed(response ,'user-home.html')

    def test_user_list_GET(self):
        response = self.client.get(reverse('user:user-list'))
        
        self.assertEquals(response.status_code,200)
        self.assertTemplateUsed(response ,'user-list.html')


    def test_user_detail_GET(self):
        response = self.client.get(reverse('user:user-detail'),{'id':1})
        
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'user-detail.html')
        self.assertEquals(self.user_.username, 'name1')
        self.assertEquals(self.user_.password, 'password1')
        self.assertEquals(self.user_.mail, 'mail@mail.com')
        self.assertEquals(self.user_.horoscope, 'aquarius')

    def test_user_create_POST(self):
        response = self.client.post(reverse('user:user-create-worker'),self.new_data)
        new_user = User.objects.get(id=2)

        self.assertEquals(response.status_code,200)
        self.assertTemplateUsed(response ,'user-create.html')
        self.assertEquals(new_user.username, 'name2')
        self.assertEquals(new_user.password, 'password2')
        self.assertEquals(new_user.mail, 'mail@mail.com')
        self.assertEquals(new_user.horoscope, 'aquarius')

class TestModels(TestCase):
    
    def test_model_to_string(self):
        user1 = User.objects.create(
            username="name1",
            password="password1",
            mail="mail@mail.com",
            horoscope="aquarius"
        )
        print(user1)
        self.assertEquals(user1.__str__(), "name1")

class TestForms(SimpleTestCase):

    def test_user_form_valid(self):
        form = UserForm(data={
            'username':'name1',
            'password':'password1',
            'mail':'mail@mail.com',
            'horoscope':'aquarius' 
        })

        self.assertTrue(form.is_valid())

    def test_user_form_nodata(self):
        form = UserForm(data={})

        self.assertFalse(form.is_valid())
        self.assertEquals(len(form.errors),4)