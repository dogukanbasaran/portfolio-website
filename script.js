window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if(window.scrollY > 70){
        header.classList.add('scrolled');
    } else{
        header.classList.remove('scrolled');
    }
})