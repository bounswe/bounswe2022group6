from django.test import TestCase
from apps.drug_side_effects.models import drugs
import time

class TestingViews(TestCase):

    def test_home(self):
        response = self.client.get('/drug-side-effects/')
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response ,'drug_side_effects_home.html')

    def test_add_drug(self):
        response = self.client.post('/drug-side-effects/', {"add-drug": "add-drug", "drug_name": time.time(), "side_effects": "test_side_effect"})
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response,'drug_side_effects_home.html')

    def test_side_effects_drug(self):
        newDrug = drugs(drug_name = "test_drug", side_effects="test_side_effect")
        newDrug.save()
        response = self.client.post('/drug-side-effects/', {"get-side-effects": "get-side-effects", "drug_name": "test_drug"})
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response,'drug_side_effects_home.html')
    
    def test_external_api(self):
        response = self.client.post('/drug-side-effects/', {"drug_name": "test_drug"})
        self.assertEquals(response.status_code, 200)
        self.assertTemplateUsed(response,'drug_side_effects_home.html')



class ModelTest(TestCase):

    def test_model(self):

        newdrug = drugs.objects.create(
            drug_name = "test_drug",
            side_effects = "test_side_effect",
        )
        self.assertEquals(newdrug.drug_name,"test_drug")