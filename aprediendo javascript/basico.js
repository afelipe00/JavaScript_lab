//valores en javascript
//valores primitivos
40 //valores numericos
"cadena de caracteres" // valores string
true //valores booleanos
false //valores booleanos
null //valores placeholder (vacios)
undefined //valores placeholder (vacios)
//valores no primitivos
[1,2,3] //arreglos, arrays
{nombre: "diego"} //objetos

//variables
/* hay varias maneras de crear una variable en javascript, para esto se utilizan estas tres palabras clave:
    var: es la forma como se declaraban las variables antes de ECMAScript6
    let: es la forma como se declaran las variables desde ECMScript6
    tanto var como let se utiliza para variables que pueden cambiar.
    const: se utiliza para declarar variables constantes, que no pueden cambiar.

    diferencia entre let y var: las variables declaradas con var se pueden reinicializar las variables declaradas
    con let no se pueden reinicializar esto solucion los posibles bugs generados por el scope de las variables.
*/
//declaracion
let edad;
var nombre;
//inicializacion
const name_variable = 10;
edad = 20;
nombre = "felipe"
//declaracion e inicializacion
var genero = "masculino"
var elementos = ["computadora"]
var persona = {
    name: "juan",
    edad: 30,
    genero: 'M'
}

//funciones
/* hay 2 tipos de funciones en javascript:

declarativas: es cuando le asignamos un nombre especifico a la funcion
expresivas: son tambien conocidas como funciones anonimas, estas no requieren asignarle un nombre estas se utilizan
asignandolas a una variable

las funciones declarativas se les aplica hoisting a las expresivas no
*/
// funciones declarativas

function myfunction(){
    return 3;
}

//funciones expresivas

let myfunc = function(a,b){
    return a + b;
}

myfunc(1,2);
//funcion para imprimir en la consola.
console.log(`hahahha ${genero}`)

//Scope
/* 
El scope en codigo de programacion es el alcance que tiene las variables:
global: son la variables que se pueden acceder desde cualquier parte del codigo.
local: son la varibales a las que solo se puede acceder en el conjunto de codigo donde fue declarada (funciones)
*/
//Hoisting
/* es cuando las variables y funciones se procesan antes de que se ejecute el codigo, este termino es
aplicable antes de ECMAScript 6 */
//ejemplo:
console.log(minombre);
var minombre = "felipe";
//genera un undefined: significa que javascript declara la variable y le asigna el valor undefined
//hoisting con funciones
hey();

function hey(){
    console.log("funcion con hoisting")
}
//en este caso funciona correctamente ya que gracias al hoisting se procesa la funcion antes de ser llamada.

//Coercion
/* la coercion es gracias a que javascript es un lenguaje debilmente tipado, hay 2 tipos de coerciones:
implicitas: cuando el lenguaje ayuda y cambia los tipos de valores.
explicitas: la forma en la que nosotros obligamos que un tipo de valor cambie
*/

4 + "7" //esto genera 47 esto es una coercion implicita a string (concatenacion)
4 * "7" // esto genera 28 coercion implicita a numero (operacion matematica)
var a = 12
var c = String(12) //coercion explicita a string
var c = Number(c) //coercion explicita a numero


//truthy and falsy
//con esto determinamos que valores son falso o verdaderos de forma predeterminada
//todos los valores que en maquina codifiquen 0 son falsos y los que codifiquen 1 son verdaderos

//valores falsos
Boolean(false)
Boolean(undefined)
Boolean(null)
Boolean()//vacio tambien es falso
Boolean("")
Boolean(0)
NaN

//valores verdaderros
Boolean(" ")//si almenos tiene un caracter
Boolean(1)
Boolean([])
Boolean({})
Boolean(function(){})
Boolean(true)

//operadores en javaScript

//aritmeticos
3 + 2 //suma
2 - 3 //resta
3 * 2 //multiplicacion
3 / 4 //division

//en strings
"pedro" + "ramirez" //concatenacion

//logicos
!false //negacion
a==b //verificacion de igualdad (solo verifica el valor no el tipo)
a===b //verificacion de igualdad (verifica valor y tipo)
a!=b //verificacion de diferencia
a<=b //validacion de menor igual
a>=b //validacion de mayor o igual
a>b //mayor
a<b //menor
a && b //compuerta and
a || b //compuerta or
a++ //suma por 1
a+=2 //suma por valor definido
a-- //resta por 1
a-=2 //resta por valor definido

//asignacion
var a = 1 //se asigna el valor de 1

//condicionales
//condicional unitario
if(true){//valida la veracidad

}else {
    //valor por defecto
}
//condicinal multiple
if(true){

}else if(a == 2){

}else{
    //valor por defecto
}
//operador ternario permite hacer una condicion en una sola linea
//condition ? true : false
var prueba = numero == 1 ? "validacion de verdad" : "validacion de else";

//condicional switch
//condicional que valida por casos
switch (opc){
    case 1:
        break;
    case 2:
        break;
    default:
        break;
}


//arrays (arreglos)
//es una estructura de datos iterable
var a = [];//declarar arreglo vacio
var a = ['valor1','valor2','valor3']; //se declara el array con valores adentro
a.length()
a.push('valor agregado al final del array') //se agregan valores en forma de cola
a.pop()//elimina el ultimo elemento en el array
a.unshift('valor a agregar al principio del array')//se agregan valores en forma de pila
a.shift()//elimina el primer valor del array
a.indexof("valor a buscar")//retorna la posicion del valor buscado


//loops
//loop for
for (var i = 0 ; i< tam; i++){
    //tarea ciclica
}
//loop for of
//el for of nos permite recorrer el arreglo por medio de los valors en ves de los indices.
for(var valor of lista){
    //tarea ciclica
}

//loop while
while(validaciontrue){
    //accion ciclica
}
//loop do while
do{
    //accion ciclica
}while(validaciontrue);

//objetos
//recordad que javaScript es un lenguaje de paradigma orientado a objetos

