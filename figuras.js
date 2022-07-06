// //Codigo del cuadrado
// console.group("Cuadrados");
// const LadoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + LadoCuadrado + "cm");

// const perimetroCuadrado = LadoCuadrado * 4;
// console.log("El perimetro del cuadrado mide: " + perimetroCuadrado + "cm");

// const areaCuadrado = LadoCuadrado * LadoCuadrado;
// console.log("El area del cuadrado mide: " + areaCuadrado + "cm2");
// console.groupEnd();

// //codigo del triangulo
// console.group("Triangulos");

// const LadoTriangulo1 = 6;
// const LadoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//     "Los lados del triangulo miden: "
//     + LadoTriangulo1
//     + "cm, "
//     + LadoTriangulo2
//     + "cm, "
//     + baseTriangulo
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

// const perimetroTriangulo = LadoTriangulo1 + LadoTriangulo2 + baseTriangulo;
// console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cm");

// const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
// console.log("El area del triangulo mide: " + areaTriangulo + " cm2");

// console.groupEnd();

// //codigo del circulo
// console.group("circulos");

// // Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + " cm");

// //Diametro
// const diametroCirculo = radioCirculo * 2;
// console.log("El diametro del circulo es: " + diametroCirculo + " cm");

// // PI
// const PI = Math.PI;
// console.log("PI es: " + PI);

// // circunferencia
// const perimetroCirculo = diametroCirculo * PI
// console.log("El perimetro del circulo es: " + perimetroCirculo + " cm");

// //area
// const areaCirculo = (radioCirculo * radioCirculo) * PI
// console.log("El area del circulo es: " + areaCirculo + " cm2");

//  console.groupEnd();

//el ejercicio anterior se basa en actividad con datos fijos y constantes. pasaremos toda la informacion y trabajaremos en funciones



// codigo del cuadrado
console.group("Cuadrados");
function perimetroCuadrado (lado) {
    return lado * 4;
}

function areaCuadrado (lado) {
    return lado * lado;
}
console.groupEnd();

// codigo del triangulo
console.group("triangulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
console.groupEnd();

//codigo del circulo
console.group("circulos");

function diametroCirculo(radio){
    return radio * 2;
}

const PI = Math.PI;

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}
console.groupEnd();

// aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
