"""from crud_django.servicios.views import create_servicio"""
from django.urls import path
from servicios import views as v

app_name = 'aplicacion'

urlpatterns = [
    path('' , v.inicio , name = 'inicio') ,
    path('detail_<int:id>/' , v.detail , name='detail') ,
    path('create/' , v.create_servicio , name = 'create') ,
    path('update_<int:id>/' , v.update_servicio , name = 'update') ,
    path('delete_<int:id>/' , v.delete_servicio , name = 'delete') 
]
