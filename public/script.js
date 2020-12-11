function handleClick(event) {
}
async function main() {
    try {
        const form = document.querySelector('.movie');
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = $(event.target).serializeArray();
            console.log(formData);

            search = formData[0].value;
            search = search.replace(/\s/g, "+");

            fetch('/api/' + search)
                .then(response => response.json())
                .then(data => console.log(data));
        })

        //console.log('Main function called');
        //const data =  fetch('/api');
        //console.log('Await Data: ', data);
        //const json = await data.json();
        //console.table(json);

    } catch (error) {
        console.error(error);
    }
}

const titles = []
// fetch ('/api/:search')
//     .then(blob => blob.json())
//     .then(data => titles.push(...data))



function findMatches(titleToMatch, titles) { 
    return titles.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.Title.match(regex) || place.Genre.match(regex) || place.Rated.match(regex) || place.Plot.match(regex) || place.Released.match(regex)
  });
}

console.log(titles);

function displayMatches() {
    const matchArray = findMatches(this.value, titles);
    const html = matchArray.map(place => { 
        const regex = new RegExp(this.value, 'gi');
        const titleName = place.Title.replace(regex, `<span class="h1">${this.value}</span>`);
        const genreName = place.Genre.replace(regex, `<span class="h1">${this.value}</span>`);
        const ratedName = place.Rates.replace(regex, `<span class="h1">${this.value}</span>`);
        const plotName = place.Plot.replace(regex, `<span class="h1">${this.value}</span>`);
        const releasedName = place.Released.replace(regex, `<span class="h1">${this.value}</span>`)


        // const address = place.address_line_1.replace(regex,`<span class="h1">${this.value}</span>`);
        // const city = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
        // const state = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
    
        return `
            <li> 
                <span class="name">${titleName}</span>
                <span class="address">${genreName}</span>
                <pan class ="state"> ${ratedName}</span>
                <span class="name">${plotName}</span>
                <span class="address">${releasedName}</span>

            </li>
    `;
    }).join('');

    // console.log(macthArray);
    suggestions.innerHTML = html;

}



const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);


window.onload = main;
// exist & be invoked inside main function

// lab 7 & assignment 2


