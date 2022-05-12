from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
import requests
from rest_framework import status
from django.utils.decorators import method_decorator

class api(APIView):

    def get(self, request):
    
        r = requests.get("https://health.gov/myhealthfinder/api/v3/itemlist.json?type=category").json()
        
        advice_categories=set()
        
        for advice_category in r["Result"]["Items"]["Item"]:
            advice_categories.add(advice_category["Title"])
            
        advice_categories = list(advice_categories)

        return JsonResponse({"advice_categories":advice_categories}, status=status.HTTP_200_OK)
    