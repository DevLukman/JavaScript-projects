const toggleButton = document.querySelector('.toggle-button');
const linksList = document.querySelector('.link-list');
const links = document.querySelectorAll('li');
const navBar = document.getElementById('nav')
const headerTop = document.querySelector('.header-top');
const scrollToTop = document.getElementById('toTop');
scrollToTop.style.display = 'none'


function onToggle(){
    //toggle the button
    linksList.classList.toggle('active');
    //toggleButton.innerHTML = '<i class="fa-sharp fa-solid fa-xmark">';
    //toggleButton.classList.toggle("fa-sharp fa-solid fa-xmark")

}
//removing the active class when any of the link is clicked
function list(e){
    if(e.target.parentElement.classList.contains('link')){
        linksList.classList.remove('active');
    }
  
}


 


//for the scroll events
function onScroll(){

    if(scrollY > 700){
        headerTop.classList.add('scroll');
        scrollToTop.style.display = 'block'
    }
    else{
        headerTop.classList.remove('scroll');
        scrollToTop.style.display = 'none'
    }

}

//To scroll the button back to top
function onButton(){
    scrollTo({top: "0", behavior: "smooth"})

}






//Event Listners
toggleButton.addEventListener('click', onToggle);
document.addEventListener('scroll', onScroll);
navBar.addEventListener('click', list);
scrollToTop.addEventListener('click', onButton);

