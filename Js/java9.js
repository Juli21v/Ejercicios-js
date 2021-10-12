let btn = document.getElementById("btn")

const ingreso = () =>{
    let edad = prompt("¿Qué edad tienes?");
    if (edad < 18) {
        alert("No puedes ingresar, eres menor de edad :C")
    } else {
        let sexo = prompt("¿Cuál es tu sexo?").toLocaleLowerCase();
        switch (sexo) {
            case "mujer":
             if (edad > 25) {
                 alert("Tu entrada cuesta 25.000")
             }
             if (edad < 25) {
                 alert("Tu entrada cuesta 20.000")
             }
                break;
            case "hombre":
                if (edad > 24) {
                    alert("Tu entrada cuesta 30.000")
                }
                if (edad < 24) {
                    alert("Tu entrada cuesta 25.000")
                }
                break;
            default:
                alert("Valor incorrecto, intentelo de nuevo")
                break;
        }
    }
}

btn.onclick = function () {
    ingreso();
};