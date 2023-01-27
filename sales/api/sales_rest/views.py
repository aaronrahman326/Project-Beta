from .models import AutomobileVO, Employees, Customers, Vehicles, Sales
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .encoders import AutomobileVOEncoder, EmployeeEncoder, CustomerEncoder, VehicleEncoder, SalesEncoder, SalesDetailEncoder


@require_http_methods(["GET", "POST"])
def api_list_employees(request):
    if request.method == "GET":
        employees = Employees.objects.all()
        return JsonResponse(
            {"employees":employees},
            encoder = EmployeeEncoder)
    else:
        content = json.loads(request.body)
        try:
            employees = Employees.objects.create(**content)
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

        customer = Customers.objects.get(id=content["customer"])
        content["customer"] = customer

        automobile_href = content["vehicle"]
        automobile = AutomobileVO.objects.get(import_href=automobile_href)
        content["vehicle"] = automobile

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
            )
        except Sales.DoesNotExist:
            return JsonResponse(
                {"message": "No sale to delete"},
            )
