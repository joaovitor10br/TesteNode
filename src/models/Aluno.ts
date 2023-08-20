export default class Aluno{
    private nome: String
    private matricula: String
    private idade: number

    constructor(nome: string, matricula: string, idade: number){
        this.nome = nome
        this.matricula = matricula
        this.idade = idade
    }
}
var aluno1 = new Aluno('João Vitor', '40028922', 20)
console.log(aluno1)
