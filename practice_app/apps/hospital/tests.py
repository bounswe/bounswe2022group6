import requests
from django.test import TestCase, Client
from django.urls import reverse

from hospital.views import write_hospitals, getHospitals
from hospital.models import Hospital
from hospital.forms import HospitalCreationForm

testData = {"hospital_id": "1",
               "hospital_org_id": "1",
               "ein": "630307951",
               "name": "Mizell Memorial Hospital",
               "name_cr": "Mizell Memorial Hospital",
               "street_address": "702 Main Street",
               "city": "Opp",
               "state": "AL",
               "zip_code": "36462",
               "fips_state_and_county_code": "01039",
               "hospital_bed_count": "99",
               "chrch_affl_f": "N",
               "urban_location_f": "N",
               "children_hospital_f": "N",
               "memb_counc_teach_hosps_f": "N",
               "medicare_provider_number": "010007",
               "county": "Covington County",
               "hospital_bed_size": "<100 beds",
               "updated_dt": "May 12, 2022"
               }

class HospitalTests(TestCase):

    @classmethod
    def setUpTestData(cls):
        print("Preparing tests.")
        pass

    def setUp(self):
        pass

    def test_create_hospital(self):
        client = Client()
        url = reverse('post_hospital')
        resp = client.post(url, data=testData)
        self.assertEquals(Hospital.objects.get(city='Opp').hospital_id, int(testData['hospital_id']))

    def test_write_hospitals(self):
       result = write_hospitals()
       self.assertEquals(result, True)

    def test_get_hospitals(self):
        client = Client()
        Hospital.objects.create(**testData)
        url = reverse('get_city', kwargs={'city': 'Opp'})
        resp = client.get(url)
        self.assertEquals(resp.status_code, 200)

    def test_form_hospitals(self):
       form = HospitalCreationForm(data=testData)
       self.assertTrue(form.is_valid())