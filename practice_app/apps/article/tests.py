from django.test import TestCase,SimpleTestCase, Client
from django.urls import reverse, resolve
from apps.article.views import api, index, list, search, deleteHistory
from apps.article.models import Article
import json

# Create your tests here.

class TestUrls(SimpleTestCase):

    def test_index_url(self):
        url = reverse('index')
        self.assertEquals(resolve(url).func, index)

    def test_search_url(self):
        url = reverse('search')
        self.assertEquals(resolve(url).func, search)

    def test_api_url(self):
        url = reverse('api')
        self.assertEquals(resolve(url).func, api)

    def test_list_url(self):
        url = reverse('list')
        self.assertEquals(resolve(url).func, list)

    def test_deleteHistory_url(self):
        url = reverse('deleteHistory')
        self.assertEquals(resolve(url).func, deleteHistory)

class TestViews(TestCase):
    
    def setUp(self):
        self.client = Client()

    def test_index_GET(self):
        response = self.client.get(reverse('index'))
        
        self.assertEquals(response.status_code,200)
        self.assertTemplateUsed(response ,'index.html')

    def test_list_GET(self):
        response = self.client.get(reverse('list'))

        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response,'list.html')

    def test_search_GET(self):
        response = self.client.get(reverse('search'))

        self.assertEquals(response.status_code,200)
        self.assertTemplateUsed(response ,'index.html')

    def test_search_POST(self):
        response = self.client.post(reverse('search'), {
            'subject': 'testSubject',
            'numberOfArticles': '5'
        })
        self.assertEquals(response.status_code,200)
        self.assertTemplateUsed(response,'search.html')

    def test_deleteHistory_POST(self):
        response = self.client.post(reverse('deleteHistory'))
        self.assertEquals(response.status_code,302)

    def test_api_GET(self):
        response =self.client.get(reverse('api'))
        self.assertEquals(response.status_code,200)

    def test_api_POST_correct_call(self):
        response = self.client.post(reverse('api'),{
            'subject':'test',
            'numberOfArticles':'3'
        })
        self.assertEquals(response.status_code,200)

    def test_api_POST_missing_numberOfArticles(self):
        response = self.client.post(reverse('api'),{
            'subject':'test',
        })
        self.assertEquals(response.status_code,400)
    
    def test_api_POST_missing_subject(self):
        response = self.client.post(reverse('api'),{
            'numberOfArticles':'3',
        })
        self.assertEquals(response.status_code,400)

    def test_api_POST_wrong_type(self):
        response = self.client.post(reverse('api'),{
            'subject':'test',
            'numberOfArticles':'test'
        })
        self.assertEquals(response.status_code,400)
    
    def test_api_POST_out_of_range(self):
        response = self.client.post(reverse('api'),{
            'subject':'test',
            'numberOfArticles':'101'
        })
        self.assertEquals(response.status_code,400)

    def test_api_POST_negative_number(self):
        response = self.client.post(reverse('api'),{
            'subject':'test',
            'numberOfArticles':'-1'
        })
        self.assertEquals(response.status_code,400)

class TestModels(TestCase):

    def test_model_to_string(self):
        article1 = Article.objects.create(
            Article_title = "title1",
            Article_summary = "summary1",
            Article_authors = "author1",
            Article_link = "link1",
        )
        print(article1)
        self.assertEquals(article1.__str__(),"title1")