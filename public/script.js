function handleClick(event) {
}

// function displayMatches() {
//     const matchArray = findMatches(this.value, names);
//     const html = matchArray.map(place => { 
//         const regex = new RegExp(this.value, 'gi');
//         const titleName = place.name.replace(regex, `<span class="h1">${this.value}</span>`);
//         // const categoryName = place.category.replace(regex, `<span class="h1">${this.value}</span>`);
//         // const address = place.address_line_1.replace(regex,`<span class="h1">${this.value}</span>`);
//         // const city = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
//         // const state = place.state.replace(regex, `<span class="h1">${this.value}</span>`);
    
//         return `
//             <li> 
//                 <span class="name">${titleName}, ${categoryName}</span>
//             </li>
//     `;
//     }).join('');

//     // console.log(macthArray);
//     suggestions.innerHTML = html;

// }


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

window.onload = main;
// exist & be invoked inside main function

// lab 7 & assignment 2
