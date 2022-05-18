from http import client
from django.test import SimpleTestCase, TestCase, Client
from django.urls import reverse,resolve
from apps.post.views import *
from apps.post.models import Post
import json

class TestingUrls(SimpleTestCase):

    def test_postindex_url(self):
        url = reverse('postindex')
        self.assertEquals(resolve(url).func, postindex)

    def test_postindexHome_url(self):
        url = reverse('indexHome')
        self.assertEquals(resolve(url).func, postindex)

    def test_getPost_url(self):
        url = reverse('getPost')
        self.assertEquals(resolve(url).func, getPost)

    def test_createPost_url(self):
        url = reverse('createPost')
        self.assertEquals(resolve(url).func, createPost)

class TestingViews(TestCase):

    def setUp(self):
        self.client = Client()

        post_info = {
            'title': 'title',
            'description': 'desc',
            'post_type_label': 'label' 
        }

        self.new_data = {
            'post_id': 2,
            'title': 'new_title',
            'description': 'new_desc',
            'post_type_label': 'new_label'
        }

        self.post_ = Post.objects.create(**post_info)

    def test_postindex_GET(self):
        response = self.client.get(reverse('postindex'))
        
        self.assertEquals(response.status_code,200)
        self.assertTemplateUsed(response ,'postindex.html')

    
    def test_getPost_GET(self):
  
        response = self.client.get(reverse('getPost'), {'id': 1})
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'postDetail.html')
        self.assertEquals(self.post_.title, 'title')
        self.assertEquals(self.post_.description, 'desc')
        self.assertEquals(self.post_.post_type_label, 'label')

    def test_createPost_POST(self):

        response = self.client.post(reverse('createPost'), self.new_data)
        newpost = Post.objects.get(id=2)
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response, 'postindex.html')
        self.assertEquals(newpost.title, 'new_title')
        self.assertEquals(newpost.description, 'new_desc')
        self.assertEquals(newpost.post_type_label, 'new_label')



class TestingModels(TestCase):

    def test_model_to_string(self):

        post1 = Post.objects.create(
            title = "title1",
            description = "desc1",
            post_type_label = "label1",
            date = "date1",
        )
        self.assertEquals(post1.__str__(),"title1")

    

