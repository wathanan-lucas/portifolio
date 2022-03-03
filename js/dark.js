const btn = document.querySelector('.lightDark');
const background = document.querySelector('.bodyy')
const logo = document.querySelector('.logo');
const menu_div = document.querySelectorAll('.menu li a')
const menu = document.querySelector('.menu')
const card = document.querySelectorAll('.card .card-content')
const about = document.querySelector('.about-h1')
const skills = document.querySelector('.skills-h1')
const photo = document.querySelector('.photo')
const button = document.querySelector('.button')
const button2 = document.querySelector('.description .button')
const description = document.querySelector('.description p')
const title_h1 = document.querySelector('.title h1')
const title_h3 = document.querySelector('.title h3')
const title_p = document.querySelector('.title p')
const hamburguer = document.querySelector('.hamburguer')
const modal = document.querySelector('.modal');
const modal_p = document.querySelector('.modal p');
const attention = document.querySelector('.attention-img h1');
const modal_button = document.querySelector('.modal-button .button');
const midias = document.querySelectorAll('.social-midias img');
const seta = document.querySelector('.topo img');

function Dark() {
    btn.classList.toggle('dark');
    background.classList.toggle('dark');
    logo.classList.toggle('dark');
    menu.classList.toggle('dark');
    about.classList.toggle('dark');
    skills.classList.toggle('dark');
    photo.classList.toggle('dark');
    button.classList.toggle('dark');
    button2.classList.toggle('dark');
    description.classList.toggle('dark');
    title_h1.classList.toggle('dark');
    title_p.classList.toggle('dark');
    title_h3.classList.toggle('dark');
    hamburguer.classList.toggle('dark');
    modal.classList.toggle('dark');
    modal_p.classList.toggle('dark');
    attention.classList.toggle('dark');
    modal_button.classList.toggle('dark');
    seta.classList.toggle('dark');
    
    


    card.forEach(card => {
        card.classList.toggle('dark');
    });
    
    menu_div.forEach(menu_div => {
        menu_div.classList.toggle('dark'); 
    });

    midias.forEach(midias => {
        midias.classList.toggle('dark');
    });


}