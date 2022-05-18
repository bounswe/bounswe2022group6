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
        return render(request, 'drug_side_effects_home.html', status=200)

    def post(self, request):
        form = request.POST.dict()
        if 'get-side-effects' in request.POST:
            key = form.get("drug_name")
            data = drugs.objects.filter(drug_name=key)
            if len(data) > 0:
                list = data[0].side_effects.split(', ')
                return render(request, "drug_side_effects_home.html", context={'side_effects': list}, status=200)
            else:
                return render(request, "drug_side_effects_home.html", context={'side_effects': ["No medicine found!"]}, status=404)

        elif 'add-drug' in request.POST:
            error_message = "Something went wrong! New drug couldn't be added! Please ask someone authorized!"
            try:
                drug_name = form.get("drug_name")
                side_effects = form.get("side_effects")
                data = drugs.objects.filter(drug_name=drug_name)
                if len(data) > 0:
                    error_message = "Medicine already exists!"
                    raise Exception("Medicine already exists!")
                newdrug = drugs(drug_name=drug_name, side_effects=side_effects)
                newdrug.save()
                return render(request, "drug_side_effects_home.html", context={'new_drug': "New medicine " + drug_name + " added successfully!"}, status=200)
            except:
                return render(request, "drug_side_effects_home.html", context={'new_drug': error_message}, status=401)

        else:
            try:
                drug_name = form.get("drug_name")
                url = "https://medicine-name-and-details.p.rapidapi.com/"
                querystring = {"medicineName": drug_name}
                headers = {
                    "X-RapidAPI-Host": "medicine-name-and-details.p.rapidapi.com",
                    "X-RapidAPI-Key": "bea8c05660mshd8ab7e2aa08458fp17235ejsnc688f8a667cf"
                }
                response = requests.request("GET", url, headers=headers, params=querystring)

                return render(request, "drug_side_effects_home.html", context={'drug_list': json.loads(response.text)}, status=200)
            except:
                return JsonResponse("message: Something went wrong!", status=503)

