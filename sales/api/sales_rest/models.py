from django.db import models
from django.core.exceptions import ObjectDoesNotExist
from django.urls import reverse
# Create your models here.


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200)


class Employees(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.IntegerField(null=True, blank=True)


class Customers(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.SmallIntegerField(unique=True)


class Vehicles(models.Model):
    vin = models.CharField(max_length=200)


class Sales(models.Model):
    vehicle = models.ForeignKey(
        Vehicles,
        on_delete=models.CASCADE,
        related_name='sale_vehicle',
        null=True,
        blank=True,
    )

    employee = models.ForeignKey(
        Employees,
        related_name="employee",

        on_delete=models.CASCADE,
        null=True
    )

    customer = models.ForeignKey(
        Customers,
        related_name="customer",
        on_delete=models.CASCADE,
        null=True
    )
    sale_price = models.DecimalField(max_digits=15, decimal_places=2)

    def __str__(self):
        return self.name

    def get_api_url(self):
        return reverse("api_show_sale", kwargs={"pk": self.pk})
