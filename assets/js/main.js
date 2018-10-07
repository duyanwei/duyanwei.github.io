var nav1 = document.getElementById('nav1');
var nav2 = document.getElementById('nav2');
var nav3 = document.getElementById('nav3');
var nav4 = document.getElementById('nav4');
var nav5 = document.getElementById('nav5');
var nav6 = document.getElementById('nav6');

var resetNav = function() {
	nav1.style.background='';
	nav2.style.background='';
	nav3.style.background='';
	nav4.style.background='';
	nav5.style.background='';
	nav6.style.background='';
};

nav1.addEventListener("click", function() {
	resetNav();
	nav1.style.background = 'gray';
});
nav2.addEventListener("click", function() {
	resetNav();
	nav2.style.background = 'gray';
});
nav3.addEventListener("click", function() {
	resetNav();
	nav3.style.background = 'gray';
});
nav4.addEventListener("click", function() {
	resetNav();
	nav4.style.background = 'gray';
});
nav5.addEventListener("click", function() {
	resetNav();
	nav5.style.background = 'gray';
});
nav6.addEventListener("click", function() {
	resetNav();
	nav6.style.background = 'gray';
});