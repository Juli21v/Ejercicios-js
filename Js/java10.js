let tel = document.getElementById("tel");
let sof = document.getElementById("sof");
let pc = document.getElementById("pc");
let cel = document.getElementById("cel");
let clo = document.getElementById("clo");
let nev = document.getElementById("nev");
let btn = document.getElementById("btn");

let saldo = 1000000;

const producto1 = () => {
  alert("Este producto cuesta $1'800.000");
  if (saldo > 1800000) {
    alert("Se ha ingresado el articulo en el carrito");
  } else {
    alert(
      "Tu saldo no es suficiente, vuelve cuando hayan fondos suficientes para este articulo"
    );
  }
};
const producto2 = () => {
  alert("Este producto cuesta $480.000");
  if (saldo > 480000) {
    alert("Se ha ingresado el articulo en el carrito");
  } else {
    alert(
      "Tu saldo no es suficiente, vuelve cuando hayan fondos suficientes para este articulo"
    );
  }
};
const producto3 = () => {
  alert("Este producto cuesta $2'000.000");
  if (saldo > 2000000) {
    alert("Se ha ingresado el articulo en el carrito");
  } else {
    alert(
      "Tu saldo no es suficiente, vuelve cuando hayan fondos suficientes para este articulo"
    );
  }
};
const producto4 = () => {
  alert("Este producto cuesta $900.000");
  if (saldo > 900000) {
    alert("Se ha ingresado el articulo en el carrito");
  } else {
    alert(
      "Tu saldo no es suficiente, vuelve cuando hayan fondos suficientes para este articulo"
    );
  }
};
const producto5 = () => {
  alert("Este producto cuesta $700.000");
  if (saldo > 700000) {
    alert("Se ha ingresado el articulo en el carrito");
  } else {
    alert(
      "Tu saldo no es suficiente, vuelve cuando hayan fondos suficientes para este articulo"
    );
  }
};
const producto6 = () => {
  alert("Este producto cuesta $1'300.000");
  if (saldo > 1300000) {
    alert("Se ha ingresado el articulo en el carrito");
  } else {
    alert(
      "Tu saldo no es suficiente, vuelve cuando hayan fondos suficientes para este articulo"
    );
  }
};
const consulta = () => {
  alert("Tu saldo es de $1'000.000");
};
btn.onclick = function () {
  consulta();
};
tel.onclick = function () {
  producto1();
};
sof.onclick = function () {
  producto2();
};
pc.onclick = function () {
  producto3();
};
cel.onclick = function () {
  producto4();
};
clo.onclick = function () {
  producto5();
};
nev.onclick = function () {
  producto6();
};
