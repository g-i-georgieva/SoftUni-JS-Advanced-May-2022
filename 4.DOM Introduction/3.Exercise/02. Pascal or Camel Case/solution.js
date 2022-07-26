function solve() {
    let text = document.getElementById("text").value;
    let currentCase = document.getElementById("naming-convention").value;
    let textToLowerCase = text.toLowerCase();
    let array = textToLowerCase.split(" ");
    let result = "";
  
    if (currentCase == "Pascal Case") {
      for (const el of array) {
        let word = el.charAt(0).toUpperCase() + el.slice(1);
        result += word;
      }
    } else if (currentCase == "Camel Case") {
      result += array[0];
      if (array.length > 1) {
        for (let i = 1; i < array.length; i++) {
          let word = array[i];
          result += word.charAt(0).toUpperCase() + word.slice(1);
        }
      }
    } else {
      result = "Error!";
    }
  
    document.getElementById("result").textContent = result;
  }