# CarCar

Team:

* Person 1 - Lyndon Hanson - Sales
* Person 2 - Stephanus Chung - service

## Design

## Service microservice

models are separated by appointment, automobile, and technician.
when setting up an appointment, the appointment pulls vin data from automobileVO which is linked to automobile within inventory.  If the vin is True, as in the car has been part of our inventory before, it sets VIP status to True.

## Sales microservice

Explain your models and integration with the inventory
microservice, here.

My models are created to have a model for customers, employees, sales and to interact with the inventory.  My customer and employee models are self contained within the sales microservice.  The sales model relies on foreign keys for customers, employees and the vehicle.  I made a vehicle model to pull from the inventory model with the automobile information.  I am also making sure that if a car is set to sold in the inventory model, that it will not show up in the sale form to be sold.  
