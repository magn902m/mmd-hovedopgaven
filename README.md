# MMD hovedopgaven

Link to prototype: https://mmd-hovedopgaven.web.app/

## Firebase infomation
### Firebase hosting
Getting started with Firebase Hosting (and GitHub Actions!) - Firebase Fundamentals: https://www.youtube.com/watch?v=P0x0LmiknJc&ab_channel=Firebase

* npm i firebase-tools
* node_modules/.bin/firebase login
* node_modules/.bin/firebase init hosting
* node_modules/.bin/firebase init emulators
* node_modules/.bin/firebase emulators:start
* node_modules/.bin/firebase deploy --only hosting
* This is a way to general a preview: node_modules/.bin/firebase hosting:channel:deploy stage –expires 2h
* node_modules/.bin/firebase
* hosting:channel:list
* node_modules/.bin/firebase 
* hosting:channel:delete stage

Remember npm run build, before deploy !

### Setup preview channels:
* Git add remote origin (url)
* Git branch -M main
* Push the code you have to github
* node_modules/.bin/firebase init hosting:github


# Create React App info

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
