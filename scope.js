//Scope es el alcanse que tienen las variables. Depende mucho de dónde declares e inicialices las variables, de si vas a tener acceso a ella o no.

//El alcance (scope) de una variable puede ser:
//1- Global: el todo. Estará todas las variables y funciones. No puede acceder a lo que está en local. 
var miNombre = "Carla";

//2- Local: un grupo que está dentro del scope global. Puede acceder a las variables del scope global, mas no viceversa. 
function nombre(){
    var miApellido = "Lopez";
    console.log(miNombre + " " + miApellido);
}

nombre(); //Devuelve "Carla Lopez", esta linea está fuera del scope local. 
miNombre //está en global
miApellido //No está en global. 

//En todo el código podemos utilizar la variable global.
//Las variables locales sólo pueden ser accedidas 
//dentro de la función en la que fueron declaradas.