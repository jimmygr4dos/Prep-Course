// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arregloNuevo = [];
  for (let clave in objeto) {
    arregloNuevo.push([clave, objeto[clave]]);
  }
  return arregloNuevo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  //var texto = "adsjfdsfsfjsdjfhacabcsbajda";
  var nuevoArreglo = [];
  var nuevoObjeto = {};
  for (let id in string) {
    nuevoArreglo.push(string.charAt(id));
  }
  nuevoArreglo.sort();
  var pcaracter = nuevoArreglo[0]; //a
  var vcaracter = 0;
  //console.log(nuevoArreglo);
  for (var i = 0; i < nuevoArreglo.length; i++) {
    //console.log(nuevoArreglo[i]);
    if (pcaracter === nuevoArreglo[i]) {
      vcaracter++;
    }
    else {
      nuevoObjeto[pcaracter] = vcaracter;
      pcaracter = nuevoArreglo[i];
      vcaracter = 1;
    }
    //console.log(nuevoArreglo[i]);
  }
  nuevoObjeto[pcaracter] = vcaracter;
  return nuevoObjeto;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  //var texto = "soyHENRY";
  var textMayusculas = "";
  var textMinusculas = "";
  var nuevoTexto = "";
  function esMayuscula(letra) {
    return letra === letra.toUpperCase();
  }
  function esMinuscula(letra) {
    return letra === letra.toLowerCase();
  }   
  for (let c in s) {
    //console.log(s[c]);
    if (esMayuscula(s[c])) {
      textMayusculas += s[c];
    }
    else if (esMinuscula(s[c])) {
      textMinusculas += s[c];
    }
  }
  nuevoTexto = textMayusculas + textMinusculas; 
  //console.log(textMayusculas);
  //console.log(textMinusculas);
  //console.log(nuevoTexto);
  return nuevoTexto;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //var texto = "The Henry Challenge is close!";
  var tempText = "";
  var finalText = "";
  let arr = str.split(' ');
  // console.log(arr); // ["The", "Henry", "Challenge", "is", "close!"]
  // console.log(arr.length); //5
  for (var i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
    tempText = arr[i];
    // console.log(arr[i].length);
    for (var j = tempText.length; j >= 0; j--) {
      //console.log(tempText.charAt(j));
      finalText += tempText.charAt(j);
    }
    finalText += (i < (arr.length-1)) ? " " : "";
  }
  return finalText;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  //var numero = 7878700;
  let arr = "" + numero;
  var arr1Mitad = [];
  var arr2Mitad = [];
  var bCapicua = false;
  // console.log(arr);
  // console.log(arr.length);
  for (var i = 0; i < Math.trunc(arr.length/2); i++) {
    arr1Mitad.push(arr[i]);
    // console.log(arr[i]);
  }
  for (var j = (arr.length-1); j >= Math.trunc(arr.length/2); j--) {
    arr2Mitad.push(arr[j]);
    // console.log(arr[j]);
  }
  
  // console.log(arr1Mitad); //1, 2
  // console.log(arr2Mitad); //4, 5
  
  for (var k = 0; k < arr1Mitad.length; k++) {
    // console.log(arr1Mitad[k]);
    // console.log(arr2Mitad[k]);
    if (arr1Mitad[k] === arr2Mitad[k]) {
      bCapicua = true;
    }
    else {
      bCapicua = false;
      break;
    }
  }
  
  return (bCapicua) ? "Es capicua" : "No es capicua";
  // console.log(bCapicua); 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var nuevaCadena = "";
  for (let c in cadena) {
    if ((cadena[c] !== "a") && (cadena[c] !== "b") && (cadena[c] !== "c")) {
      // console.log(cadena[c]);
      nuevaCadena += cadena[c];
    }
  }
  return nuevaCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a, b) {
    return a.length - b.length;
  });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var arrInt = [];
  for (let a in arreglo1) {
    // console.log(arreglo1[a]);
    for (let b in arreglo2) {
      // console.log(arreglo2[b]);
      if (arreglo1[a] === arreglo2 [b]) {
        arrInt.push(arreglo1[a]);
      }
    }
  }
  return arrInt;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

