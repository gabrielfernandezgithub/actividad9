// Array extraño
const strangeArray = [
  "Zero",
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  "Go lang",
  undefined,
  "Cobol",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  function showNumbers() {
    return "1, 2, 3, 4";
  },
  "Another String",
  ["Hola mundo!"],
  "b is a letter",
  "JavaScript",
];

// Filtrar y mostrar elementos de tipo String ordenados alfabéticamente
function showStringsAlphabetically(array) {
  const stringArray = array.filter((element) => typeof element === "string");
  const sortedStringArray = stringArray.sort();

  const container = document.getElementById("list");
  container.innerHTML = "";
  
  sortedStringArray.forEach((element) => {
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(element));
    container.appendChild(li);
  });
}

// Llamar a la función para mostrar las strings ordenadas alfabéticamente
showStringsAlphabetically(strangeArray);
