from .models import AutomobileVO, Technician, Appointment
from common.json import ModelEncoder

class AutomobileVOEncoder(ModelEncoder):
    model= AutomobileVO
    properties = [
        "color", 
        "vin", 
        "import_href"
        ]

class TechnicianListEncoder(ModelEncoder):
    model= Technician
    properties = [
        "name", 
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