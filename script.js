const form = document.querySelector("#theform");
const tableElement = document.querySelector("#userTable");
const inputNomeUsuario = document.querySelector("#nome");
const inputSobrenomeUsuario = document.querySelector("#sobrenome");
const inputcpf = document.querySelector("#cpf");
const inputdata = document.querySelector("#data");

const usuariosCadastrados = [];

function limpaCampos() {
  inputNomeUsuario.value = "";
  inputSobrenomeUsuario.value = "";
  inputcpf.value = "";
  inputdata.value = "";
}

function verificarOUsuarioCadastrado(lista, nomeuser) {
  const nome = nomeuser.toLowerCase();
  console.log(nome);
  for (let usuario of lista) {
    const nomeSobrenome =
      usuario.nome.toLowerCase() + usuario.sobrenome.toLowerCase();
    if (nomeSobrenome === nome) {
      return true;
    }
  }
  return false;
}

function registroUsuarios() {
  const nome = inputNomeUsuario.value.trim();
  const segundoNome = inputSobrenomeUsuario.value.trim();
  const cpf = inputcpf.value.trim();
  const data = inputdata.value;
  const taVazio = !nome;

  if (taVazio) {
    alert("digite um nome");
    return;
  }
  if (nome.length < 3) {
    alert("Nome muito pequeno");
    return;
  }

  const jaRegistrado = verificarOUsuarioCadastrado(
    usuariosCadastrados,
    nome + segundoNome
  );

  if (jaRegistrado) {
    alert("Usuário ja existe");
    return;
  }
  usuariosCadastrados.push({
    nome: nome,
    sobrenome: segundoNome,
    data: data,
    cpf: cpf,
  });
  limpaCampos();

  console.log("Usuário Registrado", usuariosCadastrados);
}
function gerarTabela() {
  tableElement.innerHTML = "";
  for (usuario of usuariosCadastrados) {
    const linha = `<tr>
  <td>${usuario.nome} ${usuario.sobrenome}</td>
      <td>${usuario.cpf || ""}</td>
      <td>${usuario.data || ""}</td>
  </tr>`;
    tableElement.innerHTML += linha;
  }
}
gerarTabela();
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  registroUsuarios();
  gerarTabela();
});
