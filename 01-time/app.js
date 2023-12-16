const hours = document.querySelector('.hours')
const min = document.querySelector('.min');
const seconds = document.querySelector('.seconds');
const format = document.querySelector('.date-format');
const greetings = document.querySelector('.greeting');



function time(){
    let d = new Date();

    let hour = d.getHours();
    let mins = d.getMinutes()
    let second = d.getSeconds();
    let form = d.toLocaleString('default', {weekday:'long', month: 'long',year: 'numeric', day:'numeric'});

    //checktime
   
        mins = checktime(mins)
        second = checktime(second)

    hours.innerHTML = hour;
    min.innerHTML = mins;
    seconds.innerHTML = second;
    format.innerHTML = form;
    //greetings

    if(hour < 12){
        greetings.innerHTML = ' Good Morning...';
        
    }
    else if( hour === 12 || hour < 19){
        greetings.innerHTML = 'Good Afternoon....'
    }
    else{
        greetings.innerHTML = 'Good Evening....'
    }

    setTimeout(time, 1000);
   


    function checktime(i){
        if( i < 10){
            i = '0' + i;
        }
        return i;
    }
 
   
}


time();
