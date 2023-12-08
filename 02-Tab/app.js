const container = document.querySelector('.container');


function onClick(e){
    if(e.target.parentElement.parentElement.classList.contains('tabs')){
        shiftFocus(e.target);
    }
}

function shiftFocus(tab){
    const tabContent = document.getElementById(tab.href.split('#')[1]);
    const active = document.querySelector('.active');
    const visible = document.querySelector('.visible-content');

    tabContent.classList.add('visible-content');
    tab.classList.add('active');
    visible.classList.toggle('visible-content')
    active.classList.toggle('active');
   
   

}



//event-listner
container.addEventListener('click', onClick);