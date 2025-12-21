const closePopup = document.getElementById("closePopup");
const popup = document.getElementsByClassName("popup")[0];

// Tắt thông báo
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});
