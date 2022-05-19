from django.test import TestCase

class NewsTest(TestCase):

    def test_news_index(self):
        response = self.client.get('/news/')
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response ,'news_index.html')

    def test_news_list_without_query(self):
        response = self.client.get('/news/newsWithoutQuery')
        self.assertEquals(response.status_code, 200)
    
    def test_news_list_with_query(self):
        response = self.client.post('/news/newsWithQuery', {"country": "Turkey", "start_date":"","keyword": "corona", "sort": "popularity"})
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response ,'news_list.html')