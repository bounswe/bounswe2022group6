from django.test import TestCase, Client
from .models import *
import json

class LabelsTest(TestCase):

    def setUp(self):
        self.client = Client()
        Label.objects.create(labelName="test", labelType="c", labelColor="#000000", parentLabel=None)

    def test_labels(self):
        response = self.client.get('/contmgr/labels/')
        response_content = json.loads(response.content)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response_content, {"labels": [{"labelID": 1, "labelName": "test", "labelType": "c", "labelColor": "#000000", "parentLabel": None}]})
