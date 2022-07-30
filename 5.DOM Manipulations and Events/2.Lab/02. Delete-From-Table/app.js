function deleteByEmail() {
  //select input field and read value
  const value = document.querySelector('input[name="email"]').value;
  //get body children
  const rows = Array.from(document.querySelectorAll("tbody tr"));
  //repeat for every row
  //... select second cell
  //... if textContect matches input value->remove row
  let found = false;
  for (const row of rows) {
    if (row.children[1].textContent == value) {
      row.remove();
      found = true;
    }
  }
  //if there is a match print 'Deleted'
  //otherwise, print 'Not found'
  document.getElementById("result").textContent = found
    ? "Deleted."
    : "Not found.";
}
