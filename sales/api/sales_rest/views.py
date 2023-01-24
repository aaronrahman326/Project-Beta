from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import AutomobileVO, Sales, Employees, Customers, Vehicles
# Create your views here.


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
    ]


class SalesEncoder(ModelEncoder):
    model = Sales
    properties = [
    "vin",
    "employee",
    "customer",
    "sale_price"
    ]

    def get_extra_data(self, o):
        return {"automobile": o.automobile.name}


class SalesDetailEncoder(ModelEncoder):
    model = Sales
    properties = [
    "vin",
    "employee",
    "customer",
    "sale_price",
    "picture_url"
    ]

    encoders = {
        "automobile": AutomobileVOEncoder(),
    }


class EmployeeEncoder(ModelEncoder):
    model = Employees
    properties = [
        "name",
        "employee_number"
    ]

class CustomerEncoder(ModelEncoder):
    model = Customers
    properties = [
        "name",
        "address",
        "phone_number"
    ]


@require_http_methods(["GET", "POST"])
def api_list_sales(request, automobile_vo_id=None):
    if request.method == "GET":
        if automobile_vo_id is not None:
            sales = Sales.objects.filter(automobile=automobile_vo_id)
        else:
            sales = Sales.objects.all()
        return JsonResponse(
            {"sales":sales},
            encoder=SalesEncoder
        )
    else:
        content = json.loads(request.body)
        try:
            automobile_href = content["automobile"]
            automobile = AutomobileVO.objects.get(import_href=automobile_href)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"ERROR": "TRY AGAIN BIG GUY"},
                status=400
            )

        automobile = Sales.objects.create(**content)
        return JsonResponse(
            automobile,
            encoder=SalesDetailEncoder,
            safe=False,
        )



@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_sale(request, pk):
    if request.method == "GET":
        try:
            sale = Sales.objects.get(id=pk)
            return JsonResponse(
                sale,
                encoder=SalesDetailEncoder,
                safe=False,
            )
        except Sales.DoesNotExist:
            return JsonResponse(
                {"message": "TRY AGAIN NOT SALE FOUND"},
                status=400
            )
    elif request.method == "PUT":
        try:
            content = json.loads(request.body)
            Sales.objects.filter(id=pk).update(**content)
            sale = Sales.objects.get(id=pk)
        except Sales.DoesNotExist:
            return JsonResponse(
                {"message": "TRY AGAIN NOT SALE FOUND"},
                status=400
            )
        return JsonResponse(
            sale,
            encoder=SalesDetailEncoder,
            safe=False,
        )
    else:
        try:
            sale = Sales.objects.get(id=pk)
            sale.delete()
            return JsonResponse(
                {"message": "SALE DELETED"},
                sale,
                encoder=Sales,
                safe=False,
            )
        except Sales.DoesNotExist:
            return JsonResponse(
                {"message": "No sale to delete"},
            )
