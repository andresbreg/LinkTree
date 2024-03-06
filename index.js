let language = 'es';

function changeLanguage (selectedLanguage) {
  
  language = selectedLanguage;

  // Hide all texts
  document.querySelectorAll('.text')
  .forEach ( text => text.style.display = 'none');

  // Shows the texts corresponding to the selected language
  document.querySelectorAll('.text.' + language)
  .forEach( text => text.style.display = 'inline');
  
  document.querySelectorAll('.language-button')
  .forEach( button => {
    button.style.background = 'rgb(5, 39, 101)'
    button.style.color = 'white'
  });

  document.querySelectorAll('.language-button.' + language)
  .forEach( button => {
    button.style.background = 'white'
    button.style.color = 'rgb(5, 39, 101)'
  });
}

document.getElementById("copy-button")
  .addEventListener("click", () => {
    const email = document.getElementById("email").innerText;
    navigator.clipboard.writeText(email)
      .then(() => alert("Correo electrónico copiado en el portapapeles."))
      .catch(error => console.error('Error when trying to copy text: ', error));
  }
);