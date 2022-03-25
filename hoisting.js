//cuando las variables y las funciones se procesan antes de que se ejecute cualquier tipo de codigo.

var miNombre;
miNombre = "Carla"

//Los dos pasos para hacer una variable e inicializarla.

var miNombre = "Carla"
//Esta es la forma comun de hacer las dos cosas a la vez.

//En hoisting a veces se llaman variables sin haber declarado las variables.

console.log(miNombre);
//console.log es una funcion que nos da el navigador para imprimir variables, resultados de funciones, etc. Nos permite ver en la consola los resultados. 
var miNombre = "Carla"

//Aqui como resultado tira "undefined", ya que el compilador de JS en el navegador toma primero el console.log con la variable miNombre, a la que va a declarar asi 
var miNombre = undefined
//luego agrega el console.log
console.log(miNombre);
//nos volverá a salir el indefined, así es como lo hace el compilador del navegador. 



var miNombre = undefined;
console.log(miNombre + "Soy un hoisting");
miNombre = "Carla"