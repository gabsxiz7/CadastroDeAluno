let alunos = [];

function AddAlunoArray() {

    let aluno = {

        "matricula": document.getElementById("matricula").value,

        "nome": document.getElementById("nome").value,

        "nascimento": document.getElementById("nascimento").value,

        "curso": document.getElementById("curso").value,

        "sexo": document.querySelector('input[name="sexo"]:checked').value

    };

    alunos.push(aluno);

    console.log(alunos);

    alert("Aluno cadastrado com sucesso!");

}

function filtrarPorSexo(sexo) {

    let resultado = alunos.filter(aluno => aluno.sexo === sexo);

    exibirResultado(resultado);

}

function filtrarPorCursoESexo(curso, sexo) {

    let resultado = alunos.filter(aluno => aluno.curso === curso && aluno.sexo === sexo);

    exibirResultado(resultado);

}

function filtrarPorMatricula(limite) {

    let resultado = alunos.filter(aluno => aluno.matricula > limite);

    exibirResultado(resultado);

}

function exibirResultado(resultado) {

    let divResultado = document.getElementById("resultado");

    divResultado.innerHTML = ""; // Limpa resultados anteriores

    resultado.forEach(aluno => {

        divResultado.innerHTML += `<p>Matrícula: ${aluno.matricula}, Nome: ${aluno.nome}, Curso: ${aluno.curso}, Sexo: ${aluno.sexo}</p>`;

    });

}
 