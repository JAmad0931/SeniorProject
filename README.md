# SeniorProject
Objective is to create a web app that allows users to keep track of personal collectibles and will be limited to items such as manga, legos, funkos, and action figures.

The app may not run properly if with the connection of the database as I am unsure as so how to allow one to use the database I created without giving important information out.

Instructions for running the App

Step 1: You need a firebase account

Step 2: Create a project & set up password and email authentication, hosting, and firestore database. Copy the credentials provided by the creation of the project and use them to replace the ones in the index.js file.

Step 3: Make sure you have node.js installed on your machine.

Step 4: In the terminal of your editor make sure you are in the public directory by using cd public

Step 5: Install the firebase tools in the directory with the command npm i firebase-tools -D

Step 6: Login into Firebase account using node_modules/.bin/firebase login

Step 7: Run node_modules/.bin/firebase init hosting to set up hosting. Use existing project, type public as directory, type N for single-page app, and N for automatic builds

Step 8: Run node_modules/.bin/firebase init emulators. Choose hosting, port 5033, enable emulator UI Yes, port for emulator UI enter, download emulators now NO.

Step 9: Run node-modules/.bin/firebase emulators:start --only hosting 

Step 10: In a seperate terminal make sure you are in the public directory and run firebase emulators:start --only auth
