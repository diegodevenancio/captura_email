// Selecionar elementos do DOM
const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

// Adicionar evento ao formulário
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const email = emailInput.value; // Pega o valor do campo de e-mail

  if (validateEmail(email)) {
    // Se o e-mail for válido
    message.textContent = "Obrigado pelo cadastro!";
    message.style.color = "green";
    message.classList.remove("hidden");
    emailInput.value = ""; // Limpa o campo de entrada
  } else {
    // Se o e-mail for inválido
    message.textContent = "Por favor, insira um e-mail válido.";
    message.style.color = "red";
    message.classList.remove("hidden");
  }
});

// Função para validar e-mails
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar e-mails
  return regex.test(email);
}
