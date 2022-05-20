import json
import requests
from django.http import JsonResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view


@api_view(['GET', 'POST'])
def api(request):
    req = requests.get('https://coronavirus.m.pipedream.net/').json()
    # takes region name as parameter "country_name"
    country_name = request.POST['country_name']
    r = [x for x in req['rawData'] if x['Combined_Key'] == country_name][0]
    # selects the necessary data from the raw data
    corona_dict = {
        'Last_Update': r['Last_Update'].split()[0],
        'Confirmed': r['Confirmed'],
        'Recovered': r['Recovered'],
        'Deaths': r['Deaths'],
        'Case_Fatality_Ratio': round(float(r['Case_Fatality_Ratio']), 3)
    }
    # returns the necessary data in JSON form
    return JsonResponse(corona_dict, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
def home(request):
    with open('apps/coronavirus/Combined_Keys.txt') as file:
        lines = file.readlines()
        lines = sorted(line.rstrip() for line in lines)

        data = {'combined_keys': lines}

        if request.method == 'GET':
            # GET request to the coronavirus api
            return render(request, 'coronavirus.html', data)
        else:
            # POST request to the coronavirus api
            country_name = request.POST['country_name']
            r = api(request._request)
            r_str = str(r.content).lstrip("b'").rstrip("'")
            # Convert JSON response string back to dictionary to pass to the Response method as context
            c = json.loads(r_str)
            c['country_name'] = country_name
            return render(request, 'displaydata.html', c)
