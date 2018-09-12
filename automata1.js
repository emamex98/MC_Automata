var x = "Emamex98"

console.log(check(x));

function check(input) {

  var currentState = 0;
  var matchPalabraReservada;

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

    // Regresar verdadero si se llega a un estado final
    if(currentState == 1)
      return true;
    else
      return false;

}
