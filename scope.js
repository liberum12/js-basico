//El alcance (scope) de una variable puede ser:
//1- Global:
var miNombre = "Carla";

//2- Local:
function nombre(){
    var miApellido = "Lopez";
    console.log(miNombre + " " + miApellido);
}

nombre(); //Devuelve "Carla Lopez"

//En todo el código podemos utilizar la variable global.
//Las variables locales sólo pueden ser accedidas 
//dentro de la función en la que fueron declaradas.