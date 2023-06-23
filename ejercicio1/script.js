// 1. Crea un programa que imprima en consola los números impares del 1 al 50.
let contador=0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 !== 0) {
    console.log(i+' es impar');
    contador++;

  }
  
}
console.log('total de numeros impares entre 1 a 50  es: '+contador)
