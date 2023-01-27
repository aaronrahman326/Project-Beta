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

My models are created to have a model for customers, employees, sales and to interact with the inventory.  My customer and employee models are self contained within the sales microservice.  The sales model relies on foreign keys for customers, employees and the vehicle.  I made a vehicle model to pull from the inventory model with the automobile information.  I am also making sure that if a car is set to sold in the inventory model, that it will not show up in the sale form to be sold.  My encoders are held in their own encoders.py file and are then imported into the views.  The encoders.py file imports the models from the models.py file.  My api_list_employees view is used to create and list my sales employees.  My api_list_customers view is used to create and list my customers.  My api_list_sales view is used to create and list my sales.  My api_show_sale view is used in order to show or delete and individual sale.  The reason I left some of my encoders in even though they are grey is because they are used at some point in order to make some of my code work properly. Overall my models are the foundation of the data in the project.  The encoders access these models and allow my view functions to retrieve the necessary data.
