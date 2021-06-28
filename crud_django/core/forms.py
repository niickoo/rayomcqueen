from django import forms
from django.db.models import fields
from django.forms import ModelForm
from .models import formulario, registro, listadoTortas
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class RegistroForm(ModelForm):
    class Meta:
        model = formulario
        fields = ['usuario','nombre','contraseña','repetir contraseña','correo electronico','telefono']
class userForm(UserCreationForm):
    usuario = forms
    password1 =  forms.CharField(label=  'contraseña', widget=forms.PasswordInput)
    password2 = forms.CharField(label='confirmar contraseña', widget=forms.PasswordInput)