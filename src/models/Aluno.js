"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Aluno = /** @class */ (function () {
    function Aluno(nome, matricula, idade) {
        this.nome = nome;
        this.matricula = matricula;
        this.idade = idade;
    }
    return Aluno;
}());
exports.default = Aluno;
var aluno1 = new Aluno('João Vitor', '40028922', 20);
console.log(aluno1);
