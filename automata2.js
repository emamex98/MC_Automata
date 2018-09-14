var x = "789A"
console.log(automata2(x));

function automata2(input) {

  var currentState = 0;

  // Corre si la palabra no es vacia
  if(input.length > 0){

    // Correr para cada indice de la palabra
    for(var i=0; i<input.length; i++){

      // Revision de estados
      switch(currentState){

        case 0:
          switch(true){
            case (input[i].charCodeAt(0) == 48):
              currentState = 2;
              break;
            case (input[i].charCodeAt(0) >= 49 && input[0].charCodeAt(0) <= 57):
              currentState = 5;
              break;
            default:
              currentState = 1;
          }
          break;

        case 2:
          switch(true){
            case(input[i].charCodeAt(0) == 88 || input[i].charCodeAt(0) == 120):
              currentState = 3;
              break;
            case(input[i].charCodeAt(0) >= 48 && input[i].charCodeAt(0) <= 55):
              currentState = 4;
              break;
            case(input[i].charCodeAt(0) == 56 || input[i].charCodeAt(0) == 57):
              currentState = 6;
              break;
            case(input[i].charCodeAt(0) == 46):
              currentState = 8;
              break;
            default:
              currentState = 1;
          }
          break;

        case 3:
          switch(true){
            case(input[i].charCodeAt(0) >= 48 && input[i].charCodeAt(0) <= 57):
              currentState = 7;
              break;
            case(input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 70):
              currentState = 7;
              break;
            case(input[i].charCodeAt(0) >= 97 && input[i].charCodeAt(0) <= 102):
              currentState = 7;
              break;
            default:
              currentState = 1;
          }
          break;

        case 4:
          switch(true){
            case(input[i].charCodeAt(0) >= 48 && input[i].charCodeAt(0) <= 55):
              currentState = 4;
              break;
            case (input[i].charCodeAt(0) == 46):
              currentState = 8;
              break;
            default:
              currentState = 1;
          }
          break;

        case 5:
          switch(true){
            case(input[i].charCodeAt(0) >= 48 && input[i].charCodeAt(0) <= 57):
              currentState = 5;
              break;
            default:
              currentState = 1;
          }
          break;

        case 6:
          switch(true){
            case(input[i].charCodeAt(0) == 46):
              currentState = 8;
              break;
            default:
              currentState = 1;
          }
          break;

        case 7:
          switch(true){
            case(input[i].charCodeAt(0) >= 48 && input[i].charCodeAt(0) <= 57):
              currentState = 7;
              break;
            case(input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 70):
              currentState = 7;
              break;
            case(input[i].charCodeAt(0) >= 97 && input[i].charCodeAt(0) <= 102):
              currentState = 7;
              break;
            default:
              currentState = 1;
          }
          break;

        case 8:
          switch(true){
            case(input[i].charCodeAt(0) >= 48 && input[i].charCodeAt(0) <= 57):
              currentState = 9;
              break;
            default:
              currentState = 1;
          }
          break;

        case 9:
          switch(true){
            case(input[i].charCodeAt(0) >= 48 && input[i].charCodeAt(0) <= 57):
              currentState = 9;
              break;
            case(input[i].charCodeAt(0) == 69 || input[i].charCodeAt(0) == 101):
              currentState = 10;
              break;
            default:
              currentState = 1;
          }
          break;

        case 10:
          switch(true){
            case(input[i].charCodeAt(0) >= 48 && input[i].charCodeAt(0) <= 57):
              currentState = 9;
              break;
            case(input[i].charCodeAt(0) == 43 || input[i].charCodeAt(0) == 45):
              currentState = 11;
              break;
            default:
              currentState = 1;
          }
          break;

        case 11:
          switch(true){
            case(input[i].charCodeAt(0) >= 48 && input[i].charCodeAt(0) <= 57):
              currentState = 9;
              break;
            default:
              currentState = 1;
          }
          break;

      }

      // Si cae en en pozo, romper loop
      if(currentState == 1){
        break;
      }

    }

  }

  switch (currentState){
    case 2:
      return "Número Natural";
      break;
    case 4:
      return "Número Octal";
      break;
    case 5:
      return "Número Natural";
      break;
    case 7:
      return "Número Hexadecimal";
      break;
    case 9:
      return "Número de Punto Flotante"
      break;
    default:
      return "Error"
  }

}
