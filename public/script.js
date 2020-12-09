const API_URL = 'http://www.omdbapi.com/?apikey=[yourkey]&';

// RapidAPI request headers
const REQUEST_HEADERS = {
  'X-RapidAPI-Host': 'omdbapi.com/?apikey='
  , 'X-RapidAPI-Key': '3444e26e'
  , 'Content-Type': 'application/x-www-form-urlencoded'
};

function handleClick(event) {

}

async function main() {
    try {
        console.log('Main function called');
        const data = await fetch('/api');
        console.log('Await Data: ', data);
        const json = await data.json();
        console.table(json);

        const form = document.querySelector('.movie');
        form.addEventListener('submit',(event)=>{
            event.preventDefault();
            const formData = $(event.target).serializeArray();
            console.log(formData);

            const search = formData[0].value;
            console.log(search);
        })

    } catch (error) {
        console.error(error);
    }


}

window.onload = main;


// exist & be invoked inside main function 
