from django.db import models

class formulario(models.Model):
    usuario = models.CharField(max_length=100, verbose_name="usuario")
    nombre = models.CharField(max_length=100, verbose_name="nombre")
    contraseña = models.CharField(max_length=50, verbose_name="contraseña")
    repetir_contraseña = models.CharField(max_length=50, verbose_name="Repetir contraseña")
    correo_electronico = models.EmailField(max_length=100, verbose_name="correo electronico")
    telefono = models.IntegerField(verbose_name="telefono")
   


    def str(self):
        return self.rut