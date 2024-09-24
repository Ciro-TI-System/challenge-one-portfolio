//Validação do formulário de contato

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contato__formulario");
  const nomeInput = document.getElementById("nome");
  const emailInput = document.getElementById("email");
  const assuntoInput = document.getElementById("assunto");
  const mensagemInput = document.getElementById("mensagem");
  const submitButton = document.querySelector(".contato__botao");

  // Mensagens de erro
  const nomeError = document.createElement("p");
  const emailError = document.createElement("p");
  const assuntoError = document.createElement("p");
  const mensagemError = document.createElement("p");

  nomeError.classList.add("error-message");
  emailError.classList.add("error-message");
  assuntoError.classList.add("error-message");
  mensagemError.classList.add("error-message");

  // Insere as mensagens de erro logo após os campos correspondentes
  nomeInput.parentNode.insertBefore(nomeError, nomeInput.nextSibling);
  emailInput.parentNode.insertBefore(emailError, emailInput.nextSibling);
  assuntoInput.parentNode.insertBefore(assuntoError, assuntoInput.nextSibling);
  mensagemInput.parentNode.insertBefore(
    mensagemError,
    mensagemInput.nextSibling
  );

  // Desabilita o botão inicialmente
  submitButton.disabled = true;

  // Função para verificar se todos os campos estão válidos
  function validarFormulario() {
    let nomeValido =
      nomeInput.value.trim() !== "" && nomeInput.value.trim().length <= 50;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailValido =
      emailInput.value.trim() !== "" &&
      emailRegex.test(emailInput.value.trim());
    let assuntoValido =
      assuntoInput.value.trim() !== "" &&
      assuntoInput.value.trim().length <= 50;
    let mensagemValida =
      mensagemInput.value.trim() !== "" &&
      mensagemInput.value.trim().length <= 300;

    // Se todos os campos forem válidos, habilita o botão, caso contrário desabilita
    if (nomeValido && emailValido && assuntoValido && mensagemValida) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  // Valida o formulário a cada input digitado
  form.addEventListener("input", validarFormulario);

  // Validação e envio do formulário ao submeter
  form.addEventListener("submit", function (event) {
    let nomeValido = true;
    let emailValido = true;
    let assuntoValido = true;
    let mensagemValida = true;

    // Limpa as mensagens de erro anteriores
    nomeError.textContent = "";
    emailError.textContent = "";
    assuntoError.textContent = "";
    mensagemError.textContent = "";

    // Valida o campo Nome
    if (nomeInput.value.trim() === "") {
      nomeError.textContent = "O nome não pode estar em branco.";
      nomeValido = false;
    } else if (nomeInput.value.trim().length > 50) {
      nomeError.textContent = "O nome não pode ter mais de 50 caracteres.";
      nomeValido = false;
    }

    // Valida o campo E-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar e-mail
    if (emailInput.value.trim() === "") {
      emailError.textContent = "O e-mail não pode estar em branco.";
      emailValido = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent =
        "O e-mail deve estar em um formato válido. Exemplo: nome@dominio.com";
      emailValido = false;
    }

    // Valida o campo Assunto
    if (assuntoInput.value.trim() === "") {
      assuntoError.textContent = "O campo assunto não pode estar em branco.";
      assuntoValido = false;
    } else if (assuntoInput.value.trim().length > 50) {
      assuntoError.textContent =
        "O campo assunto não pode ter mais de 50 caracteres.";
      assuntoValido = false;
    }

    // Valida o campo Mensagem
    if (mensagemInput.value.trim() === "") {
      mensagemError.textContent = "O campo mensagem não pode estar em branco.";
      mensagemValida = false;
    } else if (mensagemInput.value.trim().length > 300) {
      mensagemError.textContent =
        "A mensagem não pode ter mais de 300 caracteres.";
      mensagemValida = false;
    }

    // Previne o envio do formulário caso alguma validação falhe
    if (!nomeValido || !emailValido || !assuntoValido || !mensagemValida) {
      event.preventDefault();

      if (!nomeValido) nomeInput.classList.add("input-error");
      else nomeInput.classList.remove("input-error");

      if (!emailValido) emailInput.classList.add("input-error");
      else emailInput.classList.remove("input-error");

      if (!assuntoValido) assuntoInput.classList.add("input-error");
      else assuntoInput.classList.remove("input-error");

      if (!mensagemValida) mensagemInput.classList.add("input-error");
      else mensagemInput.classList.remove("input-error");
    }
  });
});
