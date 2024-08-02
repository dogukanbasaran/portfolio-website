window.addEventListener('scroll', () => {
    const header = document.getElementById('header');

    if(window.scrollY > 70){
        header.classList.add('scrolled');
    } else{
        header.classList.remove('scrolled');
    }
})


const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
    });
});

const removeActiveClasses = () => {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}