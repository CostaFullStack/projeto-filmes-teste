const pesquisa = document.querySelector("#titulo_filme");
const botao_inicio = document.querySelector("#botao_inicio")
const resultado = document.querySelector("#resultado");


const filmes_cadastrados = JSON.parse(localStorage.getItem("filmes")) || [];

function exibirFilmes(filmes) {
  // tirando os resultados de antes, se eu não fizer isso, vai adicionando card atrás de card com o mesmo nome
  resultado.textContent = "";

  filmes.forEach((filme) => {
    const novoCard = document.createElement("div");
    novoCard.className = "card";

    const titulo = document.createElement("h2");
    titulo.textContent = `Título: ${filme.titulo}`;
    titulo.className = "titulo";

    const diretor = document.createElement("p");
    diretor.textContent = `Diretor: ${filme.diretor}`;
    diretor.className = "diretor";

    const genero = document.createElement("p");
    genero.textContent = `Gênero: ${filme.genero}`;

    const ano = document.createElement("p");
    ano.textContent = `Ano: ${filme.ano}`;

    novoCard.append(titulo, diretor, genero, ano);
    resultado.appendChild(novoCard);
  });
}

pesquisa.addEventListener("input", () => {
  // usando trim para remover os espaços em branco no início e no final
  const texto_pesquisa = pesquisa.value.toLowerCase().trim();

  if (texto_pesquisa === "") {
    // limpando os resultados
    resultado.textContent = ""; 
    return;
  }

  // filtrando os resultados pelo título
  const filmes_filtrados = filmes_cadastrados.filter((filme) =>
    filme.titulo.toLowerCase().includes(texto_pesquisa)
  );

  // exibindo os filmes filtrados
  exibirFilmes(filmes_filtrados);

});

botao_inicio.addEventListener("click", (e) => {
  e.preventDefault()
  window.location.href = "index.html"
})

