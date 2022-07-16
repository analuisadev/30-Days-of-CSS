var el = document.getElementById('menu'); 
var numPx = '250'; 


window.addEventListener('scroll', function() {
    if (window.scrollY > numPx) {
    	el.classList.add('ChangeColor'); 
    } else {
      el.classList.remove('ChangeColor'); 
    }
});
