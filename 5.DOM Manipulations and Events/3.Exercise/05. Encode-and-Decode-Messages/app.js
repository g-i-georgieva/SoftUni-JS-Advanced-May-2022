function encodeAndDecodeMessages() {
  let textArea = document.querySelectorAll("textarea");
  let buttons = document.querySelectorAll("button");

  buttons[0].addEventListener("click", encode);
  buttons[1].addEventListener("click", deconde);

  function encode(e) {
    let encodedMessage = "";
    let input = textArea[0].value;

    for (let index = 0; index < input.length; index++) {
      encodedMessage += String.fromCharCode(input[index].charCodeAt(0) + 1);
    }

    textArea[1].value = encodedMessage;
    textArea[0].value = "";
  }

  function deconde(e) {
    let decodedMessage = "";

    let input = textArea[1].value;

    for (let index = 0; index < input.length; index++) {
      decodedMessage += String.fromCharCode(input[index].charCodeAt(0) - 1);
    }

    textArea[1].value = decodedMessage;
  }
}
