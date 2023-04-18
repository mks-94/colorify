function paint(color) {
  const circle = document.getElementById("circleID");
  circle.style = `background-color: ${color}`;
  console.log(circle);
}

function randomColor() {
  let circle = document.getElementById("circleID");
  circle.style.backgroundColor = generateRandomColors();
  console.log("random color", circle);
}

function generateRandomColors() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
