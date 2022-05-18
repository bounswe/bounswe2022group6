from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.renderers import TemplateHTMLRenderer
from django.http import JsonResponse
from django.http import HttpRequest

class Index(APIView):
    renderer_classes = [TemplateHTMLRenderer]
    template_name = 'home.html'

    def get(self, req):
        return Response({})
