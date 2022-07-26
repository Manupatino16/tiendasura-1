//CREANDO VARIABLES TRADICIONALES O PRIMITIVAS

/*let nombreUsuario="Juan Jose"
let EDAD_USUARIO=33
let estaturaUsuario=1.62
let hinchaDelVerde=true

console.log(nombreUsuario)

console.log(EDAD_USUARIO)*/

//MERCANDO CON EL PROFE
let producto1="arroz"
let producto2="leche"
let producto3="huevo"
let producto4="carne de cerdo"
let producto5="pollo"
let producto6="galletas"
let producto7="panela"
let producto8="cafe"
let producto9="tapa roja"
let producto10="cerveza"
let producto11="tomate"
let producto12="papas"
let producto13="lechuga"
let producto14="frijoles"
let producto15="aceite"

//ARREGLOS DE DATOS
//UN ARREGLO ES UNA VARIABLE ESPECIAL 
//1. ARREGLO TRADICIONAL
let numeros=[1,2,8,9,45]
let nombres=["juan","catalina","mario","carlos"]
let contagios=[true,false,false,false,true]
//1.1 ACCEDIENDO A TODOS LOS DATOS(ELEMENTOS) DE UN ARREGLO
console.log(numeros)
//1.2 ACCDEDIENDO A UN SOLO ELEMENTO DEL ARREGLO
console.log(numeros[3])

//2.ARREGLOS ORIENTADOS A OBJETOS - ARREGLOS POO
let notas=Array(3.5,2.8,3.9,5)
console.log(notas)
console.log(notas[1])

//3.VARIABLES ESPECIALES PARA GUARDAR VARIOS DATOS
//DE TIPOS DIFERENTES
//OBJETOS
let persona={

    nombre:"Manuela",
    apellidos:["Patiño","Betancur"],
    edad:17,
    hinchaDelMejor:true

}

//ACCEDIENDO A TODOS LOS DATOS DE UN OBJETO
console.log(persona)

//ACCEDIENDO A UN SOLO ATRIBUTO DEL OBJETO
console.log(persona.nombre)
console.log(persona.apellidos[0])