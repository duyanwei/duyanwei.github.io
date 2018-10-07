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

  nav1.style.color='#ffffff';
	nav2.style.color='#ffffff';
	nav3.style.color='#ffffff';
	nav4.style.color='#ffffff';
	nav5.style.color='#ffffff';
	nav6.style.color='#ffffff';
};

nav1.addEventListener("click", function() {
	resetNav();
  nav1.style.background = 'white';
	nav1.style.color = 'black';
});
nav2.addEventListener("click", function() {
	resetNav();
	nav2.style.background = 'white';
	nav2.style.color = 'black';
});
nav3.addEventListener("click", function() {
	resetNav();
	nav3.style.background = 'white';
	nav3.style.color = 'black';
});
nav4.addEventListener("click", function() {
	resetNav();
	nav4.style.background = 'white';
	nav4.style.color = 'black';
});
nav5.addEventListener("click", function() {
	resetNav();
	nav5.style.background = 'white';
	nav5.style.color = 'black';
});
nav6.addEventListener("click", function() {
	resetNav();
	nav6.style.background = 'white';
	nav6.style.color = 'black';
});
