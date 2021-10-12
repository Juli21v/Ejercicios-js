const preguntas = document.getElementById("preguntas");

const casaf = () => {
  let palabra = prompt(
    "Ingresa el nombre de alguno de estos cuatro elementos"
  ).toLocaleLowerCase();
  switch (palabra) {
    case "casa":
      alert("House");
      break;
    case "gato":
      alert("Cat");
      break;
    case "mesa":
      alert("Table");
      break;
    case "perro":
      alert("Dog");
      break;
    default:
      alert("Ese no corresponde a un elemento de las imagenes")
      break;
  }
};
preguntas.onclick = function () {
  casaf();
};
