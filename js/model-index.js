//var mostrar = document.getElementById("Cinesgt").selectedIndex;

/*function select() {
  alert(selection.options[selection.selectedIndex].value);
 console.log("Esto es la opcion"+selection);
}

var selexion = document.getElementById("Guate");
function select() {
  alert(selection.selectedOptions[0].value);
   HTMLSelectElement.selectedOptions
} */




function selecion(){
  var lenguaje = document.getElementById("Cinesgt");
  var vert = lenguaje.value;

  switch (vert) {
    case "zona10":
    prompt("CINE:"+vert);
      break;
    case "eskala":
      prompt("CINE:"+vert);
      break;
      case "cayala":
        prompt("CINE:"+vert);
        break;
      default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        break;
  
  }
}

