from django import forms



report_reasons = [
        ("false","False Information"),
        ("spam","Spam"),
        ("advertisement","Blatant Advertisement"),
        ("harrassment","Harrasment"),
        ("falseTags", "Incorrectly Tagged"),
        ("other","Other")        
    ]
report_types=[
        ("user","User"),
        ("post","Post"),
        ("comment","Comment")
    ]
class ReportForm(forms.Form):
    report_type=forms.CharField(widget=forms.Select(choices=report_types,attrs={'placeholder':'Report Type'}))
    reportable_action_url=forms.CharField(widget=forms.TextInput(attrs={'placeholder':'Reportable Action URL'}))
    report_reason=forms.CharField(widget=forms.Select(choices=report_reasons, attrs={'placeholder':'Report Reason'}))
    report_description=forms.CharField(widget=forms.TextInput(attrs={'placeholder':'Description'}))
