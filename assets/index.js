const backdropElement = document.getElementById("backdrop");
const modalLinkElements = document.querySelectorAll(".info-modal");
let infoModal;

function toggleBackdrop() {
  backdropElement.classList.toggle("visible");
}
function hideInfoModal() {
  toggleBackdrop();
  document.body.removeChild(infoModal);
}
backdropElement.addEventListener("click", hideInfoModal);

function presentInfoModal(event) {
  const text = event.target.dataset.text;
  toggleBackdrop();
  infoModal = document.createElement("div");
  infoModal.classList.add("modal");
  infoModal.innerHTML = `
              <h2>More Details</h2>
             <p>${text}</p> 
           `;
  const closedButton = document.createElement("button");
  closedButton.textContent = "OKAY";
  closedButton.addEventListener("click", hideInfoModal);
  infoModal.appendChild(closedButton);
  document.body.appendChild(infoModal);
}
modalLinkElements.forEach(function(item, index) {
  item.addEventListener("click", presentInfoModal);
});
