# Pong

## Homework 7 for CMU 15-237 Mobile Web Apps

**Task:** Create a 3-client version of pong. One display, two remote controllers.

**Collaborators:** Matt Schallert, Dima Ivanyuk, Salem Hilal

## Instructions
1. `npm install` (having the package.json file takes care of what to install)
2. **IMPORTANT:** In `public/javascriots/main.js`, replace the IP address with your address on your local network. This tells the client what socket server to connect to.
3. `node app.js` to start the server (socket and web server are magically combined)
4. Go to `http://localhost:3000` for the main page
5. Click "Client" if you want to log in as a user, otherwise click "Display" to display the game
6. If you click client, you can log in as one of the following users:

        var users = [
            { id: 1, username: 'bob', password: 'secret' },
            { id: 2, username: 'joe', password: 'secret' }
        ];"
   
   bob is the left paddle, joe is the right paddle
7. Play!