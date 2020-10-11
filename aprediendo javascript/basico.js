/*CURSO DE JAVASCRIPT BASICO PLATZI
    Descripcion:
        Curso de javascript basico donde nos muestra las nociones basicas de la programacion 
        en este lenguaje.
        Fecha de visualizacion del curso: 9/10/2020.

    Temas:
        *   valores
        *   variables
        *   funciones
        *   scope
        *   hoisting
        *   coercion
        *   operadores
        *   condicionales
        *   ciclos
        *   arreglos
        *   objetos
    
    Bibliografia:
        *   https://developer.mozilla.org/es/docs/Web/JavaScript
        *   https://blog.makeitreal.camp/concurrencia/#:~:text=Concurrencia%20es%20la%20habilidad%20que,varias%20tareas%20a%20la%20vez.&text=Existen%20varios%20modelos%20de%20concurrencia,programaci%C3%B3n%20implementa%20alguno%20de%20ellos.
        *   https://platzi.com/blog/como-funciona-el-scope-en-javascript/#:~:text=El%20scope%20puede%20definirse%20como,global%20y%20el%20scope%20local.
        *   https://jsconsole.com/
*/

//VALORES

//valores primitivos
40 //valores numericos
"cadena de caracteres" // valores string
true //valores booleanos (verdadero)
false //valores booleanos (falso)
null //valores placeholder (vacios)
undefined //valores placeholder (vacios)

//valores no primitivos
[1,2,3] //arreglos, arrays
{nombre: "diego"} //objetos

/*TRUTHY AND FALSY de los valores.
    La expresion truthy and falsy es para conocer cuales valores son de forma predeterminada
    falsos o verdaderos.Todos los valores que en maquina codifiquen 0 son falsos y los que
    codifiquen 1 son verdaderos.
*/

//valores falsos
Boolean(false)
Boolean(undefined)
Boolean(null)
Boolean()//vacio tambien es falso
Boolean("")
Boolean(0)
Boolean(NaN)

//valores verdaderos
Boolean(" ")//si almenos tiene un caracter
Boolean(1)
Boolean([])
Boolean({})
Boolean(function(){})
Boolean(true)

/*VARIABLES
    Las variables son la forma de reservar espacio en la memoria asignandole un nombre a esa direccion de
    memoria, la variables tienen 4 caracteristicas:
        *   Declaracion: es cuando se define el nombre de la variable.
        *   Inicialicacion: es cuando de forma explicita se le asigna un valor por primera vez a la variable.
        *   Reasignacion (modificacion): es cuando se le modifica el valor ya asignado a una variable.
        *   Reubicaicon: es cuando se modifica la direccion de memoria asignada al nombre (apuntadores, aplica en c)
    hay varias maneras de crear una variable en javascript, para esto se utilizan estas tres 
    palabras clave:
        *   var: es la forma como se declaraban las variables antes de ECMAScript6
        *   let: es la forma como se declaran las variables desde ECMScript6
             tanto var como let se utiliza para variables que pueden cambiar.
        *   const: se utiliza para declarar variables constantes, que no pueden cambiar.

    diferencia entre let y var: las variables declaradas con var se pueden reinicializar las variables declaradas
    con let no se pueden reinicializar esto solucion los posibles bugs generados por el scope de las variables.
*/

//declaracion
let edad;
var nombre;

//inicializacion
edad = 20;
nombre = "felipe"

//declaracion e inicializacion
const name_variable = 10;
var genero = "masculino";
var elementos = ["computadora"]
var persona = {
    name: "juan",
    edad: 30,
    genero: 'M'
}

//reasignacion
edad = 10;

/*FUNCIONES
 Hay 2 tipos de funciones en javascript:
    *   declarativas: es cuando le asignamos un nombre especifico a la funcion
    *   expresivas: son tambien conocidas como funciones anonimas, estas no requieren asignarle un nombre estas se utilizan
                    asignandolas a una variable.

 Diferencias: las funciones declarativas pueden tener hoisting, las expresivas no.
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
console.log(`genero de la persona: ${genero}`)

/*SCOPE 
 El scope en codigo de programacion es el alcance que tiene las variables:
    *   global: son la variables que se pueden acceder desde cualquier parte del codigo.
    *   local: son la varibales a las que solo se puede acceder en el conjunto de codigo donde fue declarada (funciones)
*/
var global = 10;//variable global
function mifuncion(){
    var local = 20;//variable local
}

/*HOISTING
 es cuando las variables y funciones se procesan antes de que se ejecute el codigo, este termino es
 aplicable antes de ECMAScript 6, ya que desde ECMASccript 6 se implementaron palabaras clave que ayuda a evitar
 bug por este concepto.
*/

//Hoisting con variables
console.log(minombre);
var minombre = "felipe";
//genera un undefined: significa que javascript declara la variable y le asigna el valor undefined

//hoisting con funciones
hey();

function hey(){
    console.log("funcion con hoisting")
}
//en este caso funciona correctamente ya que gracias al hoisting se procesa la funcion antes de ser llamada.

/*COERCION
    La coercion es gracias a que javascript es un lenguaje debilmente tipado, lo que siginifica que este 
    leguaje no limita reasignar o cambiar el tipo de valor en la variables, hay 2 tipos de coerciones:
        *   implicitas: cuando el lenguaje ayuda y cambia los tipos de valores.
        *   explicitas: la forma en la que nosotros obligamos que un tipo de valor cambie.
*/

//Coercion implicita
4 + "7" //esto genera 47 esto es una coercion implicita a string (concatenacion)
4 * "7" // esto genera 28 coercion implicita a numero (operacion matematica)

//Coercion explicita
var a = 12
var c = String(12) //coercion explicita a string
var c = Number(c) //coercion explicita a numero

//OPERADORES

//aritmeticos
3 + 2 //suma
2 - 3 //resta
3 * 2 //multiplicacion
3 / 4 //division

//en strings
"pedro" + "ramirez" //concatenacion

//operador ternario permite hacer una condicion en una sola linea
condition ? true : false

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

/*CONDICIONALES.
    Es la forma en como nosotros expresamos una toma de decision en el codigo, los condicionales
    se validad segun la verdad de el condicionante, hay varias formas de condicionales:
        *   Consecutivos: de esta forma lo que generamos es que los condicionales no se
                excluyan entre si.
        *   Anidados: de esta forma los condicionales si se exlcluyen entre si.
        *   Por Casos: con esta forma podemos determinar accions evaluando el caso (valor) de
                una variable.
*/

//condicional simple
if(true){
    console.log('accion verdad')
}

//condicinal multiple anidado
if(a == 1){
    console.log('accion 1')
}else if(a == 2){
    console.log('accion 2')
}else{
    console.log('accion por defecto')
}

//condicional multiple consecutivo
if(a==1){
    console.log('accion 1')
}
if(a==2){
    console.log('accion 2')
}
if(a==3){
    console.log('accion 3')
}

//condicional con operador ternario
var prueba = numero == 1 ? "validacion de verdad" : "validacion de else";

//condicional switch (por casos)
switch (opc){
    case 1:
        console.log('accion 1')
        break;
    case 2:
        console.log('accion 2')
        break;
    default:
        console.log('accion por defecto')
        break;
}

/*ARRAYS (ARREGLOS)
    Es una estructura de datos iterable que nos permite agrupar cierto numero de valores.
*/
var a = [];//declarar arreglo vacio
var a = ['valor1','valor2','valor3']; //se declara el array con valores adentro
a.length//retorna el tamanno del arreglo
a.push('valor agregado al final del array') //se agregan valores en forma de cola
a.pop()//elimina el ultimo elemento en el array
a.unshift('valor a agregar al principio del array')//se agregan valores en forma de pila
a.shift()//elimina el primer valor del array
a.indexOf("valor a buscar")//retorna la posicion del valor buscado

//metodo de recorrido de arrays
b = a.filter(function(parametroFiltrar){
    return console.log('retorna unos datos segun una condicion de filtrado')
})

b = a.map(function(parametroMapeo){
    return console.log('retorna un mapeo de los datos solicitados')
})

b = a.find(function(ParametroBuscar){
    return console.log('retorna el valor que es igual al parametro buscado')
})

a.forEach(function(parametro){
    console.log('recorre el arreglo segun el parametro')
});

flag = a.some(function(){
    return console.log('condicional de validacion, retorna true o false')
});

/*LOOPS
    Nos permiten realizar tareas repetitivas en el codigo.
*/

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

/*OBJETOS
    recordar que javaScript es un lenguaje de paradigma orientado a objetos.
    Los objetos son la representacion de elementos con caracteristica y acciones en la vida real:
        *   atributos: los atributos son la representacion de las caracteristicas, se almacenan
                en variables.
        *   metodos: son la representacion de las acciones del objetos, se utilizan las funciones
                para aplicar los metodos.
*/
var auto = {
    //atributos
    marca: "",
    modelo: "",
    annio: 0,
    //metodos
    mostrarDetalle: function(){
        console.log(`Auto ${this.marca}, Modelo ${this.modelo}, año: ${this.annio}`);
    }
}

//funcion constructora



