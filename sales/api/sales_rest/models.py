from django.db import models
from django.core.exceptions import ObjectDoesNotExist
from django.urls import reverse
# Create your models here.


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=200)


class Employee(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.IntegerField(null=True, blank=True)

class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.SmallIntegerField(unique=True)


class Vehicle(models.Model):
    vin = models.CharField(max_length=200)
    


class Sale(models.Model):
    vehicle = models.ForeignKey(
        Vehicle,
        on_delete=models.CASCADE,
        related_name='sale_vehicle',
        null=True,
        blank=True,
    )

    employee = models.ForeignKey(
        Employee,
        related_name="",
        on_delete=models.CASCADE,
        null=True
    )

    customer = models.ForeignKey(
        Customer,
        related_name="",
        on_delete=models.CASCADE,
        null=True
    )
    sale_price = models.DecimalField(max_digits=15)
