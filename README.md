# CarCar

Team:

* Person 1 - Lyndon Hanson - Sales
* Person 2 - Stephanus Chung - service

## Design
opted for dropdowns in nav, separated by their microservice
## Service microservice

models are separated by appointment, automobileVO, and technician.
when setting up an appointment, the appointment pulls vin data from automobileVO which is linked to automobile within inventory.  If the vin is True, as in the car has been part of our inventory before, it sets VIP status to True.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
