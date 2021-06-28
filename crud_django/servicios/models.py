from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.

class Servicio(models.Model) :
    nombre = models.CharField(max_length=50, null = False)
    apellido = models.CharField(max_length=70, null = False)
    vehiculo = models.CharField(max_length=10, null = False)
    taller = models.CharField(max_length=40, null = False)

    def __str__(self):
        return self.nombre

