from django.shortcuts import render
from request_session import RequestSession
from rest_framework import generics
from rest_framework.response import Response
from django.shortcuts import redirect
from rest_framework.views import APIView
from .models import *
from .forms import *
import json
from django.views.generic import FormView, TemplateView


class IndexView(FormView):
    template_name = "index.html"
    form_class = HospitalCreationForm
    success_url = 'thanks'


class Thanks(TemplateView):
    template_name = "thanks.html"


class Error(TemplateView):
    template_name = "error.html"
    def get_context_data(self, **kwargs):
        context = super(Error, self).get_context_data(**kwargs)
        context['error'] = self.request.GET['e']
        return context



def write_hospitals(city=None):
    #Get request to external api with NO INPUTS:
    domain = RequestSession(
            host="https://www.communitybenefitinsight.org/", max_retries=1, raise_for_status=True
    )
    result = domain.get(
        path="api/get_hospitals.php",
        sleep_before_repeat=2,
        request_category="get_hospitals",
    )
    #Writing to db:
    items_list = []
    for item in result.json():
        items_list.append(Hospital(**item))
    try:
        Hospital.objects.bulk_create(items_list)
        return True
    except Exception as e:
         return False, e



class getHospitals(APIView):
    #Get method to find hotels:
    def get(self, request, city=None):
        if city:
            #Finding entities:
            entities = Hospital.objects.filter(city=city).values()
            if entities:
                return Response(entities, status=200)
            else:
                try:
                    write_hospitals(city)
                except:
                    pass
                return Response('Not Found', status=404)

    def post(self, request):
        d = dict(request.POST)
        d = {k: str(v[0]) for k,v in d.items()}
        s = d.pop('csrfmiddlewaretoken', None)
        try:
            Hospital.objects.create(**d)
            return redirect('/thanks')
        except Exception as e:
            return redirect('/error?e='+str(e))
