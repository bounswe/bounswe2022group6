import json
from django.shortcuts import render
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.views import APIView
from django.http import JsonResponse
from .models import *
import requests

class home(APIView):

    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'drug_side_effects_home.html'

    def get(self, request):
        #return the main page of application if the request is a GET request
        return render(request, 'drug_side_effects_home.html', status=200)

    def post(self, request):
        #if request is a post request, find the form from request 
        form = request.POST.dict()
        #those if-else block defines the difference between post requests
        if 'get-side-effects' in request.POST:
            #get-side-effects searches the side effects of a medicine with a drug name parameter
            key = form.get("drug_name") #get the parameter from form.
            data = drugs.objects.filter(drug_name=key)  #get the data from db
            if len(data) > 0:
                list = data[0].side_effects.split(', ') #format the data
                return render(request, "drug_side_effects_home.html", context={'side_effects': list}, status=200)
            else: #in case of no data found in the db returns another context instead of an empty list.
                return render(request, "drug_side_effects_home.html", context={'side_effects': ["No medicine found!"]}, status=404)

        elif 'add-drug' in request.POST:
            #add-drug endpoint is used to create a new drug-side effects pair
            error_message = "Something went wrong! New drug couldn't be added! Please ask someone authorized!"  #default error message
            try:
                drug_name = form.get("drug_name")   #get relevant data from request's form
                side_effects = form.get("side_effects") #get relevant data from request's form
                data = drugs.objects.filter(drug_name=drug_name)    #search the db if the given medicine is exist on the db or not
                if len(data) > 0:
                    error_message = "Medicine already exists!"  #if medicine exists change the error message 
                    raise Exception("Medicine already exists!") #throw error
                newdrug = drugs(drug_name=drug_name, side_effects=side_effects) #if medicine not exists create a new pair with given parameters to the db
                newdrug.save()
                #return the page with notification message if everything ok
                return render(request, "drug_side_effects_home.html", context={'new_drug': "New medicine " + drug_name + " added successfully!"}, status=200)
            except:
                #in case of a problem return the page with a error_message context.
                return render(request, "drug_side_effects_home.html", context={'new_drug': error_message}, status=401)

        else:
            #last method to post is when we used the external api to search medicine
            try:
                drug_name = form.get("drug_name")    #get the parameter from the request
                url = "https://medicine-name-and-details.p.rapidapi.com/"
                querystring = {"medicineName": drug_name}
                headers = {
                    "X-RapidAPI-Host": "medicine-name-and-details.p.rapidapi.com",
                    "X-RapidAPI-Key": "bea8c05660mshd8ab7e2aa08458fp17235ejsnc688f8a667cf"
                }
                response = requests.request("GET", url, headers=headers, params=querystring)     #send request and get the response

                return render(request, "drug_side_effects_home.html", context={'drug_list': json.loads(response.text)}, status=200) #return the formatted response
            except:
                return JsonResponse("message: Something went wrong!", status=503)   #since there is a possibilty of an external error, I return the message of Something went wrong.

