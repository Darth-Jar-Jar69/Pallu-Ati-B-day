const revealButton = document.getElementById("revealButton");
const giftMessage = document.getElementById("giftMessage");

revealButton.addEventListener("click", () => {
    giftMessage.classList.remove("hidden");
    revealButton.style.display = "none";
});
