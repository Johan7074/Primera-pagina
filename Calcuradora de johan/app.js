
function calcular(n1, n2, operacion) {
  if (operacion === "sumar") return n1 + n2;
  if (operacion === "restar") return n1 - n2;
  if (operacion === "multiplicar") return n1 * n2;
  if (operacion === "dividir") return n2 !== 0 ? n1 / n2 : "Error (÷0)";
  if (operacion === "potencia") return n1 ** n2;
}
function procesarCalculo() {
  const v1 = document.getElementById("num1").value;
  const v2 = document.getElementById("num2").value;
  const op = document.getElementById("operacion").value;

  if (v1.trim() === "" || v2.trim() === "") {
    document.getElementById("valorResultado").textContent = "Ingresa números";
    return;
  }

  const n1 = parseFloat(v1);
  const n2 = parseFloat(v2);

  const res = calcular(n1, n2, op);
  document.getElementById("valorResultado").textContent = res;
}

function borrar() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("valorResultado").textContent = "0";
}