from .models import AutomobileVO, Employees, Customers, Vehicles, Sales
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
    ]

    encoders = {
        "vehicle": AutomobileVOEncoder(),
        "employee": EmployeeEncoder(),
        "customer": CustomerEncoder(),
    }


class SalesEncoder(ModelEncoder):
    model = Sales
    properties = [
    # "name",
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
