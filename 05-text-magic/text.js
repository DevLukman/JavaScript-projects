const input = document.getElementById('input');
const buttons = document.getElementById('buttons');
const btn = document.getElementById('btn');
const output = document.getElementById('output');


function onInput(e){
    output.innerHTML = e.target.value;
}

function onClick(e){
    if(e.target.classList.contains('btn-1')){
        output.style.textTransform = 'upperCase';
    }
    else if(e.target.classList.contains('btn-2')){
        output.style.textTransform = 'capitalize';
    }
    else if(e.target.classList.contains('btn-3')){
        output.style.textTransform = 'lowerCase';
    }
    else if(e.target.classList.contains('btn-4')){
        output.style.fontWeight = 'bold'
    }
   
    else if(e.target.classList.contains('btn-5')){
        output.style.textDecoration = 'underLine';
    }
}







//EventListeners

input.addEventListener('input', onInput);
buttons.addEventListener('click', onClick);
