from django.test import TestCase, Client
from django.urls import reverse, resolve
from apps.advice.views import advice_api, advice_home
import json

class UrlTests(TestCase):

    def test_api_url(self):
        url = reverse("advice_api")
        self.assertEquals(resolve(url).func.__name__, advice_api.as_view().__name__)
        
    def test_home_url(self):
        url = reverse("advice_home")
        self.assertEquals(resolve(url).func.__name__, advice_home.as_view().__name__)
        
class ViewTests(TestCase):

    def setUp(self):
        self.client = Client()
        
    # Correct inputs
        
    def test_api_GET(self):
        response = self.client.get(reverse("advice_api"))
        self.assertEquals(response.status_code, 200)
        
    def test_api_POST_correct_1(self):
        response = self.client.post(reverse("advice_api"), {"age": "20", "sex": "male", "tobaccoUse": "0", "sexuallyActive": "0"})
        self.assertEquals(list(json.loads(response.content).keys()), ["advice_list"])
        self.assertEquals(response.status_code, 200)
        
    def test_api_POST_correct_2(self):
        response = self.client.post(reverse("advice_api"), {"age": "20", "sex": "female", "tobaccoUse": "0", "sexuallyActive": "0"})
        self.assertEquals(list(json.loads(response.content).keys()), ["advice_list"])
        self.assertEquals(response.status_code, 200)
        
    def test_api_POST_correct_3(self):
        response = self.client.post(reverse("advice_api"), {"age": "20", "sex": "male", "tobaccoUse": "1", "sexuallyActive": "0"})
        self.assertEquals(list(json.loads(response.content).keys()), ["advice_list"])
        self.assertEquals(response.status_code, 200)
        
    def test_api_POST_correct_4(self):
        response = self.client.post(reverse("advice_api"), {"age": "20", "sex": "male", "tobaccoUse": "0", "sexuallyActive": "1"})
        self.assertEquals(list(json.loads(response.content).keys()), ["advice_list"])
        self.assertEquals(response.status_code, 200)
        
    def test_api_POST_correct_5(self):
        response = self.client.post(reverse("advice_api"), {"age": "20", "sex": "female", "tobaccoUse": "1", "sexuallyActive": "0"})
        self.assertEquals(list(json.loads(response.content).keys()), ["advice_list"])
        self.assertEquals(response.status_code, 200)
        
    def test_api_POST_correct_6(self):
        response = self.client.post(reverse("advice_api"), {"age": "20", "sex": "female", "tobaccoUse": "0", "sexuallyActive": "1"})
        self.assertEquals(list(json.loads(response.content).keys()), ["advice_list"])
        self.assertEquals(response.status_code, 200)
        
    def test_api_POST_correct_7(self):
        response = self.client.post(reverse("advice_api"), {"age": "20", "sex": "male", "tobaccoUse": "1", "sexuallyActive": "1"})
        self.assertEquals(list(json.loads(response.content).keys()), ["advice_list"])
        self.assertEquals(response.status_code, 200)
        
    def test_api_POST_correct_8(self):
        response = self.client.post(reverse("advice_api"), {"age": "20", "sex": "female", "tobaccoUse": "1", "sexuallyActive": "1"})
        self.assertEquals(list(json.loads(response.content).keys()), ["advice_list"])
        self.assertEquals(response.status_code, 200)
        
    def test_api_POST_correct_all_ages(self):
        for i in range(0,121):
            response = self.client.post(reverse("advice_api"), {"age": str(i), "sex": "male", "tobaccoUse": "0", "sexuallyActive": "0"})
            self.assertEquals(list(json.loads(response.content).keys()), ["advice_list"])
            self.assertEquals(response.status_code, 200)
        
    # Bad inputs    
        
    def test_api_POST_noninteger_age(self):
        response = self.client.post(reverse("advice_api"), {"age": "test", "sex": "male", "tobaccoUse": "0", "sexuallyActive": "0"})
        self.assertEquals(json.loads(response.content)["error"], "'age' parameter has to be an integer.")
        self.assertEquals(response.status_code, 400)
        
    def test_api_POST_out_of_range_age_1(self):
        response = self.client.post(reverse("advice_api"), {"age": "140", "sex": "male", "tobaccoUse": "0", "sexuallyActive": "0"})
        self.assertEquals(json.loads(response.content)["error"], "'age' parameter has to be an integer between 0 and 120.")
        self.assertEquals(response.status_code, 400)
        
    def test_api_POST_out_of_range_age_2(self):
        response = self.client.post(reverse("advice_api"), {"age": "-20", "sex": "male", "tobaccoUse": "0", "sexuallyActive": "0"})
        self.assertEquals(json.loads(response.content)["error"], "'age' parameter has to be an integer between 0 and 120.")
        self.assertEquals(response.status_code, 400)
        
    def test_api_POST_non_male_or_female_sex(self):
        response = self.client.post(reverse("advice_api"), {"age": "20", "sex": "test", "tobaccoUse": "0", "sexuallyActive": "0"})
        self.assertEquals(json.loads(response.content)["error"], "'sex' parameter has to be either male or female.")
        self.assertEquals(response.status_code, 400)
        
    def test_api_POST_non_0_or_1_tobaccoUse_1(self):
        response = self.client.post(reverse("advice_api"), {"age": "20", "sex": "male", "tobaccoUse": "test", "sexuallyActive": "0"})
        self.assertEquals(json.loads(response.content)["error"], "'tobaccoUse' parameter has to be either 0 or 1.")
        self.assertEquals(response.status_code, 400)
        
    def test_api_POST_non_0_or_1_tobaccoUse_2(self):
        response = self.client.post(reverse("advice_api"), {"age": "20", "sex": "male", "tobaccoUse": "7", "sexuallyActive": "0"})
        self.assertEquals(json.loads(response.content)["error"], "'tobaccoUse' parameter has to be either 0 or 1.")
        self.assertEquals(response.status_code, 400)
        
    def test_api_POST_non_0_or_1_sexuallyActive_1(self):
        response = self.client.post(reverse("advice_api"), {"age": "20", "sex": "male", "tobaccoUse": "0", "sexuallyActive": "test"})
        self.assertEquals(json.loads(response.content)["error"], "'sexuallyActive' parameter has to be either 0 or 1.")
        self.assertEquals(response.status_code, 400)
        
    def test_api_POST_non_0_or_1_sexuallyActive_2(self):
        response = self.client.post(reverse("advice_api"), {"age": "20", "sex": "male", "tobaccoUse": "0", "sexuallyActive": "7"})
        self.assertEquals(json.loads(response.content)["error"], "'sexuallyActive' parameter has to be either 0 or 1.")
        self.assertEquals(response.status_code, 400)