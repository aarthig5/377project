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

  function findMatches(wordToMatch, restaraunt) {
    return restaraunt.filter(place => {
        // here we need to figure out if the city or state matches what was searched
        const regex = new RegExp(wordToMatch, 'gi');
        return place.name.match(regex) || place.category.match(regex)
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value, restaraunt);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const restarauntName = place.name.replace(regex, `<span class="hl">${this.value}</span>`);
        const categoryName = place.category.replace(regex, `<span class="hl">${this.value}</span>`);
        const address_line_1Name = place.address_line_1.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
  
    <li> 
      <span class="name">${restarauntName}</span>
      <br>
      <span clas="category">${categoryName}</span>
      <br>
      <span class="address_line_1Name">${address_line_1Name}</span>
    </li>
   
  `;

    }).join('');
    suggestions.innerHTML = html;
}


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
