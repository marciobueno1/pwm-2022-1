let currentPage = "https://swapi.dev/api/people/";
let nextPage = null;
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
const btProxPag = document.getElementById("btProxPag");

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
  btProxPag.disabled = nextPage == null;
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

const fetchPeople = async () => {
  try {
    const res = await fetch(currentPage);
    const data = await res.json();
    people = data.results;
    nextPage = data.next;
    gerarListaFetch();
  } catch (error) {
    console.log("error", error);
  }
};

const goToNextPage = () => {
  currentPage = nextPage;
  btProxPag.disabled = true;
  fetchPeople();
};

btProxPag.onclick = goToNextPage;

gerarLista();
fetchPeople();

/* 

const fetchPeople = () => {
  fetch("https://swapi.dev/api/people/")
    .then((res) => res.json())
    .then((data) => {
      people = data.results;
      gerarListaFetch();
    });
};


*/
