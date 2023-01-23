from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import AutomobileVO, Sale, Employee, Customer, VehicleEncoder
# Create your views here.


class AutomobileEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
    "vin",
    "employee",
    "customer",
    "sale_price"
    ]


class EmployeeEncoder(ModelEncoder):
    model = Employee
    properties = [
        "name",
        "employee_number"
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone_number"
    ]


@require_http_methods(["GET", "POST"])
def api_list_sales(request):



@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_sale(request, pk):
    if request.method == "GET":
        try:
            sale = Sale.objects.get(pk=pk)
        return JsonResponse(SaleEncoder(sale).data, safe=False)
    elif request.method == "PUT":
        sale = Sale.objects.get(pk=pk)
