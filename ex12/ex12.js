const inputTitulo = document.getElementById("titulo");
inputTitulo.focus();

function alterarTitulo() {
  const titulo = inputTitulo.value;
  document.title = titulo;
  inputTitulo.value = "";
  inputTitulo.focus();
}

document.getElementById("btAlterar").onclick = alterarTitulo;
