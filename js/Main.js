// variables para desplegar la seccion detalles de los logros
let trofeo1 = document.getElementById('trofeo1');
let detalleLogro1 = document.getElementById('detalleLogro1');

let trofeo2 = document.getElementById('trofeo2');
let detalleLogro2 = document.getElementById('detalleLogro2');

let trofeo3 = document.getElementById('trofeo3');
let detalleLogro3 = document.getElementById('detalleLogro3');


trofeo1.addEventListener('click', llamar1);
trofeo2.addEventListener('click', llamar2);
trofeo3.addEventListener('click', llamar3);

// funciones para desplegar la seccion detalles de los logros
function llamar1() {
    detalleLogro1.classList.add('active');
    detalleLogro2.classList.remove('active');
    detalleLogro3.classList.remove('active');
}

function llamar2() {
    detalleLogro1.classList.remove('active');
    detalleLogro2.classList.add('active');
    detalleLogro3.classList.remove('active');
}

function llamar3() {
    detalleLogro1.classList.remove('active');
    detalleLogro2.classList.remove('active');
    detalleLogro3.classList.add('active');
}

// ------------------------------------------------------------------------------------

// Variables para desplegar el tipo de prueba (Frontend / Backend))
let btnF = document.getElementById('visual');
let ContenedorF = document.getElementById('contVisual');
let btnB = document.getElementById('logica');
let ContenedorB = document.getElementById('contLogica');

let btnF2 = document.getElementById('visual2');
let ContenedorF2 = document.getElementById('contVisual2');
let btnB2 = document.getElementById('logica2');
let ContenedorB2 = document.getElementById('contLogica2');


btnF.addEventListener('click', ContF);
btnB.addEventListener('click', ContB);

btnF2.addEventListener('click', ContF2);
btnB2.addEventListener('click', ContB2);

function ContF(){
    ContenedorF.classList.toggle('mostrar');
    ContenedorB.classList.remove('mostrar');
}
function ContB(){
    ContenedorF.classList.remove('mostrar');
    ContenedorB.classList.toggle('mostrar');
}

function ContF2(){
    ContenedorF2.classList.toggle('mostrar');
    ContenedorB2.classList.remove('mostrar');
}
function ContB2(){
    ContenedorF2.classList.remove('mostrar');
    ContenedorB2.classList.toggle('mostrar');
}

// ------------------------------------------------------------------------------------




// variables para colocar el efecto de linea en los enlaces del menu 
let enlace1 = document.getElementById('enlace1');
let enlace2 = document.getElementById('enlace2');
let enlace3 = document.getElementById('enlace3');
let enlace4 = document.getElementById('enlace4');
let enlace5 = document.getElementById('enlace5');
let enlace6 = document.getElementById('enlace6');

enlace1.addEventListener('click', after1);
enlace2.addEventListener('click', after2);
enlace3.addEventListener('click', after3);
enlace4.addEventListener('click', after4);
enlace5.addEventListener('click', after5);
enlace6.addEventListener('click', after6);

// funciones para el efecto de linea en los enlaces del menu 
function after1() {
    enlace1.classList.add('activo');
    enlace2.classList.remove('activo');
    enlace3.classList.remove('activo');
    enlace4.classList.remove('activo');
    enlace5.classList.remove('activo');
    enlace6.classList.remove('activo');
}

function after2() {
    enlace1.classList.remove('activo');
    enlace2.classList.add('activo');
    enlace3.classList.remove('activo');
    enlace4.classList.remove('activo');
    enlace5.classList.remove('activo');
    enlace6.classList.remove('activo');
}

function after3() {
    enlace1.classList.remove('activo');
    enlace2.classList.remove('activo');
    enlace3.classList.add('activo');
    enlace4.classList.remove('activo');
    enlace5.classList.remove('activo');
    enlace6.classList.remove('activo');
}

function after4() {
    enlace1.classList.remove('activo');
    enlace2.classList.remove('activo');
    enlace3.classList.remove('activo');
    enlace4.classList.add('activo');
    enlace5.classList.remove('activo');
    enlace6.classList.remove('activo');
}

function after5() {
    enlace1.classList.remove('activo');
    enlace2.classList.remove('activo');
    enlace3.classList.remove('activo');
    enlace4.classList.remove('activo');
    enlace5.classList.add('activo');
    enlace6.classList.remove('activo');
}

function after6() {
    enlace1.classList.remove('activo');
    enlace2.classList.remove('activo');
    enlace3.classList.remove('activo');
    enlace4.classList.remove('activo');
    enlace5.classList.remove('activo');
    enlace6.classList.add('activo');
}

// ------------------------------------------------------------------------------------


// variables para desplegar configuraciones de (Idioma / Colores)
let botonConfi = document.getElementById('confi');
let contConfi = document.getElementById('modos');

botonConfi.addEventListener('click' , panelConfi);

function panelConfi(){
    contConfi.classList.toggle('activo');
}

// ------------------------------------------------------------------------------------
// variables para cambiar colores
let btnMorado = document.getElementById('morado');
let btnAzul = document.getElementById('azul');
let btnAmarillo = document.getElementById('amarillo');


var link = document.getElementById('styles');

console.log(link);

btnMorado.addEventListener('click' , morado);
btnAzul.addEventListener('click' , azul);
btnAmarillo.addEventListener('click' , amarillo);

function morado(){
    link.href="css/StylesMorado.css";
}

function azul(){
    link.href="css/StylesAzul.css";
}

function amarillo(){
    link.href="css/StylesAmarillo.css";
}





// enlace para animaciones 
AOS.init();






