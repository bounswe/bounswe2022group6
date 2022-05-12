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
    
    def post(self, request):
    
        user_age=request.POST["age"]
        user_sex=request.POST["sex"]
        user_tobaccoUse=request.POST["tobaccoUse"]
        user_sexuallyActive=request.POST["sexuallyActive"]
        
        r = requests.get(f"https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?lang=en&age={user_age}&sex={user_sex}&tobaccoUse={user_tobaccoUse}&sexuallyActive={user_sexuallyActive}&category=some").json()
        
        advice_list=[]
        
        i=1
        
        for advice in r["Result"]["Resources"]["some"]["Resource"]:
            advice_list.append({"index":i, "advice_title":advice["MyHFTitle"], "advice_desc":advice["MyHFDescription"].lstrip("<p>").rstrip(" (USPSTF)</p>\r\n").replace("\u2014&nbsp", "")})
            i += 1
    
        return JsonResponse({"advice_list":advice_list}, status=status.HTTP_200_OK)