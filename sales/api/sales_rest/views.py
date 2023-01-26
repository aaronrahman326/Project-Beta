from django.shortcuts import render
from .models import AutomobileVO, Employees, Customers, Vehicles, Sales
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder

# Create your views here.


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "color",
        "import_href"
    ]


class EmployeeEncoder(ModelEncoder):
    model = Employees
    properties = [
        "id",
        "name",
        "employee_number"
    ]


class CustomerEncoder(ModelEncoder):
    model = Customers
    properties = [
        "id",
        "name",
        "address",
        "phone_number"
    ]


class VehicleEncoder(ModelEncoder):
    model = Vehicles

    properties = [
        "model",
        "color",
        "year",
        "picture_url"
    ]


class SalesDetailEncoder(ModelEncoder):
    model = Sales
    properties = [
    "vehicle",
    "employee",
    "customer",
    "sale_price",
    # "picture_url"
    ]

    encoders = {
        "vehicle": AutomobileVOEncoder(),
        "employee": EmployeeEncoder(),
        "customer": CustomerEncoder(),
    }

    # def get_extra_data(self, o):
    #     return {"automobiles": o.automobiles.name}

class SalesEncoder(ModelEncoder):
    model = Sales
    properties = [
    "vehicle",
    "employee",
    "customer",
    "sale_price"
    ]

    encoders = {
        "vehicle": AutomobileVOEncoder(),
        "employee": EmployeeEncoder(),
        "customer": CustomerEncoder(),
    }

    # def get_extra_data(self, o):
    #     return {"automobiles": o.automobiles}



@require_http_methods(["GET", "POST"])
def api_list_employees(request):
    if request.method == "GET":
        employees = Employees.objects.all()
        return JsonResponse(
            {"employees":employees},
            # print(AutomobileVO)
            encoder = EmployeeEncoder)
    else:
        content = json.loads(request.body)
        try:
            employees = Employees.objects.create(**content)
            print(content)
            return JsonResponse(
                employees,
                encoder = EmployeeEncoder,
                safe=False
                )
        except:
            return JsonResponse(
                {"error":"Employee already exists mate"},
            )


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customers.objects.all()
        return JsonResponse(
            {"customers":customers},
            encoder = CustomerEncoder)
    else:
        content = json.loads(request.body)
        try:
            customer = Customers.objects.create(**content)
            print(content)
            return JsonResponse(
                customer,
                encoder = CustomerEncoder,
                safe=False
                )
        except:
            return JsonResponse(
                {"error":"Customer already exists mate"},
            )


@require_http_methods(["GET", "POST"])
def api_list_sales(request):

    if request.method == "GET":
        sales = Sales.objects.all()
        return JsonResponse(
            {"sales":sales},
            encoder=SalesDetailEncoder
        )
    else:
        content = json.loads(request.body)
        employee = Employees.objects.get(id=content["employee"])
        content["employee"] = employee

        # content = json.loads(request.body)
        customer = Customers.objects.get(id=content["customer"])
        content["customer"] = customer
        print(employee)
        # automobiles = AutomobileVO.objects.all()
        # for auto in automobiles:
        #     print(auto.__dict__)

        # try:
        automobile_href = content["vehicle"]
        automobile = AutomobileVO.objects.get(import_href=automobile_href)
        content["vehicle"] = automobile

# except AutomobileVO.DoesNotExist:
#     return JsonResponse(
#         {"ERROR": "TRY AGAIN BIG GUY"},
#         status=400
#     )

        sales = Sales.objects.create(**content)
        return JsonResponse(
            sales,
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
