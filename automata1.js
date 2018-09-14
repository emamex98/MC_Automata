var x = "0"
console.log(automata2(x));

function automata1(input) {

  var currentState = 0;
  var matchPalabraReservada;

  var reservadas = ["if","else","then","begin","end","var","program"];
  var sumaAscii = 0;
  var sumaAsciiRes = 0;

  if(input.length > 0){

    // Revisar primer caracter
    switch(true) {
      case (input[0].charCodeAt(0) < 65 || input[0].charCodeAt(0) > 122):
        currentState = 2;
        break;
      case (input[0].charCodeAt(0) == 95):
        currentState = 1;
        break;
      case (input[0].charCodeAt(0) > 90 && input[0].charCodeAt(0) < 97):
        currentState = 2;
        break;
      default:
        currentState = 1;
    }

    // Si primer caracter es valido, revisar el resto de los caracteres
    if(currentState != 2){

      for (var i=1; i<input.length; i++) {

        switch(true) {
          case (input[i].charCodeAt(0) < 48 || input[i].charCodeAt(0) > 122):
            currentState = 2;
            break;
          case (input[i].charCodeAt(0) == 95):
            currentState = 1;
            break;
          case (input[i].charCodeAt(0) > 90 && input[i].charCodeAt(0) < 97):
            currentState = 2;
            break;
          case (input[i].charCodeAt(0) > 57 && input[i].charCodeAt(0) < 65):
          currentState = 2;
            break;
            default:
          currentState = 1;
        }

        if(currentState != 1){
          break;
        }

      }

    }

    // Sumar los valores ASCII de la palabra
    for(var i=0; i<input.length; i++){
      sumaAscii += input[i].charCodeAt(0);
    }

    // Revisar si la suma de codigos ASCII coincide con los de una palabra reservada
    for(var i=0; i<input.length; i++){
      for(var j=0; j<input.length; j++){
        sumaAsciiRes+= reservadas[i].charCodeAt(j);
      }

      // Si suma coincide, checar que valor no sea el mismo
      if(sumaAscii == sumaAsciiRes){
        if(input === reservadas[i]){
          currentState = 2;
          break;
        }
      }

      sumaAsciiRes = 0;
    }

  }

  // Regresar verdadero si se llega a un estado final
  if(currentState == 1)
  return true;
  else
  return false;

}
