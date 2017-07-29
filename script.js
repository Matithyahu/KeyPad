var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var keyValue = "";

var keyValueViewer = document.querySelector("p");
keyValueViewer.innerHTML = "Enter six numbers"

numbers.forEach(function(n) {
  var element = document.getElementById(n.toString());
  element.innerHTML = n.toString();
  element.style.cssText = "background-color: white;";

  element.addEventListener("click", function() {
    // set keyValueViewer and link to the p tag

    keyValue = keyValue + element.innerHTML;
    keyValueViewer.innerHTML = keyValue;

    if (keyValueViewer.innerHTML.length === 6) {
      if (keyValue === "593721") {
        var lockStatus = document.querySelector("h1");
        lockStatus.innerHTML = "Unlocked! Proceed.";
        keyValue = "";
        keyValueViewer.innerHTML = keyValue;
        var keyPad = document.getElementById('keypad');
        keyPad.innerHTML = "";
      } else {

          keyValue = "Try again";
          keyValueViewer.innerHTML = keyValue;

        setTimeout( function() {
          keyValue = "";
          keyValueViewer.innerHTML = keyValue;
        }, 1000)

      }
    }
    fade()
  });

  var fade = function() {
    timeColor = [
      { time: 1, color: '#339966'},
      { time: 100, color: '#66B38C'},
      { time: 200, color: '#99CCB3'},
      { time: 300, color: '#CCE6D9'},
      { time: 350, color: 'white'}
    ];
    timeColor.forEach(function(tC) {
      console.log(tC.time);
      console.log(tC.color);
    })

      setTimeout( function() {
      element.style.cssText = 'background-color: #339966;';
    }, 1)
    setTimeout( function() {
      element.style.cssText = 'background-color: #66B38C;';
    }, 100)
    setTimeout( function() {
      element.style.cssText = 'background-color: #99CCB3;';
    }, 200)
    setTimeout( function() {
      element.style.cssText = 'background-color: #CCE6D9;';
    }, 300)
    setTimeout( function() {
      element.style.cssText = 'background-color: white;';
    }, 350)
}

  });