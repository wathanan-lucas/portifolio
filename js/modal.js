const Modal = {
    open() {
        document.querySelector('.modal-overlay')
        .classList.add('active');
    },
    close() {
        document.querySelector('.modal-overlay')
        .classList.remove('active')

    },

    closeMenu() {
        
        const nav = document.querySelector('.nav');

        if(nav.classList.contains('active')) {
            
            nav.classList.remove('active');
            document.documentElement.style.overflow = 'auto';

        }



    }
}
