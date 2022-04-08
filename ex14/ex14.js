let people = [];
const pessoas = [
  { nome: "Maria", idade: 18 },
  { nome: "José", idade: 20 },
  { nome: "Marcos", idade: 17 },
  { nome: "Ana", idade: 19 },
  { nome: "João", idade: 22 },
];
const listaFetch = document.getElementById("listaFetch");
const lista = document.getElementById("lista");

function gerarLista() {
  lista.innerHTML = "";
  for (let i = 0; i < pessoas.length; ++i) {
    // lista.innerHTML += `<li>${i}</li>`;
    const li = document.createElement("li");
    const txt = document.createTextNode(
      `Nome: ${pessoas[i].nome} - Idade: ${pessoas[i].idade}`
    );
    li.appendChild(txt);
    lista.appendChild(li);
  }
}

function gerarListaFetch() {
  listaFetch.innerHTML = "";
  for (let i = 0; i < people.length; ++i) {
    // listaFetch.innerHTML += `<li>${i}</li>`;
    const li = document.createElement("li");
    const txt = document.createTextNode(
      `Nome: ${people[i].name} - Altura: ${(people[i].height / 100).toFixed(
        2
      )} m`
    );
    li.appendChild(txt);
    listaFetch.appendChild(li);
  }
}

const fetchPeople = () => {
  console.log("ANTES");
  fetch("https://swapi.dev/api/people/")
    .then((res) => {
      console.log("res", res);
      return res.json();
    })
    .then((data) => {
      console.log("data", data);
      people = data.results;
      gerarListaFetch();
    })
    .catch((err) => {
      console.log("err", err);
    });
  console.log("DEPOIS");
};

gerarLista();
fetchPeople();
