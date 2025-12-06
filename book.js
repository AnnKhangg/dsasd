// Chuyển banner

// Các Banner
const bannerBook1 = document.getElementById("bannerBook1");
const bannerBook2 = document.getElementById("bannerBook2");

// Banner thứ 1 chuyển đến Banner thứ 2
const btnBack1 = document.getElementById("btnBack1");
const btnNext1 = document.getElementById("btnNext1");

btnBack1.addEventListener("click", () => {
    bannerBook1.style.visibility = "hidden";
    bannerBook1.style.opacity = "0";

    bannerBook2.style.visibility = "visible";
    bannerBook2.style.opacity = "1";
});

btnNext1.addEventListener("click", () => {
    bannerBook1.style.visibility = "hidden";
    bannerBook1.style.opacity = "0";

    bannerBook2.style.visibility = "visible";
    bannerBook2.style.opacity = "1";
});


// Banner Thứ 2 chuyển lại Banner thứ 1
const btnBack2 = document.getElementById("btnBack2");
const btnNext2 = document.getElementById("btnNext2");

btnBack2.addEventListener("click", () => {
    bannerBook2.style.visibility = "hidden";
    bannerBook2.style.opacity = "0";

    bannerBook1.style.visibility = "visible";
    bannerBook1.style.opacity = "1";
});

btnNext2.addEventListener("click", () => {
    bannerBook2.style.visibility = "hidden";
    bannerBook2.style.opacity = "0";

    bannerBook1.style.visibility = "visible";
    bannerBook1.style.opacity = "1";
});