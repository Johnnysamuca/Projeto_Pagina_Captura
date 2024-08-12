const popupFormulario = document.querySelector(".popup-formulario");
const btnHero = document.querySelector(".btnHero");
const btnAprender = document.querySelector(".btnAprender");
const btnExperiencia = document.querySelector(".btnExperiencia");
const iconExit = document.querySelector(".iconExit");
const popupSaidaPagina = document.querySelector(".popup-saida-pagina");
const iconExitFormularioSaida = document.querySelector(
  ".iconExitFormularioSaida"
);

function openPopup() {
  if (!popupFormulario.classList.contains("aberto")) {
    popupFormulario.classList.add("aberto");
  } else {
    popupFormulario.classList.remove("aberto");
  }
}

function closePopup() {
  popupFormulario.classList.remove("aberto");
}

let popupMostrado = false;

function openPopupSaida(event) {
  if (
    !popupFormulario.classList.contains("aberto") &&
    !popupSaidaPagina.classList.contains("aberto") &&
    event.clientY <= 0
  ) {
    popupSaidaPagina.classList.add("aberto");
    popupMostrado = true;

    // Desativa o evento para evitar que seja acionado novamente
    document.removeEventListener("mouseleave", openPopupSaida);
  }
}

// Adiciona o evento apenas se o popup ainda não foi mostrado
if (!popupMostrado) {
  document.addEventListener("mouseleave", openPopupSaida);
}

function closePopupSaida() {
  popupSaidaPagina.classList.remove("aberto");
}

btnHero.addEventListener("click", openPopup);
btnAprender.addEventListener("click", openPopup);
btnExperiencia.addEventListener("click", openPopup);
iconExit.addEventListener("click", closePopup);
iconExitFormularioSaida.addEventListener("click", closePopupSaida);
