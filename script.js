function pegarNome() {
let nome = document.querySelector("#nome").value

if (nome === "Jonas") {
console.log("USUÁRIO JÁ CADASTRADO");
}else{
console.log("USUÁRIO NOVO")
}
}