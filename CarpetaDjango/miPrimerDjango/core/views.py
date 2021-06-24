from django.shortcuts import render

class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad
        super().__init__()

# Create your views here.

def home(request):
    lista = ['cazuela', 'humitas', 'TODO lo dulce']
    hijo = Persona("Dani Castro", "25")
    contexto = {
        'nombre': 'Daniel Castro',
        'edad' : 25,
        'conHambre' : True,
        'comidas': lista,
        'hijo': hijo
    }
    return render(request, 'core/home.html', contexto)