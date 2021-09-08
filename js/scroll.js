const menuItems = document.querySelectorAll('.menu a[href^="#"]')
const nav = document.querySelector('.nav');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToId);
})

function scrollToId(event) {

    nav.classList.remove('active')

    event.preventDefault();

    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;
    
    window.scroll({
        top: section - 28,
    });
}

