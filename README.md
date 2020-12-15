# ReadMe


###### Title:
Firefilm 

###### Description of Project:
Our group decided to create a program that functions similiar to the application, Tinder, however, instead with movie suggestions. Users are able to swipe right to like a movie, and swipe left to dislike a movie. The application then generates a list of movies based off what the user has liked, and outputs it. The database our group used was the OMDB database which is an Open Movie Database, which contains specific details about movies, such as the year released, genre, runtime, main actors, and ratings. As some of this data is extremely relevant for finding movies of the same quality, we decided to focus on the genre, and ratings. 

###### Link to Heroku:
Link to Heroku Webpage!

###### Description of Target Browser:
This web application works well with Chrome, Safari, and Firefox. 

###### Link to user Manual:
Link to User Manuel

###### Link to Developer Manual:
Link to Developer Manual

[User Manual](https://github.com/aarthig5/377project/blob/master/docs/User.md)

[Developer Manual](https://github.com/aarthig5/377project#developer-manual)

# Developer Manual

###### How to install your application and all dependencies?
In order to properly run the web application, we need to install dependencies for the frontend, and the backend. After you have installed the code folder onto your computer, in your terminal type "npm install" to download the other dependencies for the backend to run on the localhost browser. Do the same for the frontend dependencies as well.  

###### How to run your application on a server
You can run the web application on your server by typing "npm start" into your terminal. The page will then be run on the localhost:/3000 port. This triggers the backend, and the web application can be run with the user search term. 

###### How to run any tests you have written for your software
We did not use any tests for our software. 

###### The API for your server application - all GET, POST, PUT, etc endpoints, and what they each do
Our backend servers uses GET, FETCH, and POST. These are used to actually pull data from the API. These are triggered when the user inputs something into the search bar, and the javascript pulls data from the API regarding the specific search term. 

###### A clear set of expectations around known bugs and a road-map for future development.
The issue we are currently working on is getting the server to pull other kinds of information from the API database into our web application. Since the API we used requires authroization through an API key, we ran into a lot of difficulties with actually being able to pull data from the API. 

In the future, we hope to make this web application into an actual Tinder like service for movies where people can match with movies they might like, and be able see them in their matches list. 
