// function handleClick(event) {
// }
// async function main() {
//     try {
//         const form = document.querySelector('.movie');
//         form.addEventListener('submit', (event) => {
//             event.preventDefault();
//             const formData = $(event.target).serializeArray();
//             console.log(formData);

//             search = formData[0].value;
//             search = search.replace(/\s/g, "+");

//             fetch('/api/' + search)
//                 .then(response => response.json())
//                 .then(data => console.log(data));
//         })

//         //console.log('Main function called');
//         //const data =  fetch('/api');
//         //console.log('Await Data: ', data);
//         //const json = await data.json();
//         //console.table(json);

//     } catch (error) {
//         console.error(error);
//     }
// }

// const titles = []
// // fetch ('/api/:search')
// //     .then(blob => blob.json())
// //     .then(data => titles.push(...data))

// function findMatches(titleToMatch, titles) { 
//     return titles.filter(place => {
//         const regex = new RegExp(wordToMatch, 'gi');
//         return place.Title.match(regex) || place.Genre.match(regex) || place.Rated.match(regex) || place.Plot.match(regex) || place.Released.match(regex)
//   });
// }

// console.log(titles);

// function displayMatches() {
//     const matchArray = findMatches(this.value, titles);
//     const html = matchArray.map(place => { 
//         const regex = new RegExp(this.value, 'gi');
//         const titleName = place.Title.replace(regex, `<span class="h1">${this.value}</span>`);
//         const genreName = place.Genre.replace(regex, `<span class="h1">${this.value}</span>`);
//         const ratedName = place.Rates.replace(regex, `<span class="h1">${this.value}</span>`);
//         const plotName = place.Plot.replace(regex, `<span class="h1">${this.value}</span>`);
//         const releasedName = place.Released.replace(regex, `<span class="h1">${this.value}</span>`)


//         // const address = place.address_line_1.replace(regex,`<span class="h1">${this.value}</span>`);
//         // const city = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
//         // const state = place.state.replace(regex, `<span class="h1">${this.value}</span>`);

//         return `
//             <li> 
//                 <span class="name">${titleName}</span>
//                 <span class="address">${genreName}</span>
//                 <pan class ="state"> ${ratedName}</span>
//                 <span class="name">${plotName}</span>
//                 <span class="address">${releasedName}</span>

//             </li>
//     `;
//     }).join('');

//     // console.log(macthArray);
//     suggestions.innerHTML = html;

// }

// const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);


// window.onload = main;
// // exist & be invoked inside main function

// // lab 7 & assignment 2


$(document).ready(() => {
    $('#searchForm').on('submit', () => {
        // console.log($('searchText').val());
        let searchText = $('searchText').val();
        getMovies(searchText);
        e.preventDefault();

    });
});

function getMovies(searchText) {
    // console.log(searchText);
    axios.get('http://omdbapi.com?s=' + searchText)
        .then((response) => {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, (index, movie) => {
                output += `
                    <div class="col-md-3">
                        <div class="well text-center"> 
                            <img src="${movie.Poster}">
                            <h5>${movie.Title}</h5>
                            <a>onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                        </div>
                    </div>    
                `;
            });
            $('.movies').html(output);
        })

        .catch((err) => {
            console.log(err);
        });
}


function movieSelected(id) {
    sessionStorage.setItem('movieId', id);
    window.location = 'movie.html';
    return false;
}



function getMovies() {
    let movieId = sessionStorage.getItem('movieId');
    axios.get('http://omdbapi.com?t=' + movieId)
        .then((response) => {
            console.log(response);
            let movie = response.data;

            let output = `
            <div class="row">
                <div class="col-md-4"
                    <img src="${movie.Poster}" class="thumbnail">
                </div>
                <div class="col-md-8"
                    <h2>${movie.Title}</h2>
                    <ul class="list-group">
                        <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
                        <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
                        <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
                        <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
                        <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
                        <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
                        <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="well">
                    <h3>Plot</h3>
                    ${movie.Plot}
                    <hr>
                    <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                    <a href="index.html" class="btn btn-default">Go Back to Search</a>
                </div>
            </div>
        `;

            $('.movies').html(output);
        })

        .catch((err) => {
            console.log(err);
        });
}