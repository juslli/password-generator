const campoSenha = document.getElementById("senha");
const botaoGerar = document.getElementById("gerar");
const botaoCopiar = document.getElementById("copiar");
const inputTamanho = document.getElementById("tamanho");
const valorTamanho = document.getElementById("valor-tamanho");
const checkMaiusculas = document.getElementById("maiusculas");
const checkNumeros = document.getElementById("numeros");
const checkSimbolos = document.getElementById("simbolos");
const mensagem = document.getElementById("mensagem");

const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeros = "0123456789";
const simbolos = "!@#$%&*()_-+=<>?/{}[]";

function mostrarMensagem(texto) {
  mensagem.textContent = texto;

  setTimeout(() => {
    mensagem.textContent = "";
  }, 2000);
}

function gerarSenha() {
  let caracteres = letrasMinusculas;

  if (checkMaiusculas.checked) {
    caracteres += letrasMaiusculas;
  }

  if (checkNumeros.checked) {
    caracteres += numeros;
  }

  if (checkSimbolos.checked) {
    caracteres += simbolos;
  }

  if (
    !checkMaiusculas.checked &&
    !checkNumeros.checked &&
    !checkSimbolos.checked
  ) {
    mostrarMensagem("Selecione pelo menos uma opção extra.");
  }

  let senha = "";
  const tamanho = Number(inputTamanho.value);

  for (let i = 0; i < tamanho; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indiceAleatorio];
  }

  campoSenha.value = senha;
}

inputTamanho.addEventListener("input", () => {
  valorTamanho.textContent = inputTamanho.value;
});

botaoGerar.addEventListener("click", () => {
  gerarSenha();
});

botaoCopiar.addEventListener("click", () => {
  if (campoSenha.value !== "") {
    navigator.clipboard.writeText(campoSenha.value);
    mostrarMensagem("Senha copiada com sucesso!");
    botaoCopiar.textContent = "Copiado!";

    setTimeout(() => {
      botaoCopiar.textContent = "Copiar";
    }, 1500);
  }
});

window.addEventListener("load", () => {
  gerarSenha();
});
