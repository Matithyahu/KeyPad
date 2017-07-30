var numbers = [];

while (numbers.length < 10) {
  i = numbers.length;
  numbers.push(i);
}

var keyValue = "";

var keyValueViewer = document.querySelector("p");
keyValueViewer.innerHTML = "Enter six numbers";

var displayKeys = function() {
  numbers.forEach( function(n) {

    var keypad = document.getElementById('keypad');
    var key = document.createElement('div');
    key.id = n.toString();

    keypad.appendChild(key);

    var keyNum = document.getElementById(n.toString());
    keyNum.innerHTML = n.toString();
    keyNum.style.cssText = "background-color: white;";

  })
}

displayKeys();

numbers.forEach( function(n) {

  var element = document.getElementById(n.toString());
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
    // setTimeout and color values
    timeColor = [
      { time: 1, color: '#339966'},
      { time: 100, color: '#66B38C'},
      { time: 200, color: '#99CCB3'},
      { time: 300, color: '#CCE6D9'},
      { time: 350, color: 'white'}
    ];
    // iterate through timeColor objects
    timeColor.forEach( function(tC) {
      setTimeout( function() {
        element.style.cssText = `background-color: ${tC.color};`;
      }, tC.time)
    })
  }

  });
