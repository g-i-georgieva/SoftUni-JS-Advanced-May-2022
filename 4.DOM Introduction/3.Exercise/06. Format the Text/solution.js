function solve() {
    let input = document.getElementById("input").value;
    let output = document.getElementById("output");
  
    let sentances = input.split(".").filter((x) => x.length != 0);
  
    while (sentances.length > 0) {
      let textForParagraph = sentances.splice(0, 3).join(". ") + ".";
      let p = document.createElement('p');
      p.textContent = textForParagraph
      output.appendChild(p)
    }
  }