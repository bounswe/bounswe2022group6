from django import forms

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

class UserForm(forms.Form):
    username=forms.CharField(widget=forms.TextInput(attrs={'placeholder':'Username'}))
    password=forms.CharField(widget=forms.PasswordInput(attrs={'placeholder':'Password'}))
    mail=forms.EmailField(widget=forms.TextInput(attrs={'placeholder':'Email'}))
    horoscope=forms.CharField(widget=forms.Select(choices= horoscope_choices, attrs={'placeholder':'Horoscope'}))