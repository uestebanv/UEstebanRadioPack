//$(document).ready(function () {
//    Agregar()

//});

//en este parte del codigo se utilisa java script 
//despues del funtion ira el nombre como se llamara el metodo
function Agregar() {
    $.ajax({
        type: "GET", //tipo de vervo a usar get para obtener la informacion
        url: 'https://randomuser.me/api/', // la url del servicio que se dea consumir 
        success: function (result) { // resukt es una variable que guradara todo el resultado de la peticion puede ser de 1 hasta  varios registros
            $('#tblUsuario tbody'); // se instancia el id de la tabla que mostrara la infromacion
            $.each(result.results, function (i, usuario) { //en este caso se hra un unboxin ya que el requerimineto o la url tiene parametros los cuales para poder usarlos deberan ser nombredos de igual manera sin cambios donde usuario seria la calse deonde furadaremos y mostraremos esas propiedades
                var filas =                      //aqui se se colocan las columns con la onformacion que se requiere mostrar
                    '<tr>'
                    + "<td class='text-center'>" + usuario.name.title + ' ' +usuario.name.first +' ' +usuario.name.last + "</td>"
                    + "<td class='text-center'>" + usuario.email + "</td>"
                    + "<td class='text-center'>" + usuario.location.city +' / '+ usuario.location.country + "</td>"
                    + "<td class='text-center'>" + usuario.gender + "</ td>"
                    + "<td><img id='img' src='" + usuario.picture.large + "' style='width:100px ; height:100px' /></td >"
                    + "</tr>";
                $("#tblUsuario tbody").append(filas); // concatena la informacion en la fila de la table para mostrar la informacion
            });
        },
        error: function (result) {
            alert('Error en la consulta.' + result.responseJSON.ErrorMessage);
        }
    });
};

function Limpiar() {
    $('#tblUsuario tbody').empty(); //empty es un metodo que permite limpiar la table
};
