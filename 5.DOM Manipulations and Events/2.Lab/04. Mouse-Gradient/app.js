function attachGradientEvents() {
    let gradientElement = document.getElementById("gradient");
    let resultElement = document.getElementById("result");
  
    const gradientMouseOverHandler = (e) => {
      let persent = Math.floor((e.offsetX / e.target.clientWidth) * 100);
      resultElement.textContent = Math.floor(e.offsetX / e.target.clientWidth * 100) + '%'
    };
  
    gradientElement.addEventListener("mousemove", gradientMouseOverHandler);
  }