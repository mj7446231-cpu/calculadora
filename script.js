
let expresion = '';
let resultadoMostrado = '';
const pantalla = document.getElementById('pantalla')

// Funcion para actualizar pantalla

function actualizarPantalla(valor){
    pantalla.textContent= valor || '0';
}
// Funcion para agregar numeros

function agregarNumero(numero){
    if (resultadoMostrado) {
        expresion = '';
        resultadoMostrado=false;
    }
    if (expresion === '0' && numero === '0' ) return;


// Reemplaza el 0  inicial
    if (expresion === '0' && numero !== '0' ) { 
        expresion = numero;
} else {
    expresion += numero;
}


actualizarPantalla(expresion)

}


//Funcion para limpiar

function limpiar () {
    expresion = '';
    resultadoMostrado = false;
    actualizarPantalla('0');
}

//Funcion borrar

function borrar (){
    if(!resultadoMostrado && expresion !==''){
        expresion = expresion.slice(0,-1);
        actualizarPantalla(expresion || '0');
    }
}


// if(condicion){
//instruccion1;
// } else { 
// instruccion2
// instruccionn;}
//break rompecodigoejecucion
