const navbar = document.getElementByTagName('nav')[0];
window.addEventListener('scroll', function() {
    console.log(window.scrolly);
    if (window.scrolly > 1) {
        navbar.classList.replace('bg-transparent', 'nav-color');
    }else if (this,window.scrolly <= 0) {
     navbar.classList.replace('nav-color', 'bg-transparent')
    }
});
