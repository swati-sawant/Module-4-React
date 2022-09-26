//Q5

function createData() {
  let header = document.createElement("h1");
  header.textContent = "This Is The Imperative Task";
  header.className = "header";
  return header;
}

let parent = document.getElementById("root");
parent.appendChild(createData());
