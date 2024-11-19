const resultado = document.querySelector("#resultado");

const filmes_cadastrados = JSON.parse(localStorage.getItem("filmes"));

filmes_cadastrados.forEach((filmes) => {
  const novo_card = document.createElement("div");
  novo_card.className = "card";

  const titulo = document.createElement("h2");
  titulo.textContent = `Título: ${filmes.titulo}`;

  const diretor = document.createElement("p");
  diretor.textContent = `Diretor: ${filmes.diretor}`;

  const genero = document.createElement("p");
  genero.textContent = `Gênero: ${filmes.genero}`;

  const ano = document.createElement("p");
  ano.textContent = `Ano: ${filmes.ano}`;

  const campo_star = document.createElement("div");
  campo_star.id = "rating";
  campo_star.className = "rating";
  campo_star.innerHTML = `
  <label class="star" data-identificador="1">★</label>
  <label class="star" data-identificador="2">★</label>
  <label class="star" data-identificador="3">★</label>
  <label class="star" data-identificador="4">★</label>
  <label class="star" data-identificador="5">★</label>
`;

  novo_card.append(titulo, diretor, genero, ano, campo_star);
  resultado.appendChild(novo_card);
});

// estudar essa parte!!
filmes_cadastrados.forEach((filme) => {
  const stars_classes = document.querySelectorAll(".star");

  stars_classes.forEach((element) => {
    if (+element.dataset.identificador <= +filme.stars) {
      element.classList.add("ativa");
    } else {
      element.classList.remove("ativa");
    }
  });
});
