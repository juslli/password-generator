const campoSenha = document.getElementById("senha");
const botaoGerar = document.getElementById("gerar");
const botaoCopiar = document.getElementById("copiar");

const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";

function gerarSenha(tamanho = 12) {
  let senha = "";

  for (let i = 0; i < tamanho; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indiceAleatorio];
  }

  campoSenha.value = senha;
}

botaoGerar.addEventListener("click", () => {
  gerarSenha();
});

botaoCopiar.addEventListener("click", () => {
  if (campoSenha.value !== "") {
    navigator.clipboard.writeText(campoSenha.value);
    botaoCopiar.textContent = "Copiado!";
    
    setTimeout(() => {
      botaoCopiar.textContent = "Copiar";
    }, 1500);
  }
});