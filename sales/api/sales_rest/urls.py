from django.urls import path
from .views import api_list_sales, api_show_sale, api_list_customers, api_list_employees


urlpatterns = [
    path('sales/', api_list_sales, name='api_list_sales'),
    path('sales/<int:pk>/', api_show_sale, name='api_show_sale'),
    path('customers/', api_list_customers, name='api_list_customers'),
    path('employees/', api_list_employees, name='api_list_employees'),
]
