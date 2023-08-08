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


// 
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

AOS.init();






