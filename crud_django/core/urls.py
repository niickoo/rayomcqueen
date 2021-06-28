from django.urls import path
from .views import formulario, galeria, index, superApi, ubicacion
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth.views import LoginView,LogoutView
urlpatterns = [
    path('',index, name="index"),
    path('galeria/',galeria,name="galeria"),
    path('ubicacion/',ubicacion,name="ubicacion"),
    path('formulario/',formulario,name="formulario"),
    path('superApi/',superApi,name="superApi")
    ]+ static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)