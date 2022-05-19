from django.db import models

# Create your models here.

      # "hospital_id": "1",
      #  "hospital_org_id": "1",
      #  "ein": "630307951",
      #  "name": "Mizell Memorial Hospital",
      #  "name_cr": "Mizell Memorial Hospital",
      #  "street_address": "702 Main Street",
      #  "city": "Opp",
      #  "state": "AL",
      #  "zip_code": "36462",
      #  "fips_state_and_county_code": "01039",
      #  "hospital_bed_count": "99",
      #  "chrch_affl_f": "N",
      #  "urban_location_f": "N",
      #  "children_hospital_f": "N",
      #  "memb_counc_teach_hosps_f": "N",
      #  "medicare_provider_number": "010007",
      #  "county": "Covington County",
      #  "hospital_bed_size": "<100 beds",
      #  "updated_dt": "May 12, 2022"

class Hospital(models.Model):
    hospital_id = models.IntegerField(default=0, unique=True)
    hospital_org_id = models.CharField(default=None, blank=True, max_length=1)
    ein = models.CharField(default=None, blank=True, max_length=9)
    name = models.CharField(default=None, null=True, blank=True, max_length=255)
    name_cr = models.CharField(default=None, null=True, blank=True, max_length=255)
    street_address = models.CharField(default=None, null=True, blank=True, max_length=255)
    city = models.CharField(default=None, null=True, blank=True, max_length=255)
    state = models.CharField(default=None, blank=True, max_length=2)
    zip_code = models.CharField(default=None, null=True, blank=True, max_length=7)
    fips_state_and_county_code = models.CharField(default=None, blank=True, max_length=5)
    hospital_bed_count =models.CharField(default=None, blank=True, max_length=3)
    chrch_affl_f = models.CharField(default=None, blank=True, max_length=1)
    urban_location_f = models.CharField(default=None, blank=True, max_length=1)
    children_hospital_f = models.CharField(default=None, blank=True, max_length=1)
    memb_counc_teach_hosps_f = models.CharField(default=None, blank=True, max_length=1)
    medicare_provider_number = models.CharField(default=None, blank=True, max_length=6)
    county = models.CharField(default=None, null=True, blank=True, max_length=255)
    hospital_bed_size = models.CharField(default=None, null=True, blank=True, max_length=255)
    updated_dt = models.CharField(default=None, null=True, blank=True, max_length=255)
