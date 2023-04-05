const alunos = [
        { nome: "João", nota: 7.5 },
        { nome: "Maria", nota: 5.0 },
        { nome: "Pedro", nota: 6.7 },
        { nome: "Ana", nota: 8.9 },
        { nome: "Lucas", nota: 4.5 },
        { nome: "Julia", nota: 9.2 }
    ];

function alunosAprovados(arr) {
    return arr.filter(aluno => aluno.nota >= 6);
}

const aprovados = alunosAprovados(alunos);
console.log(aprovados);