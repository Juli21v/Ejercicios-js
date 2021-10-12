let imagen = document.getElementById("imagen");
let contenedor = document.getElementById("contenedor");

imagen.style.visibility = "visible";
const evento = () => {
  if (imagen.style.visibility == "visible") {
    //imagen.style.visibility = "hidden";
    // let html = ""
    //html += `<img src="${}" alt="arandano">`
    //document.getElementById("imagen").innerHTML = html
    document.getElementById("imagen").src = "img/arandano2.gif";
  }
};
const evento2 = () =>{
    if (imagen.style.visibility == "visible") {
        document.getElementById("imagen").src = "img/arandano.jpg";
    }
};

contenedor.onmouseover = function () {
  evento();
};
contenedor.onmouseout = function () {
  evento2();
};
