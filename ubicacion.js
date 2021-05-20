
        function findMe(){
            var output = document.getElementById('map');

            if (navigator.geolocation) {
                output.innerHTML = "<p>Tu navegador soporta geolocalizacion</p>";
            }else{    
                output.innerHTML = "<p>Tu navegador no soporta geolocalizacion</p>"
            }

            function localizacion(posicion){
                var latitude = posicion.coords.latitude;
                var longitude = posicion.coords.longitude;



                window.open ('https://www.google.cl/maps/@'+latitude+","+longitude);

                output.innerHTML = "<p>Latitud: "+latitude+"<br>Longitud: "+longitude+"</p>"    
      
            }

            function error(){
                output.innerHTML = "<p>No se pudo obtener tu ubicacion</p>"
            }

            navigator.geolocation.getCurrentPosition(localizacion,error);

        }

