document.getElementById("copy-button")
  .addEventListener("click", () => {
    let email = document.getElementById("email").innerText;
    navigator.clipboard.writeText(email)
      .then(() => alert("Correo electrónico copiado en el portapapeles."))
      .catch(error => console.error('Error when trying to copy text: ', error));
  }
);