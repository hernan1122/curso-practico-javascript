//codigo del cuadrado
console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log("los lados del cuadrado miden " + ladoCuadrado + "cm"); */

function perimetroCuadrado(lado) {
    return lado * 4;
}
/* console.log("el perimetro del cuadrado es: " + perimetroCuadrado + "cm"); */

/* const areaCuadrado = ladoCuadrado * ladoCuadrado; */
function areaCuadrado(lado) {
    return lado * lado;
}
/* console.log("el area del cuadrado es " + areaCuadrado + "cm^2"); */
console.groupEnd();

//codigo del triangulo
/* console.group("Triangulos")
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(
    "los lados del triangulo miden "
    + ladoTriangulo1
    + "cm, "
    + ladoTriangulo2
    + "cm, "
    + baseTriangulo
    + "cm"
);

const alturaTriangulo = 5.5;
console.log("la altura del triangulo es de " + alturaTriangulo); */

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
/* console.log("el perimetro del triangulo es: " + perimetroTriangulo + "cm"); */

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
/* console.log("el area del triangulo es " + areaTriangulo + "cm^2"); */
console.groupEnd();

//codigo del circulo
console.group("Círculo");
//Radio
/* const radioCirculo = 4; */
/* console.log("el radio del circulo es: " + radioCirculo + "cm"); */

//Diámetro
function diametroCirculo(radio) {
    return radio * 2;
}
/* console.log("el diametro del circulo es: " + diametroCirculo + "cm"); */

//PI
const PI = Math.PI;
/* console.log("PI es: " + PI + "cm"); */

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
/* const perimetroCirculo = diametroCirculo * PI; */
/* console.log("el perimetro del circulo es: " + perimetroCirculo + "cm");*/
//Área
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
/* const areaCirculo = (radioCirculo * radioCirculo) * PI; */
/* console.log("el area del circulo es: " + areaCirculo + "cm^2"); */

console.groupEnd();

//Aqui interactuamos con el HTML
function CalcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    //esto permite obtener este elemento que esta en HTML
    const value = input.value;
    //para obtener solo el valor del input

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
    //muestra el resultado
}

function CalcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = areaCuadrado(value);
    alert(perimetro);
}

//reto: sacar la altura de un triangulo
const a = 5;
const c = 5;
const b = 5;

function area(a, b) {
    return (Math.sqrt((a^2) - ((b^2) - 4)))
}
