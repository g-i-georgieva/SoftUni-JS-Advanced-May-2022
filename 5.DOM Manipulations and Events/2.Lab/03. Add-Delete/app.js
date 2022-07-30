function addItem() {
  //select input field and read value
  const input = document.getElementById("newItemText");
  //create new <li> element and set its content
  const liElement = document.createElement("li");
  liElement.textContent = input.value; // if instead textContect we take innerHTML and in the input field we write <p>Paragraph</p> on the web page we will directly receive Paragraph, if we use textContent we will receive the exact text <p>Paragraph</p>

  //create [Delete] anchor
  const deleteBtn = document.createElement("a");
  deleteBtn.textContent = "[Delete]";
  deleteBtn.href = "#";
  liElement.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", onDelete);

  //select <ul> and append new <li> lement
  document.getElementById("items").appendChild(liElement);
  //nice to have: clear input field
  input.value = "";

  function onDelete(event) {
    event.target.parentElement.remove();
  }
}
