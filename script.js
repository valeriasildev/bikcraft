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

const livroRetorno = livro("O Senhor dos Anéias", 1954, "J. R. R. Tolkien");
console.log (livroRetorno);

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
    
    const livroRetorno = livro("O Senhor dos Anéias", 1954, "J. R. R. Tolkien");
    console.log (livroRetorno);