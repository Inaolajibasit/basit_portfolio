const hamburgerMenu = document.querySelector('#navigation .nav-icon');
const navContant = document.querySelector('#nav-content');
const closeNavButton = document.querySelector('#nav-content .close-btn');
const navLinks = document.querySelectorAll('#nav-content nav ul li a');
const scrollBtn = document.querySelector('.scroll-top');

if(scrollBtn){
    window.addEventListener('scroll', ()=> {
        if(pageYOffset > (window.innerHeight * 1.2 )){
            scrollBtn.style.display = 'flex';
            console.log(pageYOffset);
        } else{
            scrollBtn.style.display = 'none';
        }
    });
    scrollBtn.addEventListener('click', ()=> {
        window.scrollTo(0, 0);
    } )
}

hamburgerMenu.addEventListener('click', ()=> {
    navContant.classList.add('show');
    document.body.style.overflow='hidden';
})

closeNavButton.addEventListener('click', ()=> {
    navContant.classList.remove('show')
    document.body.style.overflow='initial';
})

navLinks.forEach( link => {
    link.addEventListener('click', ()=> {
        navContant.classList.remove('show');
        document.body.style.overflow='initial';
    })
})


