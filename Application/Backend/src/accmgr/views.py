from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import login, logout
from django.http import JsonResponse
from datetime import date
from hashlib import sha256
from .models import *

class RegisterUser(APIView):

    permission_classes = ([AllowAny,])

    def post(self, req):

        # Check if all fields are present

        try:
            username = req.POST["username"]
            email = req.POST["email"]
            gender = req.POST["gender"]
            birth_year_str = req.POST["birth_year"]
            birth_month_str = req.POST["birth_month"]
            birth_day_str = req.POST["birth_day"]
            password_str = req.POST["password"]
        except:
            return JsonResponse({"info":"user registration failed", "error": "{'form_data': ['Missing form data.']}"}, status=400)

        # Remove spaces and format

        username = username.strip()
        email = email.lower().strip()
        gender = gender.upper().strip()
        birth_year_str = birth_year_str.strip()
        birth_month_str = birth_month_str.strip()
        birth_day_str = birth_day_str.strip()

        # check password length

        if len(password_str) < 6 or len(password_str) > 120:
            return JsonResponse({"info":"user registration failed", "error": "{'password': ['Password length must be between 6 and 120.']}"}, status=400)

        # Hassh password

        password = sha256(password_str.encode("UTF-8")).hexdigest()

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
        
        new_user = RegisteredUser(username=username, email=email, password=password, birth_date=birth_date, gender=gender)

        ## This check is about the database constraints

        # Check if the fields comply with the database constraints

        try:
            new_user.save()
            new_account = Account(owner=new_user)
            new_account.save()
            return JsonResponse({"info": "user registration successful", "userID": new_user.userID}, status=201)
        except Exception as e:
            return JsonResponse({"info":"user registration failed", "error": str(e)}, status=400)

class LoginUser(APIView):

    permission_classes = (AllowAny, )

    def post(self, req):

        try:
            useridentifier = req.POST["useridentifier"]
            password_str = req.POST["password"]
        except:
            return JsonResponse({"info":"user login failed", "error": "{'form_data': ['Missing form data.']}"}, status=400)

        user = None

        if "@" in useridentifier:
            try:
                user = RegisteredUser.objects.get(email=useridentifier)
            except:
                return JsonResponse({"info":"user login failed", "error": "{'email': ['No user with such email.']}"}, status=400)

        else:
            try:
                user = RegisteredUser.objects.get(username=useridentifier)
            except:
                return JsonResponse({"info":"user login failed", "error": "{'username': ['No user with such username.']}"}, status=400)

        password = sha256(password_str.encode("UTF-8")).hexdigest()

        if password != user.password:
            return JsonResponse({"info":"user login failed", "error": "{'password': ['Password incorrect']}"}, status=401)

        token = Token.objects.get_or_create(user=user)[0].key

        login(req, user)

        return JsonResponse({"info":"user login successful", "token":token}, status=200)

class LogoutUser(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self, req):

        req.user.auth_token.delete()
        logout(req)
        return JsonResponse({"detail": "user logout successful"}, status=200)


class Profile(APIView):
    
    permission_classes = (IsAuthenticated,)

    def get(self, req):
        profile = RegisteredUser.objects.get(username=req.user)
        profile_data = {

            "username": profile.username,
            "email": profile.email,
            "birth_date": profile.birth_date,
            "gender": profile.gender,
            "is_messaging_allowed": profile.is_messaging_allowed,
            "is_notifications_allowed": profile.is_notification_allowed,

            "first_name": profile.account.first_name,
            "last_name": profile.account.last_name,
            "profile_picture": profile.account.profile_picture,
            "phone_number": profile.account.phone_number,
            "verified_as_doctor": profile.account.verified_as_doctor,
            "profession": profile.account.profession,
            "location": profile.account.location,
            "diplomaID": profile.account.diplomaID,
        }

        return JsonResponse(profile_data, status=200)

    def put(self, req):
        # TODO: Can't change username
        # TODO: Can change email and others
        # TODO: Should be able to add Name and Surname
        return JsonResponse({})

    def delete(self, req):
        # TODO: Remove account with username
        return JsonResponse({})
