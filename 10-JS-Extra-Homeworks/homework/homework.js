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
  //return Object.entries(objeto);   ->esta es una manera mas pro
  let soluArray = [];
      for (key in objeto) {
        soluArray.push([key, objeto[key]]);
      }
      return soluArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let cuentas = {};
  let ch;
  let cuenta = 0;
  for (let i = 0; i < string.length; i++) {
    ch = string.charAt(i);
    if (cuentas[ch]) {
      cuentas[ch]++;
      //cuenta = cuentas[ch];
      //cuentas[ch] = cuenta + 1;   OJO: SI EN LUGAR DE CUENTA + 1 PUSIERA CUENTA++, NO ANDARÍA, PORQUE PRIMERO
      //                            PASARIA CUENTA A CUENTAS, Y LUEGO LE SUMA 1 A CUENTA. SÍ ANDARÍA HACE ++CUENTA
    }
    else {
      cuentas[ch] = 1;
    }
  }
  return cuentas;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let sp = s.split("");
  let mayus = []; 
  let minus = [];
  for (let i = 0; i < sp.length; i++) {
    if (sp[i] == sp[i].toUpperCase()) {              
      mayus.push(sp[i]);
    }
    if (sp[i] === sp[i].toLowerCase()) {
      minus.push(sp[i]);
    }
  }
  return mayus.join("") + minus.join("");
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let sp = str.split(' ');
  for (let i = 0; i < sp.length; i++) {
    let palSplit = sp[i].split('');
    sp[i] = palSplit.reverse().join('');
  }
  return sp.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número es un número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numStr = numero.toString();
  let numStrInv = numero.toString();
  let numStrInvArr = numStrInv.split('');
  numStrInv = numStrInvArr.reverse().join('');
  if (numStr === numStrInv) {
    return "Es capicua";
  }
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let cadenaSplit = cadena.split("");
  for (let i = cadena.length; i >= 0; i--) {
    if (cadenaSplit[i] === 'a' || cadenaSplit[i] === 'b' || cadenaSplit[i] === 'c') {
      cadenaSplit.splice(i,1);
    }
  }
  return cadenaSplit.join('');
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  //forma basica:

  //let newArr = arr;
  //for (let j = 0; j < newArr.length; j++) {
  //  for (let i = 0; i < newArr.length-1; i++) {
  //    if (newArr[i].length > newArr[i+1].length) {
  //      let a = newArr[i];
  //      newArr[i] = newArr[i+1];
  //      newArr[i+1] = a;
  //    }
  //  }
  //}
  //return newArr;

  //forma pro:

  let comparar = function (a,b) {
    return (a.length - b.length);
  }
  return arr.sort(comparar);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let intersecArr = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        intersecArr.push(arreglo1[i]);
      }
    }
  }
  return intersecArr;
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

