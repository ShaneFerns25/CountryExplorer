# CountryExplorer

## Setting up and starting the application:
> After cloning the application or downloading it from Github, open the applications root directory in a source code editor and open two seperate terminals. In one terminal run 'cd client' command to go into the client directory and in the other terminal run 'cd server' command to go into the server directory.

> In both the terminals, run 'cat > .env' to create a .env file to store environment variables or directy just create a new file under the server folder and name it .env and do the same in the client folder. 

- For the .env file in the server folder, Enter: PORT=9000 and save the file.
- For the .env file in the client folder, Enter: REACT_APP_SERVER_API=http://localhost:9000/api and save the file.

> Next run 'npm i' command inside both terminals, this will install all dependencies listed in the package.json files for both client and server.

> Once finished, run 'npm start' command in the terminal with the server directory to start the server, similarily run the same command in the terminal with the client directory, this will start up our client.

> Finally, the website will display on your web browser otherwise you can hold ctrl and click on the link shown in the terminal with the client directory to visit the website
OR
directly copy paste: http://localhost:3000/
in the url of your web browser.

## Using the application
> Enter the common or official name of a country in the input field and click submit.

> The card will then display information related to the country.

> To search for information on another country, click the back button and enter the common or official name of the country and click submit.

> This way the process can be repeated to search for information on any country.

## Testing the frontend using Jest
> To run the tests for the frontend, open a terminal in the client folder or open a terminal and navigate to the client folder using the cd command.

> run 'npm t' or 'npm test' command in the terminal to run all the tests.

## Testing the backend using Cypress
> To run the tests for the backend, open a terminal in the server folder or open a terminal and navigate to the server folder using the cd command.

> run 'npm t' or 'npm test' command in the terminal to run all the tests.

> [!IMPORTANT]
> It is necessary to have the server running to be able to run backend tests.

## Documentation
- [Node](https://nodejs.org/en/docs)
- [React](https://react.dev/learn)
- [Axios](https://axios-http.com/docs/intro)
- [SASS](https://sass-lang.com/documentation/)
- [Dotenv](https://www.dotenv.org/docs/)
- [Express](https://expressjs.com/)
- [Nodemon](https://github.com/remy/nodemon#nodemon)
- [Numeral](http://numeraljs.com/)
- [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- [Jest](https://jestjs.io/docs/getting-started)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)

[LinkedIn Shane Fernandes](https://www.linkedin.com/in/shane-fernandes-330677212/)