let boton = document.getElementById("boton");
let divs = document.getElementById("divs");

const evento = () => {
  let html = "";
  let limit = "30";
  for (let i = 0; i < limit; i++) {
      html += "<div>";
      html += "<p> CHIMICHURRI </p>";
      html += "</div>";
    }
  divs.innerHTML = html;
  divs.style.textAlign = "center";
};

divs.onclick = function () {
  divs.style.backgroundColor = "blueviolet";
};

boton.onclick = function () {
  evento();
};
