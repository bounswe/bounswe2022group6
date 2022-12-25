from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.contrib.auth import login, logout
from django.http import JsonResponse
from datetime import date
from hashlib import sha256
from .models import *
from .serializers import *
import datetime


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
            return JsonResponse({"info": "user registration failed", "error": "{'form_data': ['Missing form data.']}"}, status=400)

        # Remove spaces and format

        username = username.strip()
        email = email.lower().strip()
        gender = gender.upper().strip()
        birth_year_str = birth_year_str.strip()
        birth_month_str = birth_month_str.strip()
        birth_day_str = birth_day_str.strip()

        # check password length

        if len(password_str) < 6 or len(password_str) > 120:
            return JsonResponse({"info": "user registration failed", "error": "{'password': ['Password length must be between 6 and 120.']}"}, status=400)

        # Hassh password

        password = sha256(password_str.encode("UTF-8")).hexdigest()

        # These checks are about the validity of the data sent independent of the database constraints

        # Check if birth date fields are all integers

        try:
            birth_day = int(birth_day_str)
        except:
            return JsonResponse({"info": "user registration failed", "error": "{'birth_day': ['Enter an integer.']}"}, status=400)

        try:
            birth_month = int(birth_month_str)
        except:
            return JsonResponse({"info": "user registration failed", "error": "{'birth_month': ['Enter an integer.']}"}, status=400)

        try:
            birth_year = int(birth_year_str)
        except:
            return JsonResponse({"info": "user registration failed", "error": "{'birth_year': ['Enter an integer.']}"}, status=400)

        # Check if birth date fields comply with real date system

        try:
            birth_date = date(birth_year, birth_month, birth_day)
        except Exception as e:
            return JsonResponse({"info": "user registration failed", "error": "{'birth_date': ['" + str(e) + "']}"}, status=400)

        today = datetime.date.today()
        current_year = today.year
        current_month = today.month
        current_day = today.day

        user_age = current_year - birth_year - \
            ((current_month, current_day) < (birth_month, birth_day))

        if (user_age < 18):
            return JsonResponse({"info": "user registration failed", "error": "{'birth_date': ['You cannot register to the site if you are under 18 years old.']}"}, status=400)

        new_user = RegisteredUser(username=username, email=email,
                                  password=password, birth_date=birth_date, gender=gender)

        # This check is about the database constraints

        # Check if the fields comply with the database constraints

        try:
            new_user.save()
            new_account = Account(owner=new_user)
            new_account.save()
            return JsonResponse({"info": "user registration successful", "userID": new_user.userID}, status=201)
        except Exception as e:
            return JsonResponse({"info": "user registration failed", "error": str(e)}, status=400)


class LoginUser(APIView):

    permission_classes = (AllowAny, )

    def post(self, req):

        try:
            useridentifier = req.POST["useridentifier"]
            password_str = req.POST["password"]
        except:
            return JsonResponse({"info": "user login failed", "error": "{'form_data': ['Missing form data.']}"}, status=400)

        user = None

        if "@" in useridentifier:
            try:
                user = RegisteredUser.objects.get(email=useridentifier)
            except:
                return JsonResponse({"info": "user login failed", "error": "{'email': ['No user with such email.']}"}, status=400)

        else:
            try:
                user = RegisteredUser.objects.get(username=useridentifier)
            except:
                return JsonResponse({"info": "user login failed", "error": "{'username': ['No user with such username.']}"}, status=400)

        password = sha256(password_str.encode("UTF-8")).hexdigest()

        if password != user.password:
            return JsonResponse({"info": "user login failed", "error": "{'password': ['Password incorrect']}"}, status=401)

        token = Token.objects.get_or_create(user=user)[0].key

        login(req, user)

        return JsonResponse({"info": "user login successful", "token": token}, status=200)


class LogoutUser(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self, req):

        req.user.auth_token.delete()
        logout(req)
        return JsonResponse({"detail": "user logout successful"}, status=200)


class Profile(APIView):

    permission_classes = (IsAuthenticated,)

    def get(self, req):
        user = RegisteredUser.objects.get(username=req.user)
        account = Account.objects.get(owner=user)

        data = RegisteredUserSerializer(user).data

        return JsonResponse(data, status=200)

    def post(self, req):

        email = req.POST.get("email", None)
        gender = req.POST.get("gender", None)
        birth_year_str = req.POST.get("birth_year", None)
        birth_month_str = req.POST.get("birth_month", None)
        birth_day_str = req.POST.get("birth_day", None)
        first_name = req.POST.get("first_name", None)
        last_name = req.POST.get("last_name", None)
        phone_number = req.POST.get("phone_number", None)
        profile_picture = req.POST.get("profile_picture", None)
        profession = req.POST.get("profession", None)
        location = req.POST.get("location", None)
        diplomaID = req.POST.get("diplomaID", None)

        # Remove spaces and format

        email = email.lower().strip() if email is not None else None
        gender = gender.upper().strip() if gender is not None else None
        birth_year_str = birth_year_str.strip() if birth_year_str is not None else None
        birth_month_str = birth_month_str.strip() if birth_month_str is not None else None
        birth_day_str = birth_day_str.strip() if birth_day_str is not None else None
        phone_number = phone_number.strip() if phone_number is not None else None
        profile_picture = profile_picture.strip() if profile_picture is not None else None
        profession = profession.strip() if profession is not None else None
        location = location.strip() if location is not None else None
        diplomaID = diplomaID.strip() if diplomaID is not None else None

        # Check if birth date fields are all integers

        if ((birth_day_str is not None) and (birth_month_str is not None) and (birth_year_str is not None)):
            try:
                birth_day = int(birth_day_str)
            except:
                return JsonResponse({"info": "user profile update failed", "error": "{'birth_day': ['Enter an integer.']}"}, status=400)

            try:
                birth_month = int(birth_month_str)
            except:
                return JsonResponse({"info": "user profile update failed", "error": "{'birth_month': ['Enter an integer.']}"}, status=400)

            try:
                birth_year = int(birth_year_str)
            except:
                return JsonResponse({"info": "user profile update failed", "error": "{'birth_year': ['Enter an integer.']}"}, status=400)

            # Check if birth date fields comply with real date system

            try:
                birth_date = date(birth_year, birth_month, birth_day)
            except Exception as e:
                return JsonResponse({"info": "user profile update failed", "error": "{'birth_date': ['" + str(e) + "']}"}, status=400)

        elif ((birth_day_str is None) and (birth_month_str is None) and (birth_year_str is None)):
            pass
        else:
            return JsonResponse({"info": "user profile update failed", "error": "{'birth_date': ['Enter all fields together.']}"}, status=400)
        # Check if birth date fields comply with real date system

        if ((birth_day_str is None) and (birth_month_str is None) and (birth_year_str is None)):
            birth_date = None
        else:
            try:
                birth_date = date(birth_year, birth_month, birth_day)
            except Exception as e:
                return JsonResponse({"info": "user profile update failed", "error": "{'birth_date': ['" + str(e) + "']}"}, status=400)
        # Assign non-null values to user and account

        user = RegisteredUser.objects.get(username=req.user)
        account = Account.objects.get(owner=user)

        # Required fields

        user.email = user.email if email is None else email
        user.gender = user.gender if gender is None else gender
        user.birth_date = user.birth_date if birth_date is None else birth_date

        # Optional_fields

        account.first_name = account.first_name if first_name is None else first_name if first_name != "" else None
        account.last_name = account.last_name if last_name is None else last_name if last_name != "" else None
        account.phone_number = account.phone_number if phone_number is None else phone_number if phone_number != "" else None
        account.profile_picture = account.profile_picture if profile_picture is None else profile_picture if profile_picture != "" else None
        account.profession = account.profession if profession is None else profession if profession != "" else None
        account.location = account.location if location is None else location if location != "" else None
        account.diplomaID = account.diplomaID if diplomaID is None else diplomaID if diplomaID != "" else None

        try:
            user.save()
            account.save()
            return JsonResponse({"info": "user profile update successful"}, status=200)
        except Exception as e:
            return JsonResponse({"info": "user profile update failed", "error": str(e)}, status=400)

    def delete(self, req):

        permission_classes = (IsAuthenticated,)

        try:
            user = RegisteredUser.objects.get(username=req.user)
            account = Account.objects.get(owner=user)
            user.auth_token.delete()
            logout(req)
            account.delete()
            user.delete()
            return JsonResponse({"success": "account is deleted successfully"}, status=200)

        except:
            return JsonResponse({"error": "account cannot be deleted"}, status=400)

class UploadProfPic(APIView):

    permission_classes = (IsAuthenticated,)

    def post(self, req):
        user = RegisteredUser.objects.get(username=req.user)
        account = Account.objects.get(owner=user)

        try:
            account.image = req.FILES["image"]
            account.save()
            return JsonResponse({"success": "profile picture uploaded successfully"}, status=200)

        except:
            return JsonResponse({"error": "profile picture upload failed"}, status=400)
    
    def delete(self, req):
        user = RegisteredUser.objects.get(username=req.user)
        account = Account.objects.get(owner=user)
        try:
            account.image.delete()
            account.save()
            return JsonResponse({"success": "profile picture deleted successfully"}, status=200)

        except:
            return JsonResponse({"error": "profile picture delete failed"}, status=400)
            

class ViewProfile(APIView):

    permission_classes = (AllowAny,)

    def get(self, req):
        try:
            _username = req.GET["username"]
        except:
            return JsonResponse({"info":f"ViewProfile failed", "error": "Username not given"}, status=400)
            
        # Parse all fields
        _username = _username.strip().lower()

        user = RegisteredUser.objects.get(username=_username)
        
        data = RegisteredUserSerializer(user).data

        return JsonResponse(data, status=200)
