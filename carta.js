var carta = new Array(4);
carta[0] = new Array(4);
carta[1] = new Array(4);
carta[2] = new Array(4);
carta[3] = new Array(4);
var n;
var i1, i2;
var repetidos = new Array(12);

// Función para generar las cartas aleatorias
function cartas(){
  var c = 1;
  for (var x = 0; x < 4; x++) {
    for (var y = 0; y < 4; y++){
      while (true){
        n = Math.floor(Math.random() * 54) + 1;  // Genera un número entre 1 y 54
        
        // Verifica si el número ya ha sido usado
        if (!repetidos.includes(n)){
          break;
        }
      }
      carta[x][y] = n;  // Asigna el número generado a la carta
      repetidos[c-1] = n;  // Guarda el número para evitar duplicados
      
      // Asigna la imagen correspondiente a cada carta
      document.getElementById("c" + c).src = "../img/" + n + ".jpg";
      c++;
    }
  }
}

// Función para consultar la carta seleccionada
function consultar(){
  i1 = document.getElementById("i1").value;  // Obtiene el valor de la primera entrada
  i2 = document.getElementById("i2").value;  // Obtiene el valor de la segunda entrada
  
  // Muestra la imagen de la carta seleccionada en el 'prev'
  document.getElementById("prev").src = "../img/" + carta[i1][i2] + ".jpg";
  
  // Reproduce el sonido correspondiente a la carta
  play();
}

// Función para reproducir el sonido de la carta seleccionada
function play(){
  let audio = new Audio("../audio/b" + carta[i1][i2] + ".mp3");  // Ruta del archivo de sonido
  audio.play();  // Reproduce el sonido
}

// Inicializa las cartas cuando la página se carga
cartas();
