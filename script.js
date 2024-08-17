let nombre = prompt ("¿Cuál es tu nombre?");
var edad = parseInt (prompt ("¿Cuántos años tienes?"));
let lenguaje = prompt ("¿Qué lenguaje de programación estás estudiando?");

alert (`Hola ${nombre} tienes ${edad} años y ya estás aprendiendo ${lenguaje}`);

var respuesta = prompt (`¿Te gusta estudiar ${lenguaje} ? Responde con el número 1 para SÍ o 2 para NO.`);
if ( respuesta == 1) {
    alert ("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");    
} else {
    alert ("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?"); 
}