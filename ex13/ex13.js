const lista = document.getElementById("lista");
const inputNum = document.getElementById("inputNum");
inputNum.focus();

function gerarLista() {
  const num = parseInt(inputNum.value);
  if (!isNaN(num)) {
    lista.innerHTML = "";
    for (let i = 0; i < num; ++i) {
      // lista.innerHTML += `<li>${i}</li>`;
      const li = document.createElement("li");
      const txt = document.createTextNode(i);
      li.appendChild(txt);
      lista.appendChild(li);
    }
  }
  inputNum.value = "";
  inputNum.focus();
}

document.getElementById("btGerar").onclick = gerarLista;
