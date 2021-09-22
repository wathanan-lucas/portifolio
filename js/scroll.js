const menuItems = document.querySelectorAll('.menu a[href^="#"]')
const nav = document.querySelector('.nav');
const topo = document.querySelector('.icon a[href^="#"]')

menuItems.forEach(item => {
    item.addEventListener('click', scrollToId);
})

topo.addEventListener('click', scrollTopo)

function scrollTopo(event) {
    event.preventDefault();

    window.scroll({
        top: 0
    })

}

function scrollToId(event) {

    nav.classList.remove('active')

    event.preventDefault();

    const element = event.target;
    const id = element.getAttribute('href');
    const section = document.querySelector(id).offsetTop;


    window.scroll({
        top: section - 15,
    });
    
   
}





