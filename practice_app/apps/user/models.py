from django.db import models

class User(models.Model):
    horoscope_choices = [
        ("aries","Aries"), 
        ("taurus","Taurus"), 
        ("gemini","Gemini"), 
        ("cancer","Cancer"), 
        ("leo","Leo"), 
        ("virgo","Virgo"), 
        ("libra","Libra"), 
        ("scorpio","Scorpio"), 
        ("sagittarius","Sagittarius"), 
        ("capricorn","Capricorn"), 
        ("aquarius","Aquarius"),
        ("pisces","Pisces")
    ]
    username = models.CharField(max_length=50, unique = True)
    password = models.CharField(max_length=50)
    mail = models.EmailField(max_length = 254)
    horoscope = models.CharField(max_length=11,choices=horoscope_choices, default="aries")

    def __str__(self):
        return self.username