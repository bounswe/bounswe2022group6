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

# This class is for the operations of the advice app.

# GET requests return a JSON containing the advice categories and the user statistics
# The user statistics contain the male and female counts, smoker and non-smoker counts, sexuall active and inactive counts and the ages of all users.

# POST requests return a JSON containing the list of advices with an index, a title and a short description.

class api(APIView):

    def get(self, request):
    
        try:
            r = requests.get("https://health.gov/myhealthfinder/api/v3/itemlist.json?type=category").json()
        except Exception as e:
            return JsonResponse({"error": "There was an error with the response of the MyHealthFinder API."}, status=status.HTTP_502_BAD_GATEWAY)
        
        advice_categories=set()
        
        for advice_category in r["Result"]["Items"]["Item"]:
            advice_categories.add(advice_category["Title"])
            
        advice_categories = list(advice_categories)
        
        male_count=AdviceUser.objects.filter(sex="male").count()
        female_count=AdviceUser.objects.filter(sex="female").count()
        
        smoker_count=AdviceUser.objects.filter(tobaccoUse=1).count()
        non_smoker_count=AdviceUser.objects.filter(tobaccoUse=0).count()
        
        active_count=AdviceUser.objects.filter(sexuallyActive=1).count()
        inactive_count=AdviceUser.objects.filter(sexuallyActive=0).count()
        
        all_ages= []
        
        all_users=AdviceUser.objects.values("age")
        for usage in all_users:
            all_ages.append([usage["age"]])

        return JsonResponse({"advice_categories":advice_categories,
                             "statistics":{"male_count":male_count,
                                           "female_count":female_count,
                                           "smoker_count":smoker_count,
                                           "non_smoker_count":non_smoker_count,
                                           "active_count":active_count,
                                           "inactive_count":inactive_count,
                                           "all_user_ages":all_ages
                                          }
                            }, status=status.HTTP_200_OK)
    
    def post(self, request):
    
        # Check if all parameters are present
    
        try:
            user_age=request.POST["age"]
            user_sex=request.POST["sex"]
            user_tobaccoUse=request.POST["tobaccoUse"]
            user_sexuallyActive=request.POST["sexuallyActive"]
        except Exception as e:
            return JsonResponse({"error": "Missing parameter(s)."}, status=status.HTTP_400_BAD_REQUEST)
            
        # Check if age is an integer in the interval [0, 120]
        
        try:
            int(user_age)
        except Exception as e:
            return Response({"error": "'age' parameter has to be an integer."}, status=status.HTTP_400_BAD_REQUEST)
        
        if int(user_age) not in range(0, 121):
            return JsonResponse({"error": "'age' parameter has to be an integer between 0 and 120."}, status=status.HTTP_400_BAD_REQUEST)
            
        # Check if tobaccoUse is an integer which is 0 or 1
            
        if user_tobaccoUse != "0" and user_tobaccoUse != "1":
            return JsonResponse({"error": "'tobaccoUse' parameter has to be either 0 or 1."}, status=status.HTTP_400_BAD_REQUEST)
            
        # Check if sexuallyActive is an integer which is 0 or 1
            
        if user_sexuallyActive != "0" and user_sexuallyActive != "1":
            return JsonResponse({"error": "'sexuallyActive' parameter has to be either 0 or 1."}, status=status.HTTP_400_BAD_REQUEST)
            
        # Check if sex is male or female
        
        if user_sex != "male" and user_sex != "female":
            return JsonResponse({"error": "'sex' parameter has to be either male or female."}, status=status.HTTP_400_BAD_REQUEST)
        
        ad_user=AdviceUser.objects.create(age=user_age, sex=user_sex, tobaccoUse=user_tobaccoUse, sexuallyActive=user_sexuallyActive)
        ad_user.save()
        
        # Try to get a response from the MyHealthFinder API
        
        try:
            r = requests.get(f"https://health.gov/myhealthfinder/api/v3/myhealthfinder.json?lang=en&age={user_age}&sex={user_sex}&tobaccoUse={user_tobaccoUse}&sexuallyActive={user_sexuallyActive}&category=some").json()
        except Exception as e:
            return JsonResponse({"error": "There was an error with the response of the MyHealthFinder API."}, status=status.HTTP_502_BAD_GATEWAY)
            
        # Parse the returned JSON string and create the JSON response
        
        advice_list=[]
        
        i=1
        if "Resources" in r["Result"]:
            for advice in r["Result"]["Resources"]["some"]["Resource"]:
                advice_list.append({"index":i, "advice_title":advice["MyHFTitle"], "advice_desc":advice["MyHFDescription"].lstrip("<p>").rstrip(" (USPSTF)</p>\r\n").replace("\u2014&nbsp", "")})
                i += 1
            
        return JsonResponse({"advice_list":advice_list}, status=status.HTTP_200_OK)
        
class advice_home(APIView):

    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'adviceHome.html'

    def get(self, request):
    
        current_url=request.build_absolute_uri()
    
        # GET request to the advice/api
        
        r_get=requests.get(current_url+"api")
        
        if r_get.status_code == 502:
            return JsonResponse({"error": "There was an error with the response of the MyHealthFinder API."}, status=status.HTTP_502_BAD_GATEWAY)
        
        # Extract the contents of the response as a JSON string
        
        r_get_str=r_get.content.decode("utf-8")
        
        # Convert JSON response string back to dictionary to pass to the Response method as context
        
        c=json.loads(r_get_str)
        
        return Response(c, status=status.HTTP_200_OK)
        
    def post(self, request):
    
        current_url=request.build_absolute_uri()
        
        # Check if all parameters are present
    
        try:
            user_age=request.POST["age"]
            user_sex=request.POST["sex"]
            user_tobaccoUse=request.POST["tobaccoUse"]
            user_sexuallyActive=request.POST["sexuallyActive"]
        except Exception as e:
            return Response({"error": "Missing parameter(s)."}, status=status.HTTP_400_BAD_REQUEST)
            
        # Check if age is an integer in the interval [0, 120]
        
        try:
            int(user_age)
        except Exception as e:
            return Response({"error": "'age' parameter has to be an integer."}, status=status.HTTP_400_BAD_REQUEST)
        
        if int(user_age) not in range(0, 121):
            return Response({"error": "'age' parameter has to be an integer between 0 and 120."}, status=status.HTTP_400_BAD_REQUEST)
            
        # Check if tobaccoUse is an integer which is 0 or 1
            
        if user_tobaccoUse != "0" and user_tobaccoUse != "1":
            return Response({"error": "'tobaccoUse' parameter has to be either 0 or 1."}, status=status.HTTP_400_BAD_REQUEST)
            
        # Check if sexuallyActive is an integer which is 0 or 1
            
        if user_sexuallyActive != "0" and user_sexuallyActive != "1":
            return Response({"error": "'sexuallyActive' parameter has to be either 0 or 1."}, status=status.HTTP_400_BAD_REQUEST)
            
        # Check if sex is male or female
        
        if user_sex != "male" and user_sex != "female":
            return Response({"error": "'sex' parameter has to be either male or female."}, status=status.HTTP_400_BAD_REQUEST)
    
        # POST request to the advice/api
        
        r_post=requests.post(current_url+"api", data={"age": user_age, "sex": user_sex, "tobaccoUse": user_tobaccoUse, "sexuallyActive": user_sexuallyActive})
        
        if r_post.status_code == 502:
            return JsonResponse({"error": "There was an error with the response of the MyHealthFinder API."}, status=status.HTTP_502_BAD_GATEWAY)
        
        # Extract the contents of the response as a JSON string
        
        r_post_str=r_post.content.decode("utf-8")
        
        # Convert JSON response string back to dictionary to pass to the Response method as context
        
        c=json.loads(r_post_str)
        
        r_get=requests.get(current_url+"api")
        
        if r_get.status_code == 502:
            return JsonResponse({"error": "There was an error with the response of the MyHealthFinder API."}, status=status.HTTP_502_BAD_GATEWAY)
        
        r_get_str=r_get.content.decode("utf-8")
        
        c.update(json.loads(r_get_str))
        
        return Response(c, status=status.HTTP_200_OK)
        