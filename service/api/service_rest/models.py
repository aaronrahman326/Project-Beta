from django.db import models
from django.urls import reverse

# Create your models here.

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=100, unique=True)
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17, unique=True)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.vin})

class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.PositiveSmallIntegerField(null=True, unique=True)

    def __str__(self):
        return self.name
    def get_api_url(self):
        return reverse("api_list_technician", kwargs={"pk": self.id})


class Appointment(models.Model):
    vin = models.PositiveSmallIntegerField(max_length=17, unique=True)
    vip = models.BooleanField(default=False)
    customer_name = models.CharField(max_length=200, null=True, unique=True)
    start_date = models.DateField(null=True)
    start_time = models.TimeField(null=True)
    end_time = models.TimeField(null=True)
    end_date = models.DateField(null=True)
    technician = models.ForeignKey(
        Technician,
        on_delete=models.CASCADE,
        related_name="appointments",
    )
    reason = models.CharField(max_length=200)
    
    def __str__(self):
        return self.customer_name
    def get_api_url(self):
        return reverse("api_list_appointment", kwargs={"pk": self.id})