let alunos = [];

function AddAluno(){
    aluno = {
        "nome": document.getElementById("nome").value,
        "nasc": document.getElementById("nasc").value,
        "email": document.getElementById("email").value,
        "curso": document.getElementById("curso").value
    }
    alunos.push(aluno);
    LimparCampos();
}

function ViewAluno(){
        console.log(alunos);    
    }

    function LimparCampos(){
        document.getElementById("nome").value = "";
        document.getElementById("nasc").value = "";
        document.getElementById("email").value = "";
        document.getElementById("curso").value = "";
    }

    function ViewName(){
        for(let i = 0; i < alunos.length; i++){
            console.log(alunos[i].nome);
        }
    }

    function UpdateCursos(){
        for(let i = 0; i < alunos.length; i++){
            alunos[i].curso = "Infórmatica";
        }
    }
