const boton = document.getElementById("boton");
const informacionA = document.getElementById("informacionA");
const informacionB = document.getElementById("informacionB");
const informacionC = document.getElementById("informacionC");
const informacionD = document.getElementById("informacionD");
const informacionE = document.getElementById("informacionE");
const informacionF = document.getElementById("informacionF");

let nombre = ["Roberto", "Luis", "José", "Hernan", "Jhoan", "Carlos"];
let sueldo = [900000, 850000, 760000, 990000, 840000, 500000];
const consulta = () =>{ 
  informacionA.innerHTML = `El empleado ${nombre[0]} alcanza un salario de ${sueldo[0]}`
  informacionB.innerHTML = `El empleado ${nombre[1]} alcanza un salario de ${sueldo[1]}`
  informacionC.innerHTML = `El empleado ${nombre[2]} alcanza un salario de ${sueldo[2]}`
  informacionD.innerHTML = `El empleado ${nombre[3]} alcanza un salario de ${sueldo[3]}`
  informacionE.innerHTML = `El empleado ${nombre[4]} alcanza un salario de ${sueldo[4]}`
  informacionF.innerHTML = `El empleado ${nombre[5]} alcanza un salario de ${sueldo[5]}`
}
boton.onclick = function () {
  consulta();
};