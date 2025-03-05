let Dibujo1 = "Tienes que hacer una infografia para el sábado, avisále a tus compañeros, una infografia es como un mapa conceptual pero poco texto, más imagenes";
let Civilizacion1 = "sin tareas pendientes, el profesor dice que verán historia hasta la caída del imperio Romano, es fan de Miley";
let Representacion1 = "holi";
let Catedra1 = "holi";
let Algebra1 = "holi";
let notas = [Dibujo1, Civilizacion1, Representacion1, Catedra1, Algebra1];


let mostrado = document.getElementById('ampliado');
let materias = document.querySelectorAll('.materia');

materias.forEach(asignature => {
    asignature.addEventListener("click", mostrar);
})


function mostrar (event) {
    let elemento = event.target;
    let comparacion = elemento.textContent;
    let asignaturas = ["Dibujo", "Civilización", "Representación", "Cátedra", "Álgebra"]

    for (i=0; i < asignaturas.length; i++) {
        let comparado = asignaturas[i];

        if (comparacion == comparado) {
            mostrado.textContent = notas[i]
        }
    }


}

function actualizarHora () {

let fecha = new Date();

let ano = fecha.getFullYear();
let mes = fecha.getMonth();
let dia = fecha.getDate();
let semana = fecha.getDay();

let hora = fecha.getHours();
let minuto = fecha.getMinutes();
let segundo = fecha.getSeconds();


let diasweek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
let mesesyear = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let horacorta = hora % 12 || 12;
let zona = hora >= 12 ? " pm" : " am";


let fechita = diasweek[semana] + " " + dia + " de " + mesesyear[mes] + " de " + ano;
let horita = horacorta + ":" + minuto + ":" + segundo + zona;

let sistemhora = document.getElementById('hora');
sistemhora.textContent = horita;

let sistemfecha = document.getElementById('fecha');
sistemfecha.textContent = fechita;

}

setInterval(actualizarHora, 1000);