// Chuyển banner
// Banner thứ 1 chuyển đến Banner thứ 2 hoặc thứ 5
const btnBack1 = document.getElementById("btnBack1");
const btnNext1 = document.getElementById("btnNext1");

btnBack1.addEventListener("click", () => {
    bannerBook1.style.visibility = "hidden";
    bannerBook1.style.opacity = "0";

    bannerBook2.style.visibility = "hidden";
    bannerBook2.style.opacity = "0";

    bannerBook3.style.visibility = "hidden";
    bannerBook3.style.opacity = "0";

    bannerBook4.style.visibility = "hidden";
    bannerBook4.style.opacity = "0";
    
    bannerBook5.style.visibility = "visible";
    bannerBook5.style.opacity = "1";
});

btnNext1.addEventListener("click", () => {
    bannerBook1.style.visibility = "hidden";
    bannerBook1.style.opacity = "0";

    bannerBook2.style.visibility = "visible";
    bannerBook2.style.opacity = "1";

    bannerBook3.style.visibility = "hidden";
    bannerBook3.style.opacity = "0";

    bannerBook4.style.visibility = "hidden";
    bannerBook4.style.opacity = "0";
    
    bannerBook5.style.visibility = "hidden";
    bannerBook5.style.opacity = "0";
});


// Banner Thứ 2 chuyển lại Banner thứ 1
const btnBack2 = document.getElementById("btnBack2");
const btnNext2 = document.getElementById("btnNext2");

btnBack2.addEventListener("click", () => {
    bannerBook1.style.visibility = "visible";
    bannerBook1.style.opacity = "1";

    bannerBook2.style.visibility = "hidden";
    bannerBook2.style.opacity = "0";

    bannerBook3.style.visibility = "hidden";
    bannerBook3.style.opacity = "0";

    bannerBook4.style.visibility = "hidden";
    bannerBook4.style.opacity = "0";
    
    bannerBook5.style.visibility = "hidden";
    bannerBook5.style.opacity = "0";
});

btnNext2.addEventListener("click", () => {
    bannerBook1.style.visibility = "hidden";
    bannerBook1.style.opacity = "0";

    bannerBook2.style.visibility = "hidden";
    bannerBook2.style.opacity = "0";

    bannerBook3.style.visibility = "visible";
    bannerBook3.style.opacity = "1";

    bannerBook4.style.visibility = "hidden";
    bannerBook4.style.opacity = "0";
    
    bannerBook5.style.visibility = "hidden";
    bannerBook5.style.opacity = "0";
});

// Banner chuyển từ 3 đến 1 và 2
const btnBack3 = document.getElementById("btnBack3");
const btnNext3 = document.getElementById("btnNext3");

btnBack3.addEventListener("click", () => {
    bannerBook1.style.visibility = "hidden";
    bannerBook1.style.opacity = "0";

    bannerBook2.style.visibility = "visible";
    bannerBook2.style.opacity = "1";

    bannerBook3.style.visibility = "hidden";
    bannerBook3.style.opacity = "0";

    bannerBook4.style.visibility = "hidden";
    bannerBook4.style.opacity = "0";
    
    bannerBook5.style.visibility = "hidden";
    bannerBook5.style.opacity = "0";
});

btnNext3.addEventListener("click", () => {
    bannerBook1.style.visibility = "hidden";
    bannerBook1.style.opacity = "0";

    bannerBook2.style.visibility = "hidden";
    bannerBook2.style.opacity = "0";

    bannerBook3.style.visibility = "hidden";
    bannerBook3.style.opacity = "0";

    bannerBook4.style.visibility = "visible";
    bannerBook4.style.opacity = "1";
    
    bannerBook5.style.visibility = "hidden";
    bannerBook5.style.opacity = "0";
});

// Banner 4 chuyển đến 3 hoặc 5
const btnBack4 = document.getElementById("btnBack4");
const btnNext4 = document.getElementById("btnNext4");

btnBack4.addEventListener("click", () => {
    bannerBook1.style.visibility = "hidden";
    bannerBook1.style.opacity = "0";

    bannerBook2.style.visibility = "hidden";
    bannerBook2.style.opacity = "0";

    bannerBook3.style.visibility = "visible";
    bannerBook3.style.opacity = "1";

    bannerBook4.style.visibility = "hidden";
    bannerBook4.style.opacity = "0";
    
    bannerBook5.style.visibility = "hidden";
    bannerBook5.style.opacity = "0";
});

btnNext4.addEventListener("click", () => {
    bannerBook1.style.visibility = "hidden";
    bannerBook1.style.opacity = "0";

    bannerBook2.style.visibility = "hidden";
    bannerBook2.style.opacity = "0";

    bannerBook3.style.visibility = "hidden";
    bannerBook3.style.opacity = "0";

    bannerBook4.style.visibility = "hidden";
    bannerBook4.style.opacity = "0";
    
    bannerBook5.style.visibility = "visible";
    bannerBook5.style.opacity = "1";
});

// Banner 5 chuyển đến banner thứ 1 hoặc 4;
const btnBack5 = document.getElementById("btnBack5");
const btnNext5 = document.getElementById("btnNext5");

btnBack5.addEventListener("click", () => {
    bannerBook1.style.visibility = "hidden";
    bannerBook1.style.opacity = "0";

    bannerBook2.style.visibility = "hidden";
    bannerBook2.style.opacity = "0";

    bannerBook3.style.visibility = "hidden";
    bannerBook3.style.opacity = "0";

    bannerBook4.style.visibility = "visible";
    bannerBook4.style.opacity = "1";
    
    bannerBook5.style.visibility = "hidden";
    bannerBook5.style.opacity = "0";
});

btnNext5.addEventListener("click", () => {
    bannerBook1.style.visibility = "visible";
    bannerBook1.style.opacity = "1";

    bannerBook2.style.visibility = "hidden";
    bannerBook2.style.opacity = "0";

    bannerBook3.style.visibility = "hidden";
    bannerBook3.style.opacity = "0";

    bannerBook4.style.visibility = "hidden";
    bannerBook4.style.opacity = "0";
    
    bannerBook5.style.visibility = "hidden";
    bannerBook5.style.opacity = "0";
});


// Chuyển Banner 2
// Chuyển banner
// Banner thứ 6 chuyển đến Banner thứ 7 hoặc thứ 10
const btnBack6 = document.getElementById("btnBack6");
const btnNext6 = document.getElementById("btnNext6");

btnBack6.addEventListener("click", () => {
    bannerBook6.style.visibility = "hidden";
    bannerBook6.style.opacity = "0";

    bannerBook7.style.visibility = "hidden";
    bannerBook7.style.opacity = "0";

    bannerBook8.style.visibility = "hidden";
    bannerBook8.style.opacity = "0";

    bannerBook9.style.visibility = "hidden";
    bannerBook9.style.opacity = "0";
    
    bannerBook10.style.visibility = "visible";
    bannerBook10.style.opacity = "1";
});

btnNext6.addEventListener("click", () => {
    bannerBook6.style.visibility = "hidden";
    bannerBook6.style.opacity = "0";

    bannerBook7.style.visibility = "visible";
    bannerBook7.style.opacity = "1";

    bannerBook8.style.visibility = "hidden";
    bannerBook8.style.opacity = "0";

    bannerBook9.style.visibility = "hidden";
    bannerBook9.style.opacity = "0";
    
    bannerBook10.style.visibility = "hidden";
    bannerBook10.style.opacity = "0";
});


// Banner Thứ 2 chuyển lại Banner thứ 1
const btnBack7 = document.getElementById("btnBack7");
const btnNext7 = document.getElementById("btnNext7");

btnBack7.addEventListener("click", () => {
    bannerBook6.style.visibility = "visible";
    bannerBook6.style.opacity = "1";

    bannerBook7.style.visibility = "hidden";
    bannerBook7.style.opacity = "0";

    bannerBook8.style.visibility = "hidden";
    bannerBook8.style.opacity = "0";

    bannerBook9.style.visibility = "hidden";
    bannerBook9.style.opacity = "0";
    
    bannerBook10.style.visibility = "hidden";
    bannerBook10.style.opacity = "0";
});

btnNext7.addEventListener("click", () => {
    bannerBook6.style.visibility = "hidden";
    bannerBook6.style.opacity = "0";

    bannerBook7.style.visibility = "hidden";
    bannerBook7.style.opacity = "0";

    bannerBook8.style.visibility = "visible";
    bannerBook8.style.opacity = "1";

    bannerBook9.style.visibility = "hidden";
    bannerBook9.style.opacity = "0";
    
    bannerBook10.style.visibility = "hidden";
    bannerBook10.style.opacity = "0";
});

// Banner chuyển từ 3 đến 1 và 2
const btnBack8 = document.getElementById("btnBack8");
const btnNext8 = document.getElementById("btnNext8");

btnBack8.addEventListener("click", () => {
    bannerBook6.style.visibility = "hidden";
    bannerBook6.style.opacity = "0";

    bannerBook7.style.visibility = "visible";
    bannerBook7.style.opacity = "1";

    bannerBook8.style.visibility = "hidden";
    bannerBook8.style.opacity = "0";

    bannerBook9.style.visibility = "hidden";
    bannerBook9.style.opacity = "0";
    
    bannerBook10.style.visibility = "hidden";
    bannerBook10.style.opacity = "0";
});

btnNext8.addEventListener("click", () => {
    bannerBook6.style.visibility = "hidden";
    bannerBook6.style.opacity = "0";

    bannerBook7.style.visibility = "hidden";
    bannerBook7.style.opacity = "0";

    bannerBook8.style.visibility = "hidden";
    bannerBook8.style.opacity = "0";

    bannerBook9.style.visibility = "visible";
    bannerBook9.style.opacity = "1";
    
    bannerBook10.style.visibility = "hidden";
    bannerBook10.style.opacity = "0";
});

// Banner 4 chuyển đến 3 hoặc 5
const btnBack9 = document.getElementById("btnBack9");
const btnNext9 = document.getElementById("btnNext9");

btnBack9.addEventListener("click", () => {
    bannerBook6.style.visibility = "hidden";
    bannerBook6.style.opacity = "0";

    bannerBook7.style.visibility = "hidden";
    bannerBook7.style.opacity = "0";

    bannerBook8.style.visibility = "visible";
    bannerBook8.style.opacity = "1";

    bannerBook9.style.visibility = "hidden";
    bannerBook9.style.opacity = "0";
    
    bannerBook10.style.visibility = "hidden";
    bannerBook10.style.opacity = "0";
});

btnNext9.addEventListener("click", () => {
    bannerBook6.style.visibility = "hidden";
    bannerBook6.style.opacity = "0";

    bannerBook7.style.visibility = "hidden";
    bannerBook7.style.opacity = "0";

    bannerBook8.style.visibility = "hidden";
    bannerBook8.style.opacity = "0";

    bannerBook9.style.visibility = "hidden";
    bannerBook9.style.opacity = "0";
    
    bannerBook10.style.visibility = "visible";
    bannerBook10.style.opacity = "1";
});

// Banner 5 chuyển đến banner thứ 1 hoặc 4;
const btnBack10 = document.getElementById("btnBack10");
const btnNext10= document.getElementById("btnNext10");

btnBack10.addEventListener("click", () => {
    bannerBook6.style.visibility = "hidden";
    bannerBook6.style.opacity = "0";

    bannerBook7.style.visibility = "hidden";
    bannerBook7.style.opacity = "0";

    bannerBook8.style.visibility = "hidden";
    bannerBook8.style.opacity = "0";

    bannerBook9.style.visibility = "visible";
    bannerBook9.style.opacity = "1";
    
    bannerBook10.style.visibility = "hidden";
    bannerBook10.style.opacity = "0";
});

btnNext10.addEventListener("click", () => {
    bannerBook6.style.visibility = "visible";
    bannerBook6.style.opacity = "1";

    bannerBook7.style.visibility = "hidden";
    bannerBook7.style.opacity = "0";

    bannerBook8.style.visibility = "hidden";
    bannerBook8.style.opacity = "0";

    bannerBook9.style.visibility = "hidden";
    bannerBook9.style.opacity = "0";
    
    bannerBook10.style.visibility = "hidden";
    bannerBook10.style.opacity = "0";
});

