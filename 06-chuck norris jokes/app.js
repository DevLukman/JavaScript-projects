const jokeBtn = document.getElementById('joke-btn');
const jokeBody = document.getElementById('joke');


async function generateJokes(){
  
    const response =  await fetch('https://api.chucknorris.io/jokes/random')
    const data = await response.json();
     jokeBody.innerHTML = data.value;


}


jokeBtn.addEventListener('click', generateJokes);
document.addEventListener('DOMContentLoaded', generateJokes);