from django.forms import ModelForm
from .models import *

# Create the form class.
class HospitalCreationForm(ModelForm):
    class Meta:
        model = Hospital
        fields = "__all__"
