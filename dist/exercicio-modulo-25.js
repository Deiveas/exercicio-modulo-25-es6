"use strict";

// Passo 1: Criar o array de objetos
var alunos = [{
  nome: 'João',
  nota: 7
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 8
}, {
  nome: 'Ana',
  nota: 6
}, {
  nome: 'Carlos',
  nota: 4
}];

// Passo 2: Criar a função que filtra os alunos com nota maior ou igual a 6
var filtrarAlunos = function filtrarAlunos(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};

// Testando a função
var alunosAprovados = filtrarAlunos(alunos);
console.log(alunosAprovados);