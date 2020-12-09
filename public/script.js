const API_URL = 'http://www.omdbapi.com/?apikey=[3444e26e]&';

// RapidAPI request headers
const REQUEST_HEADERS = {
  'X-RapidAPI-Host': 'omdbapi.com/?apikey='
  , 'X-RapidAPI-Key': '3444e26e'
  , 'Content-Type': 'application/x-www-form-urlencoded'
};


const analyzeComment = (comment, callback) => {
    // Creating an object to send to the server
    const data = {
            text: comment
            , language: 'english'
    };
    // Encoding data for application/x-www-form-urlencoded content type
    const formattedData = Qs.stringify(data);
    // POST request to server
    axios.post(API_URL, formattedData, { headers: REQUEST_HEADERS })
            .then(response => {
               const data = response.data;
              // Calling a callback function with data from the server
              callback(data)
            })
            .catch(error => console.error(error))
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
