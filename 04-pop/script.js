const open = document.getElementById('open');
const close = document.getElementById('close');
const content = document.getElementById('body');


function onclick(){
    content.classList.add('active');

    function onClose(){
        content.classList.remove('active')
    }

    close.addEventListener('click', onClose);
}


//Event Listener
open.addEventListener('click', onclick)