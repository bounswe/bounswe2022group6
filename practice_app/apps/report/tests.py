from django.test import TestCase,SimpleTestCase, Client
from django.urls import reverse, resolve
from apps.report.views import *
from apps.report.models import Report
from apps.report.forms import ReportForm
import json

# Create your tests here.

class TestUrls(SimpleTestCase):

    def test_index_url(self):
        url = reverse('report:report-home')
        self.assertEquals(resolve(url).func, index)

    def test_list_url(self):
        url = reverse('report:report-list')
        self.assertEquals(resolve(url).func, reportList)
