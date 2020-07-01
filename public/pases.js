function borrarFiltro() {
    $('#filtro').text('')
 }
function buscarPases(evento) {
    evento.preventDefault();
    let palabrasFiltro = $('#filtro').text();
    fetch('/pases?buscar=' + palabrasFiltro).then(resp => {
        if (resp.ok) {
            resp.json().then(datosPases => {
                {
                    console.log(datosPases)
                    $('#pases').html(plantillaPases(datosPases));
                }
            });
        }
    });
}

function todosLosPases(){
    let buscar ="";
    fetch('/pases?buscar='+buscar).then(resp => {
        if (resp.ok) {
            resp.json().then(listaPases => {
                    $('#pases').html(plantillaPases(listaPases));
            });
        }
    });
}
async function mostrarButacas() {
    var cine = $(this).parent().prev().prev().text()
    var sala = $(this).parent().prev().text()
    var hora = $(this).text()
    await fetch('/butacas?cine='+cine+'&sala='+sala+'&hora='+hora).then(resp => {
        if (resp.ok) {
            resp.json().then(datosButacas => {
                {
                    $('#butacas').html(plantillaButacas(datosButacas));
                    $('#plantillaButacas').modal('show');
                }
            });
        }
    });
}

function reservarButacas(){
    let butacas = $('#butacas').val();
    fetch('/reservas?cine='+cine+'&sala='+sala+'&hora='+hora, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(butacas)
    }).then(resp => {
        if(resp.ok) {
            //crear alerta
        }
    });
}

function mostrarAlerta(){

    alert("I am an alert box!");
         
     
}


function inicializar() {
    // document.getElementById('btnGuardar').addEventListener('click', guardarNota);

    $('#btnBuscar').click(buscarPases);

    $('#pases').on('click', '.btn-primary', mostrarButacas);

    $('#btnSeleccionar').click(reservarButacas)

    $('#btnBorrar').click(borrarFiltro);

    document.getElementById('switch').addEventListener('onchange', mostrarToast)

    todosLosPases();  
}

// document.addEventListener('DOMContentLoaded', inicializar);
$(document).ready(inicializar);