$(document).ready(function(){

    //POKEMON
    $('#pokemon').click(function(){
        var urlApi = 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=10'
        $.get({
            url: urlApi,
            success: function(datos) {

                var contenedor = $('#listado')
                contenedor.empty();

                var imagen = 'img/sin-imagen.jpeg'

                $.each(datos.results, function(i, pokemon){

                    $.get({
                        url: pokemon.url,
                        success: function(detalle) {
                            imagen = detalle.sprites.front_default
                            
                            $('#'+ pokemon.name).attr('src', imagen)

                        },
                        error: function(error) {
                            console.error(error);
                        }
                    });

                    contenedor.append(
                        crearCard(pokemon.name, imagen, pokemon.name, "<b>Url detalle: </b>" + pokemon.url)
                        );
                    
                })


            },
            error: function(error) {
                console.error(error);
            }
        });
    });

    //PERSONAJES MARVEL
    $('#marvel').click(function(){

        //COSAS QUE PIDE MARVEL
        var PRIV_KEY = "37fafc89e443344d000759ac31aefc70180f4f02";
        var PUBLIC_KEY = "dbb3041a457cd17a26f5c1caf639467b";
        var ts = new Date().getTime();
        var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

        var urlApi = 'https://gateway.marvel.com:443/v1/public/characters'

        $.get({
            url: urlApi,
            data: { //ESTO LO PIDE MARVEL CON LO QUE DEFINO ARRIBA
                ts: ts,
                apikey: PUBLIC_KEY,
                hash: hash
            },
            success: function(listadoPersonajes) {

                console.log(listadoPersonajes)
                var contenedor = $('#listado')
                contenedor.empty();

                var imagen = 'img/sin-imagen.jpeg'

                $.each(listadoPersonajes.data.results, function(i, personaje){
                    var rutaImagen = personaje.thumbnail.path
                    if (rutaImagen) {
                        imagen = rutaImagen+"/portrait_xlarge.jpg"
                    }
                    contenedor.append(
                        crearCard(personaje.id, imagen, personaje.name, personaje.description)
                    );
                })
            },
            error: function(error) {
                console.error(error);
            }
        });
    });

    $('#sw').click(function(){
        $.get({
            url: 'https://akabab.github.io/starwars-api/api/all.json',
            success: function(listado){
                console.log(listado)
                var contenedor = $('#listado')
                contenedor.empty();

                var imagen;

                $.each(listado, function(i, personaje){
                    var rutaImagen = personaje.image;
                    if (rutaImagen == "") {
                        imagen = 'img/sin-imagen.jpeg';
                    } else {
                        imagen = rutaImagen;
                    }
                    var description = "<b>Lugar de nacimiento: </b>"+ personaje.homeworld
                    description += "<br/><b>Especie: </b>" + personaje.species
                    contenedor.append(
                        crearCard(personaje.id, imagen, personaje.name, description)
                    );
                })
            },
            error: function(e) {
                console.error(e)
            }
        })
    });

    $('#spotify').click(function(){
        idArtista = $('#id-artista').val();
        //0k17h0D3J5VfsdmQ1iZtE9
        token = $('#token').val();
        //BQDaPG0bPxhpKq81RADbaB9SSHoPXxVmWZFKaV9GSqmAXzGqrhBzpFIn6VaNl9J_MRzwTkRAgXNYhVhiV8xji4spIH1dAWLe5_Qc1dIbpWdz21OZ4haFEll6sH8UETdoGYbIjKIIJok76uA

        $.get({
            url: 'https://api.spotify.com/v1/artists/' + idArtista +'/albums?include_groups=album&market=CL&limit=20&offset=0',
            headers: {
                Authorization: 'Bearer '+ token
            },
            success: function(listado){
                console.log(listado.items)
                var contenedor = $('#listado')
                contenedor.empty();

                var imagen;

                $.each(listado.items, function(i, disco){
                    var rutaImagen = disco.images[1].url;
                    if (rutaImagen == "") {
                        imagen = 'img/sin-imagen.jpeg';
                    } else {
                        imagen = rutaImagen;
                    }
                    var description = "<b>Número de tracks: </b>"+ disco.total_tracks
                    description += "<br/><b>Fecha de lanzamiento: </b>" + disco.release_date
                    contenedor.append(
                        crearCard(disco.id, imagen, disco.name, description)
                    );
                })
            },
            error: function(e){
                console.error(e)
            }
        })
    });
});

function crearCard(id, img, titulo, descripcion) {
    var card = "<div class='card'>"+
    "<img id='" + id + "' src='" + img + "' class='card-img-top' alt='" + titulo + "'><div class='card-body'>"+
    "<h5 class='card-title'>" + titulo + "</h5>" + 
    "<p class='card-text'>" + descripcion + "</p></div></div>"

    return card
}