let alunos = [];

function novoAluno (nome, idade) {
    return { nome, idade };
}

let alunos = [
    novoAluno("Mario", 23), novoAluno ("José", 45), novoAluno ("Marcia", 33), novoAluno("João", 19)
]


function temMenosde30 (aluno) {
    return aluno.idade < 30;
}

let alunosComMenosde30 = alunos.filter(temMenosde30);