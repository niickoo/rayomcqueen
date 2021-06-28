from django.shortcuts import render , get_object_or_404 , redirect
from .models import Servicio
from .forms import ServicioForm

# Create your views here.

def inicio(request) :
    servicios = Servicio.objects.all()
    contexto = {
        'servicios' : servicios
    }
    return render(request , 'servicios/inicio.html' , contexto)

def detail(request , id) :
    detail_servicio = get_object_or_404(Servicio , pk = id)
    contexto = {
        'detail_servicio' : detail_servicio
    }
    return render(request , 'servicios/detail.html' , contexto)

def create_servicio(request) :
    if request.method == "POST" :
        servicio_form = ServicioForm(request.POST)
        if servicio_form.is_valid() :
            servicio_form.save()
            return redirect('aplicacion:inicio')
    else :
       servicio_form = ServicioForm()
       return render(request , 'servicios/create.html' , {'servicio_form' : servicio_form})  

def update_servicio(request, id) :
    servicio = get_object_or_404(Servicio , id = id)
    if request.method == "POST" :
        servicio_form = ServicioForm(request.POST , instance = servicio)
        if servicio_form.is_valid() : 
            servicio_form.save()
            return redirect('aplicacion:inicio')
    else :
        servicio_form = ServicioForm()
        return render(request , 'servicios/editar.html' , {'servicio_form' : servicio_form})


def delete_servicio(request , id) :
    servicio = get_object_or_404(Servicio , id = id)
    if servicio :
        servicio.delete()
    return redirect('aplicacion:inicio')