let e1 = document.getElementById("e1");
let e2 = document.getElementById("e2");
let e3 = document.getElementById("e3");
let e4 = document.getElementById("e4");
let e5 = document.getElementById("e5");
let e6 = document.getElementById("e6");
let mar = document.getElementById("mar");
let sou = document.getElementById("sou");
let pla = document.getElementById("pla");
let imp = document.getElementById("imp");
let pum = document.getElementById("pum");
let sup = document.getElementById("sup");

mar.style.visibility = "visible";
sou.style.visibility = "visible";
pla.style.visibility = "visible";
imp.style.visibility = "visible";
pum.style.visibility = "visible";
sup.style.visibility = "visible";
const evento = () => {
  if (mar.style.visibility == "visible") {
      mar.style.visibility = "hidden";
};
};
const evento2 = () =>{
    if (mar.style.visibility == "hidden") {
    mar.style.visibility = "visible";
};
};
const evento3 = () => {
    if (sou.style.visibility == "visible") {
        sou.style.visibility = "hidden";
  };
  };
  const evento4 = () =>{
      if (sou.style.visibility == "hidden") {
      sou.style.visibility = "visible";
  };
  };
  const evento5 = () => {
    if (pla.style.visibility == "visible") {
        pla.style.visibility = "hidden";
  };
  };
  const evento6 = () =>{
      if (pla.style.visibility == "hidden") {
      pla.style.visibility = "visible";
  };
  };
  const evento7 = () => {
    if (imp.style.visibility == "visible") {
        imp.style.visibility = "hidden";
  };
  };
  const evento8 = () =>{
      if (imp.style.visibility == "hidden") {
      imp.style.visibility = "visible";
  };
  };
  const evento9 = () => {
    if (pum.style.visibility == "visible") {
        pum.style.visibility = "hidden";
  };
  };
  const evento10 = () =>{
      if (pum.style.visibility == "hidden") {
      pum.style.visibility = "visible";
  };
  };
  const evento11 = () => {
    if (sup.style.visibility == "visible") {
        sup.style.visibility = "hidden";
  };
  };
  const evento12 = () =>{
      if (sup.style.visibility == "hidden") {
      sup.style.visibility = "visible";
  };
  };

e1.onmouseover = function () {
  evento();
};
e1.onclick = function () {
  evento2();
};
e2.onmouseover = function () {
    evento3();
};
e2.onclick = function () {
    evento4();
};
e3.onmouseover = function () {
    evento5();
  };
e3.onclick = function () {
    evento6();
};
e4.onmouseover = function () {
    evento7();
};
e4.onclick = function () {
    evento8();
};
e5.onmouseover = function () {
    evento9();
};
e5.onclick = function () {
    evento10();
};
e6.onmouseover = function () {
    evento11();
};
e6.onclick = function () {
    evento12();
};