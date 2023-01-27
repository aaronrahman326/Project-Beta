from django.db import models
from django.urls import reverse


class AutomobileVO(models.Model):
    color = models.CharField(max_length=50)
    year = models.PositiveSmallIntegerField()
    vin = models.CharField(max_length=17)
    import_href = models.CharField(max_length=255)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.vin})


class Employees(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.name
    def get_api_url(self):
        return reverse("api_list_employee", kwargs={"pk": self.id})


class Customers(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=200)
    phone_number = models.BigIntegerField()

    def __str__(self):
        return self.name


class Vehicles(models.Model):
    vin = models.CharField(max_length=200)


class Sales(models.Model):
    vehicle = models.ForeignKey(
        AutomobileVO,
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
    
    sale_price = models.BigIntegerField()

    def get_api_url(self):
        return reverse("api_show_sale", kwargs={"pk": self.pk})
