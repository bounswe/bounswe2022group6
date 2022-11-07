from django.http import JsonResponse
from rest_framework.views import APIView
from .models import *

class Info(APIView):
    # Return location list
    def get(self, req):
        country = req.GET.get("country", None)
        state = req.GET.get("state", None)
        if country:
            country = country.title()
            if state:
                state = state.title()
                return JsonResponse(list(Cities.objects.filter(state__name= state, country__name= country).order_by('name').values_list('name', flat=True)), safe=False)
            return JsonResponse(list(States.objects.filter(country__name= country).order_by('name').values_list('name', flat=True)), safe=False)
        if state:
            state = state.title()
            return JsonResponse(list(Cities.objects.filter(state__name= state).order_by('name').values_list('name', flat=True)), safe=False)
        return JsonResponse(list(Countries.objects.all().order_by('name').values_list('name', flat=True)), safe=False)
