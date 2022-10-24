from rest_framework.views import APIView
from django.http import JsonResponse
from datetime import date
from hashlib import sha256
from .models import *

class RegisterUser(APIView):

    def post(self, req):
        try:
            username = req.POST.get("username", None).strip()
            email = req.POST.get("email", None).lower().strip()
            gender = req.POST.get("gender", None).upper().strip()
            birth_year = int(req.POST.get("birth_year", None).strip())
            birth_month = int(req.POST.get("birth_month", None).strip())
            birth_day = int(req.POST.get("birth_day", None).strip())
            birth_date = date(birth_year, birth_month, birth_day)
            password_hash = sha256(req.POST.get("password", None).encode('UTF-8')).hexdigest()

            new_user = User(username=username, email=email, password_hash=password_hash, birth_date=birth_date, gender=gender)

            new_user.save()
            return JsonResponse({"info": "Success!", "user": new_user.userID})
        except Exception as e:
            return JsonResponse({"info": "Fail!", "error": str(e)})
