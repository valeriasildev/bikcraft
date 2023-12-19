function livro (nome, ano, autor) {
const nomeMaior =  nome.toUpperCase();
const totalAnos = 2050-ano;
const frase = nome + 'por' + autor;
const objeto = {
    nome: nomeMaior,
    totalAnos,
    frase,
}
return objeto;
}

const botao = document.querySelector('.botao');

function mostrar() {
  const texto = document.querySelector('.texto');
  texto.classList.toggle('ativo');
}

botao.addEventListener('click', mostrar);
