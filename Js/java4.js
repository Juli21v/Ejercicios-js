    let cuerpo = document.getElementById("cuerpo");
    let boton = document.getElementById("boton")

    const ingreso = () =>{
    let password = prompt("Ingresa las palabras mágicas").toLocaleLowerCase();
    if (password == "miska muska mickey mouse") {
        alert("Puedes continuar :D")
        cuerpo.style.visibility = "visible"
    } else {
        alert("Contraseña incorrecta D:")
        cuerpo.style.visibility = "hidden";
    };
}

boton.onclick = function () {
    ingreso();
};