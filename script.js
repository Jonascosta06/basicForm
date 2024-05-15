function pegarNome() {
let nome = document.querySelector("#nome").value.toLowerCase();

if (nome === "jonas") {
console.log("USUÁRIO JÁ CADASTRADO");
}else{
console.log("USUÁRIO NOVO")
}
}