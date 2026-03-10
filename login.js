function entrar(){

let tipo = document.getElementById("tipo").value

if(tipo === "professor"){
window.location.href="professor.html"
}

if(tipo === "aluno"){
window.location.href="aluno.html"
}

}