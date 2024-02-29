const newURL = "https://api.pexels.com/v1/search?query=flours";

// <div class="card mb-4 shadow-sm">
// <img  class="bd-placeholder-img card-img-top"/>
// <div class="card-body">
// <h5 class="card-title">Lorem Ipsum</h5>
// <p class="card-text">
// <div class="d-flex justify-content-between align-items-center">
//<div class="btn-group">
// <button type="button" class="btn btn-sm btn-outline-secondary">
// <button id="edit" type="button" class="btn btn-sm btn-outline-secondary">
//<small class="text-muted">9 mins</small>

const generalCard = document.getElementsByClassName("row");

newURL.forEach((element) => {
  const newCard = document.createElement("div");
  newCard.className = "col-md-4";
  generalCard.appendChild(newCard);

  const newCard2 = document.createElement("div");
  newCard2.className = "card mb-4 shadow-sm";
  newCard.appendChild();
});

//1) Premere sul bottone "Load Images" caricherà il contenuto delle API nella pagina:

//2) Premere sul bottone "Load Secondary Images" invece dovrà usare una diversa query:

//3) Il tasto "Edit" andrà sostituito con un tasto "Hide".
const buttonH = document.querySelectorAll(".btn.btn-sm.btn-outline-secondary.edit");
for (let i = 0; i < buttonH.length; i++) {
  buttonH[i].textContent = "Hide";
}

buttonH.forEach((button) => {
  button.addEventListener("click", function () {
    const deleteCard = document.querySelectorAll(".col-md-4");
    deleteCard.forEach((card) => {
      card.style.display = "none";
    });
  });
});

//4) Quando si preme "Hide", l'intera card dovrebbe scomparire.

//5) Sostituisci il testo "9 mins" del template delle card con l'id dell'immagine corrispondente.
//6) Nella sezione principale aggiungi un campo di ricerca. Usa il valore di questo campo per cercare nuove immagini rimpiazzando quelle esistenti.
//7) Cliccare l'immagine o il suo nome farà cambiare pagina verso una di dettaglio dell'immagine. Qui dovrai visualizzare immagine, nome artista e linkare la sua pagina personale. Dai la possibilità all'utente di tornare indietro.

//[EXTRA]
//8) Il background della pagina di dettaglio dovrà essere la media dei colori presenti in quella foto.
//9) Quando l'utente clicca su bottone "VIEW" della Card, apri l'immagine corrispondente in un modale.
