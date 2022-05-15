from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from django.http import HttpResponseRedirect
import requests
import json
from rest_framework import status
from django.utils.decorators import method_decorator
from .models import AdviceUser

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
        
        ad_user=AdviceUser.objects.create(age=user_age, sex=user_sex, tobaccoUse=user_tobaccoUse, sexuallyActive=user_sexuallyActive)
        ad_user.save()
        
        r = requests.get(f"https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?lang=en&age={user_age}&sex={user_sex}&tobaccoUse={user_tobaccoUse}&sexuallyActive={user_sexuallyActive}&category=some").json()
        
        advice_list=[]
        
        i=1
        
        for advice in r["Result"]["Resources"]["some"]["Resource"]:
            advice_list.append({"index":i, "advice_title":advice["MyHFTitle"], "advice_desc":advice["MyHFDescription"].lstrip("<p>").rstrip(" (USPSTF)</p>\r\n").replace("\u2014&nbsp", "")})
            i += 1
            
        return JsonResponse({"advice_list":advice_list}, status=status.HTTP_200_OK)
        
class advice_home(APIView):

    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'adviceHome.html'

    def get(self, request):
    
        # GET request to the advice/api
        
        r=api.as_view()(request=request._request)
        
        # Extract the contents of the response as a JSON string
        
        r_str=str(r.content).lstrip("b'").rstrip("'")
        
        # Convert JSON response string back to dictionary to pass to the Response method as context
        
        c=json.loads(r_str)
        
        return Response(c, status=status.HTTP_200_OK)
        
    def post(self, request):
    
        # POST request to the advice/api
        
        r_post=api.as_view()(request=request._request)
        
        # Extract the contents of the response as a JSON string
        
        r_post_str=str(r_post.content).lstrip("b'").rstrip("'")
        
        # Convert JSON response string back to dictionary to pass to the Response method as context
        
        c=json.loads(r_post_str)
        
        current_url=request.build_absolute_uri()
        
        r_get=requests.get(current_url+"api")
        
        r_get_str=str(r_get.content).lstrip("b'").rstrip("'")
        
        c.update(json.loads(r_get_str))
        
        return Response(c, status=status.HTTP_200_OK)
        