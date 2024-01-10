var elModeNtn = document.querySelector(".mode-btn");
var elBody = document.querySelector("body");
var elSideNav = document.querySelector(".side-nav");
var elHamburger = document.querySelector(".hamburger");
var elCloseBtn = document.querySelector(".close_btn");

elModeNtn.addEventListener("click", function () {
	elBody.classList.toggle("mode");
});

elHamburger.addEventListener("click", function () {
	elSideNav.classList.toggle("show");
	elHamburger.classList.toggle("hidden");
	elCloseBtn.classList.toggle("view");
});

elCloseBtn.addEventListener("click", function () {
	elSideNav.classList.toggle("show");
	elCloseBtn.classList.toggle("view");
	elHamburger.classList.toggle("hidden");
});
