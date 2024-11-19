const titulo = document.querySelector("#titulo");
const diretor = document.querySelector("#diretor");
const genero = document.querySelector("#genero");
const ano = document.querySelector("#ano");
const stars = document.querySelectorAll(".star");
console.log(stars);
const formulario = document.querySelector("#formulario");
const botao_cadastrar = document.querySelector("#botao_cadastrar");
const botao_voltar = document.querySelector("#botao_voltar");
let qtde_stars = 0;
const lista_filmes = JSON.parse(localStorage.getItem("filmes")) || [];

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const filme = {
    titulo: titulo.value,
    diretor: diretor.value,
    genero: genero.value,
    ano: ano.value,
    stars: qtde_stars,
  };

  lista_filmes.push(filme);

  localStorage.setItem("filmes", JSON.stringify(lista_filmes));

  formulario.reset();
  titulo.focus();

  window.location.href = "/index.html";
});

botao_voltar.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href = "/index.html";
});

// estudar essa parte!
stars.forEach((star) => {
  star.addEventListener("click", (e) => {
    const clicada = +e.target.dataset.identificador;
    qtde_stars = clicada;
    stars.forEach((element) => {
      if (+element.dataset.identificador <= clicada) {
        element.classList.add("ativa");
      } else {
        element.classList.remove("ativa");
      }
    });
  });
});
