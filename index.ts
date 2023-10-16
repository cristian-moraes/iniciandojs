import { Pessoa } from "./Pessoa";
import * as leitor from "readline-sync"

function main(): void{
    const humano = metodos()
    let decisao = leitor.question("Você gostaria de modificar o cadastro? (s/n)")
    if(decisao === "s"){
        editarCadastro(humano)
    } else {
        console.log("Obrigado, saindo...");
    }
}

function cadastro(): Pessoa{
    let nome = leitor.question("Insira seu nome aqui: ")
    let CPF = leitor.question("Insira seu CPF aqui: ")
    let RG = leitor.question("Insira seu RG aqui: ")
    let cor = leitor.question("Insira sua cor aqui: ")
    let idade = leitor.question("Insira sua idade aqui: ")
    const humano = new Pessoa(nome, CPF, RG, cor, idade)
    return humano
}

function metodos(): Pessoa{
    const humano = cadastro()
    humano.getNome()
    humano.getCPF()
    humano.getRG()
    humano.getCor()
    humano.getIdade()
    return humano
}

function editarCadastro(humano: Pessoa){
    humano.setNome()
    humano.setCPF()
    humano.setRG()
    humano.setCor()
    humano.setIdade()
    humano.getNome()
    humano.getCPF()
    humano.getRG()
    humano.getCor()
    humano.getIdade()
}

main()