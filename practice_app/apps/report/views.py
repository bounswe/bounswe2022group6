from django.shortcuts import render
from django.http import JsonResponse
from django.http import HttpResponseRedirect
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

import json

from .models import Report
from .forms import ReportForm
from .serializers import ReportSerializer
import requests
from rest_framework import status

def index (request):
    form=ReportForm()
    isFailed=request.GET.get("fail",False)
    isSuccessful=request.GET.get("success",False)
    return render(request, 'report.html',{"action_success": isSuccessful, "action_fail": isFailed,"form":form})

def reportList(request):
    users = Report.objects.all()
    serializer = ReportSerializer(reports, many=True)
    data = serializer.data
    reports=[]
    for row in data:
        id = row["id"]
        report_type = row["report_type"]
        reportable_action_url = row["reportable_action_url"]
        report_reason= row["report_reason"]
        report_description = row["report_description"]
        reports.append((id, report_type, reportable_action_url, report_reason,report_description))

    return render(request,'report-list.html',{"results": reports})


def indexWorker(request):
    form = ReportForm()
    serializer = ReportSerializer(data = request.data)

    if serializer.is_valid():
        serializer.save()
        isFailed=request.GET.get("fail",False)
        isSuccessful=request.GET.get("success",True)
        return render(request, 'user-create.html',{"action_success": isSuccessful,"action_fail": isFailed,"form":form})
    else:
        isFailed=request.GET.get("fail",True)
        isSuccessful=request.GET.get("success",False)
        return render(request, 'user-create.html',{"action_success": isSuccessful,"action_fail": isFailed,"form":form},status=status.HTTP_422_UNPROCESSABLE_ENTITY)

