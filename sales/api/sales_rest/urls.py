from django.urls import path
from .views import api_list_sales, api_show_sale


urlpatterns = [
    path('sales/', api_list_sales, name='api_list_sales'),
    path('sales/<int:pk>/', api_show_sale, name='api_show_sale'),
]
