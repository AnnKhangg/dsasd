// Chuyển banner

// Các Banner
const bannerBook1 = document.getElementById("bannerBook1");
const bannerBook2 = document.getElementById("bannerBook2");

// Banner thứ 1 chuyển đến Banner thứ 2
const btnBack1 = document.getElementById("btnBack1");
const btnNext1 = document.getElementById("btnNext1");

btnBack1.addEventListener("click", () => {
    bannerBook3.style.visibility = "visible";
    bannerBook3.style.opacity = "1";

    bannerBook1.style.visibility = "hidden";
    bannerBook1.style.opacity = "0";

    bannerBook2.style.visibility = "hidden";
    bannerBook2.style.opacity = "0";
});

btnNext1.addEventListener("click", () => {
    bannerBook1.style.visibility = "hidden";
    bannerBook1.style.opacity = "0";

    bannerBook2.style.visibility = "visible";
    bannerBook2.style.opacity = "1";

    bannerBook3.style.visibility = "hidden";
    bannerBook3.style.opacity = "0";
});


// Banner Thứ 2 chuyển lại Banner thứ 1
const btnBack2 = document.getElementById("btnBack2");
const btnNext2 = document.getElementById("btnNext2");

btnBack2.addEventListener("click", () => {
    bannerBook2.style.visibility = "hidden";
    bannerBook2.style.opacity = "0";

    bannerBook3.style.visibility = "hidden";
    bannerBook3.style.opacity = "0";

    bannerBook1.style.visibility = "visible";
    bannerBook1.style.opacity = "1";
});

btnNext2.addEventListener("click", () => {
    bannerBook2.style.visibility = "hidden";
    bannerBook2.style.opacity = "0";

    bannerBook3.style.visibility = "visible";
    bannerBook3.style.opacity = "1";

    bannerBook1.style.visibility = "hidden";
    bannerBook1.style.opacity = "0";
});

// Banner chuyển từ 3 đến 1 và 2
const btnBack3 = document.getElementById("btnBack3");
const btnNext3 = document.getElementById("btnNext3");

btnBack3.addEventListener("click", () => {
    bannerBook2.style.visibility = "visible";
    bannerBook2.style.opacity = "1";

    bannerBook3.style.visibility = "hidden";
    bannerBook3.style.opacity = "0";

    bannerBook1.style.visibility = "hidden";
    bannerBook1.style.opacity = "0";
})

btnNext3.addEventListener("click", () => {
    bannerBook1.style.visibility = "visible";
    bannerBook1.style.opacity = "1";

    bannerBook3.style.visibility = "hidden";
    bannerBook3.style.opacity = "0";

    bannerBook2.style.visibility = "hidden";
    bannerBook2.style.opacity = "0";
})

// Background tự chuyển
const bookBg = document.querySelectorAll('#Good-text .bg');
let index = 0;

setInterval(() => {
    bookBg[index].classList.remove('active');

    index++;
    if(index >= bookBg.length) index = 0;

    bookBg[index].classList.add('active');
}, 12000);


// Cuộn đến phần sách văn học
const Literatures = document.getElementById("Literatures");
const literaryGenre = document.getElementById("literary-genre");

Literatures.addEventListener("click", () => {
    literaryGenre.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// Cuộn đến phần sách văn học
const Mathematics = document.getElementById("Mathematics");
const mathematicsGenre = document.getElementById("mathematics-genre");

Mathematics.addEventListener("click", () => {
    mathematicsGenre.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});


// Cuộn đến phần sách tiếng Anh
const English = document.getElementById("English");
const englishGenre = document.getElementById("English-genre");

English.addEventListener("click", () => {
    englishGenre.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});