// Hay dos tipos de funsiones: declarativas y de expresión
// Las funciones son conjuntos de sentencias que podemos usar ciertas acciones con los valores que guardamos en las variables, para poder generar otra cosa.

//Declarativas

function miFuncion() {
    return 3;
}
// miFuncion es el nombre de function, con eso ya -declaramos- una funcion, que guardara ciertos valores, como return 3, que es un number. Esta no es una función anónima, su nombre es miFuncion. Lo que va entre () serán los parametros que necesitaré para que la tarea de la función se ejecute, que puede ser 1, 2 o 3.

miFuncion();

//Expresión

var miFuncion = function(a,b) {
    return a + b;
}

//Estas funciones expresivas, están generando una variable -miFuncion- que guarda una función que regresa el valor return a + b. Pero a y b son parametros, lo que necesita la funcion para poder funcionar, que irán dentro de los () También se las conoce como funciones anónimas, ya que no tiene un nombre la funcion, ya que solo la variable tiene un nombre. 

miFuncion();