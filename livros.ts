import * as leitor from "readline-sync"
class Livro{
    titulo: String
    autor: String
    anoPublicacao: number

    constructor( titulo: String, autor: String, anoPublicacao: number){
        this.titulo = titulo
        this.autor = autor
        this.anoPublicacao = anoPublicacao
    }

    obterDetalhes(){
        return `$(this.titulo), $(this.autor), $(this.anoPublicacao)`   
    }
}

function main(){
    let livro = cadastro()
    console.log(livro.obterDetalhes())
}

function cadastro(){
    let titulo = leitor.question("Insira o título do livro: ")
    let autor = leitor.question("Insira o autor do livro: ")
    let anoPublicacao = leitor.question("Insira o ano de publicacao do livro: ")
    let livro = new Livro(titulo, autor, anoPublicacao)
    return livro
}

main()