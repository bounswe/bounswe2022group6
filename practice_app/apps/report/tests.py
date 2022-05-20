from django.test import TestCase,SimpleTestCase, Client
from django.urls import reverse, resolve
from apps.report.views import *
from apps.report.models import Report
from apps.report.forms import ReportForm
import json

# Create your tests here.

class TestUrls(SimpleTestCase):

    def test_api_GET(self):
        response = self.client.get("/report/")
        self.assertEquals(response.status_code, 200)
