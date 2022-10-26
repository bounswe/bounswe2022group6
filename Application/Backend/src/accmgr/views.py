from rest_framework.views import APIView
from django.http import JsonResponse
from datetime import date
from hashlib import sha256
from .models import *

class RegisterUser(APIView):

    def post(self, req):

        # Check if all fields are present

        try:
            username = req.POST["username"]
            email = req.POST["email"]
            gender = req.POST["gender"]
            birth_year_str = req.POST["birth_year"]
            birth_month_str = req.POST["birth_month"]
            birth_day_str = req.POST["birth_day"]
            password = req.POST["password"]
        except:
            return JsonResponse({"info":"user registration failed", "error": "{'form_data': ['Missing form data.']}"}, status=400)

        # Remove spaces and format

        username = username.strip()
        email = email.lower().strip()
        gender = gender.upper().strip()
        birth_year_str = birth_year_str.strip()
        birth_month_str = birth_month_str.strip()
        birth_day_str = birth_day_str.strip()

        # Hassh password

        password_hash = sha256(password.encode("UTF-8")).hexdigest()

        ## These checks are about the validity of the data sent independent of the database constraints

        # Check if birth date fields are all integers

        try:
            birth_day = int(birth_day_str)
        except :
            return JsonResponse({"info":"user registration failed", "error": "{'birth_day': ['Enter an integer.']}"}, status=400)
        
        try:
            birth_month = int(birth_month_str)
        except :
            return JsonResponse({"info":"user registration failed", "error": "{'birth_month': ['Enter an integer.']}"}, status=400)

        try:
            birth_year = int(birth_year_str)
        except :
            return JsonResponse({"info":"user registration failed", "error": "{'birth_year': ['Enter an integer.']}"}, status=400)

        # Check if birth date fields comply with real date system

        try:
            birth_date = date(birth_year, birth_month, birth_day)
        except Exception as e:
            return JsonResponse({"info":"user registration failed", "error": "{'birth_date': ['" + str(e) + "']}"}, status=400)
            
        new_user = User(username=username, email=email, password_hash=password_hash, birth_date=birth_date, gender=gender)

        ## This check is about the database constraints

        # Check if the fields comply with the database constraints

        try:
            new_user.save()
            return JsonResponse({"info": "user registration successful", "userID": new_user.userID}, status=201)
        except Exception as e:
            return JsonResponse({"info":"user registration failed", "error": str(e)}, status=400)
