// Area of trapezoid calculator

// Add an click event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input numbers
  let a = +document.getElementById("length1").value;
  let b = +document.getElementById("length2").value;
  let h = +document.getElementById("height").value;

  //   Process the formula
  let area = (1 / 2) * (a + b) * h;

  // Output answer
  document.getElementById("output").innerHTML = area;
}
