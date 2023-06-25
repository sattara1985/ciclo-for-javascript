// 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

const arr = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    console.log(arr[i]+' es numero');
  }
}
console.log("hola");