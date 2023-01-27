from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=100, null=True, unique=True)
    color = models.CharField(max_length=50, null=True)
    year = models.PositiveSmallIntegerField(null=True)
    vin = models.CharField(max_length=100)

    def __str__(self):
        return self.vin
    def get_api_url(self):
        return reverse("api_list_appointments", kwargs={"vin": self.vin})


class Technician(models.Model):
    name = models.CharField(max_length=100)
    employee_number = models.BigIntegerField(null=True, unique=True)

    def __str__(self):
        return self.name
    def get_api_url(self):
        return reverse("api_list_technician", kwargs={"pk": self.id})


class Appointment(models.Model):
    vin = models.CharField(max_length=100)
    vip = models.BooleanField(default=False)
    customer_name = models.CharField(max_length=200, null=True)
    start_date = models.DateField(null=True)
    start_time = models.TimeField(null=True)
    finish = models.BooleanField(default=False)
    technician = models.ForeignKey(
        Technician,
        on_delete=models.CASCADE,
        related_name="appointments",
    )
    reason = models.CharField(max_length=200)

    def __str__(self):
        return self.customer_name, self.vin
    def get_api_url(self):
        return reverse("api_list_appointment", kwargs={"pk": self.id})
