function main() {
  var hint;
  var mistery;
  var name = "";
  var score = 0;

  function start() {
    document.getElementById("player-name").innerText = name;
  }
 
  function riddle() {
    hint = Math.floor(Math.random() * 10 + 1);
    document.getElementById("hint").innerText = hint;
    
    mistery = Math.floor(Math.random() * 10 + 1);
    document.getElementById("mistery").innerText = '?';
  }

  function win() {
    document.getElementById("result").innerText = '¡Correcto!';
    score++;
    document.getElementById("score").innerText = score;
  }

  function lose() {
    document.getElementById("result").innerText = '¡Fallaste!';
    score = 0;
  }

  while(name.length < 3) {
    name = prompt("¿Cómo te llamas?");
  }

  var higher = function() {
    if (mistery > hint) {
      win();
    } else {
      lose();
    }
    document.getElementById("mistery").innerText = mistery;
  };

  document.getElementById("higher").addEventListener("click", higher);
  
  var equal = function() {
    if (mistery === hint) {
      win();
    } else {
      lose();
    }
    document.getElementById("mistery").innerText = mistery;
  };

  document.getElementById("equal").addEventListener("click", equal);
  
  var lower = function() {
    if (mistery < hint) {
      win();
    } else {
      lose();
    }
    document.getElementById("mistery").innerText = mistery;
  };

  document.getElementById("lower").addEventListener("click", lower);

  var next = function() {
    riddle();
    document.getElementById("result").innerText = '';
    document.getElementById("score").innerText = score;
  };
  
  document.getElementById("next").addEventListener("click", next);
  
  start();
  riddle();
}

window.addEventListener("load", main);