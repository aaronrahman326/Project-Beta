from django.shortcuts import render
from .models import Technician, AutomobileVO, Appointment
from common.json import ModelEncoder
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

# Create your views here.
class AutomobileVOEncoder(ModelEncoder):
    model= AutomobileVO
    properties = ["color",
                "vin",
                "immport_href"]

class TechnicianListEncoder(ModelEncoder):
    model= Technician
    properties = ["name",
                "employee_number"
                ]

class AppointmentDetailEncoder(ModelEncoder):
    model= Appointment
    properties = [
        "id",
        "vip",
        "customer_name",
        "technician",
        "start_date",
        "start_time",
        "finish",
        "reason",
        "vin",

    ]
    encoders = {"technician": TechnicianListEncoder()}


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(

            {"technicians":technicians},
            encoder = TechnicianListEncoder)
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.create(**content)
            print(content)
            return JsonResponse(
                technician,
                encoder = TechnicianListEncoder,
                safe=False
                )
        except:
            return JsonResponse(
                {"error":"technician already exists"},
            )


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(

            {"appointments":appointments},
            encoder = AppointmentDetailEncoder)
    else:
        content = json.loads(request.body)

        technician = Technician.objects.get(employee_number=content["technician"])
        content["technician"]=technician

        try:

            vin = AutomobileVO.objects.get(vin=content["vin"])
            content["vip"]=True
            content["vin"]=vin
        except AutomobileVO.DoesNotExist:
            content["vip"]=False

        appointment = Appointment.objects.create(**content)

        return JsonResponse(
            appointment,
            encoder = AppointmentDetailEncoder,
            safe=False
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_appointment_detail(request,pk):
    if request.method == "GET":
        content = json.loads(request.body)
        try:
            appointment = Appointment.objects.get(id=content["id"])
            return JsonResponse(
                appointment,
                encoder = AppointmentDetailEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "no appointment exist"},
                status=400
            )
    elif request.method == "PUT":
        content = json.loads(request.body)
        try:
            if "technician" in content:
                technician = Technician.objects.get(id=content["technician"])
                content["technician"]=technician

        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "no appointment exist"},
                status=400
            )
        Appointment.objects.filter(id=pk).update(**content)
        appointment= Appointment.objects.get(id=pk)
        return JsonResponse(
                appointment,
                encoder = AppointmentDetailEncoder,
                safe=False
            )
    else:
        try:
            appointment=Appointment.objects.get(id=pk)
            appointment.delete()
            return JsonResponse(
                {"message": "appointment deleted"},
                appointment,
                encoder=AppointmentDetailEncoder,
                safe=False
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "no appointment exists"},

            )
