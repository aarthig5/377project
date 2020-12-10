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
          

            fetch('/api/'+search)
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
