let nome, sobrenome, cpf, formulario


function pegarNome() {
  nome = document.querySelector("#nome").value.toLowerCase();
  if (nome == "") {
    alert("Preencha o campo nome");
    return;
  }
  if (nome.length < 3) {
    console.log("Nome de usuário deve ter mais do que 3 caracteres");
    return;
  } else if (nome === "jonas") {
    console.log("USUÁRIO JÁ CADASTRADO");
  } else {
    console.log("USUÁRIO NOVO");
  }
}


function pegarsobrenome() {
  sobrenome = document.querySelector("#sobrenome").value;

  if (sobrenome == "") {
    console.log("Preencha o campo sobrenome");
    return;
  }

  if (sobrenome.length < 3) {
    console.log("Sobrenome do usuário deve ter mais do que 3 caracteres");
    return;
  }
  if (nome === "costa") {
    console.log("USUÁRIO JÁ CADASTRADO");
  } else {
    console.log("USUÁRIO NOVO");
  }
}


function pegarCPF() {
   cpf = document.querySelector("#cpf").value;

  if (cpf == "") {
    console.log("Preencha o campo cpf");
    return;
  }

  if (cpf.length < 14) {
    console.log("CPF do usuário deve ter menos do que 14 caracteres");
    return;

  } else if (nome === "083-702-233-97") {
    console.log("USUÁRIO JÁ CADASTRADO");
  } else {
    console.log("USUÁRIO NOVO");
  }
}

function limparformulario(){
formulario = document.querySelector("#theform");
formulario.reset()
}

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  pegarNome();
  pegarsobrenome()
  pegarCPF()
  limparformulario()
 
});