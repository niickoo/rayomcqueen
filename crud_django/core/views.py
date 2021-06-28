from django.shortcuts import render
from core.forms import FormularioForm,RegistroForm, listadoTortasForm
from django.shortcuts import redirect, render
from .models import formulario, registro, listadoTortas
from django.views.generic import View
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpRequest
from django.contrib import messages
from .forms import UserRegisterForm
from django.contrib.auth.views import LoginView
from django.contrib.auth.forms import UsernameField
